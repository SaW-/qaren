import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ToastController,
  Platform,
  LoadingController,
  NavController
} from '@ionic/angular';

@Component({
  selector: 'app-qaren',
  templateUrl: './qaren.page.html',
  styleUrls: ['./qaren.page.scss'],
})
export class QarenPage implements OnInit {
  myCurrentLocation: any;
  destination: any;

  isUber: boolean;

  constructor(private route: ActivatedRoute,
    public navCtrl: NavController,
    public toastCtrl: ToastController) {
    this.isUber = false;
    this.route.queryParams.subscribe(params => {
      this.myCurrentLocation = JSON.parse(params['myCurrentLocation']);
      this.destination = JSON.parse(params['destination']);
    });
    console.log(this.myCurrentLocation);
   }

  ngOnInit() {
  }

  next() {
    if (!this.isUber) {
      this.showToast('Please select');
      return;
    }

    this.navCtrl.navigateForward(['/product'], {
      queryParams: {
        products: JSON.stringify({uber: this.isUber}),
        myCurrentLocation: JSON.stringify(this.myCurrentLocation),
        destination: JSON.stringify(this.destination),
      }
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
}
