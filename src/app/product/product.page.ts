import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ToastController,
  Platform,
  LoadingController,
  NavController
} from '@ionic/angular';
import { RestApiService } from '../rest-api.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  myCurrentLocation: any;
  destination: any;

  isUber: boolean;
  uberProducts: any;
  uberPrice: any;


  constructor(private route: ActivatedRoute,
    public api: RestApiService, public loadingController: LoadingController,
    public navCtrl: NavController, public plt: Platform,
    public toastCtrl: ToastController) {
    this.isUber = false;
    this.route.queryParams.subscribe(params => {
      this.isUber = JSON.parse(params['products']).uber;

      this.myCurrentLocation = JSON.parse(params['myCurrentLocation']);
      this.destination = JSON.parse(params['destination']);
    });

  }

  async getData() {
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    this.api.getProducts(this.myCurrentLocation.lat, this.myCurrentLocation.lng)
      .subscribe(res => {
        console.log(res);
        this.uberProducts = JSON.parse(res[0]['data']).products;

        console.log(this.uberProducts);
        loading.dismiss();
      }, err => {
        console.log(err);
        this.showToast('Error');
        loading.dismiss();
      });
  }

  async onSelectChangeUber(optionValue) {
    console.log(optionValue.detail.value);
    const loading = await this.loadingController.create({
      message: 'Loading...'
    });
    await loading.present();
    this.api.getUberPrice(this.myCurrentLocation.lat, this.myCurrentLocation.lng, this.destination.lat, this.destination.lng)
      .subscribe(res => {
        console.log(res);

        JSON.parse(res[0]['data']).prices.forEach(element => {
          if (element.product_id === optionValue.detail.value) {
            this.uberPrice = element.estimate;
            console.log(element.estimate);
          }
        });

        loading.dismiss();
      }, err => {
        console.log(err);
        this.showToast('Error');
        loading.dismiss();
      });
  }

  async showToast(message: string) {
    const toast = await this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle'
    });

    toast.present();
  }

  ngOnInit() {
    this.getData();
  }

  openUber() {
    if (this.plt.is('android')) {
      const appId = 'com.ubercab';
      const appStarter = (window as any).startApp.set({ 'package': appId });
      appStarter.start(function (msg) {
         console.log('starting BB app: ' + msg);
      }, function (err) {
        console.log('BB app not installed', err);
      });
    } else if (this.plt.is('ios')) {
      const appId = 'ubercab://';
      const appStarter = (window as any).startApp.set(appId);
      appStarter.start(function (msg) {
        console.log('starting BB app: ' + msg);
      }, function (err) {
        console.log('BB app not installed', err);
      });
    }
  }

  openBest() {
    this.openUber();
  }

}
