import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ToastController,
  Platform,
  LoadingController,
  NavController
} from '@ionic/angular';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  myCurrentLocation: any;
  destination: any;

  isUber: boolean;

  constructor(private route: ActivatedRoute,
    public navCtrl: NavController,
    public toastCtrl: ToastController) {
    this.isUber = false;
    this.route.queryParams.subscribe(params => {
      this.isUber = JSON.parse(params['products']).uber;

      this.myCurrentLocation = JSON.parse(params['myCurrentLocation']);
      this.destination = JSON.parse(params['destination']);
    });

  }

  ngOnInit() {
  }

}
