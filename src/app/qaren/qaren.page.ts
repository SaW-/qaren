import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-qaren',
  templateUrl: './qaren.page.html',
  styleUrls: ['./qaren.page.scss'],
})
export class QarenPage implements OnInit {
  myCurrentLocation: any;
  destination: any;

  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.myCurrentLocation = JSON.parse(params['myCurrentLocation']);
      this.destination = JSON.parse(params['destination']);
    });
    console.log(this.myCurrentLocation);
   }

  ngOnInit() {
  }

}
