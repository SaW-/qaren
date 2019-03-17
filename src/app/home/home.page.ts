import { Component, OnInit , NgZone} from '@angular/core';
import {
  ToastController,
  Platform,
  LoadingController
} from '@ionic/angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  Marker,
  GoogleMapsAnimation,
  MyLocation
} from '@ionic-native/google-maps';


declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit {

  map: GoogleMap;
  loading: any;

  myCurrentLocation: any;
  destination: any;
  GoogleAutocomplete: any;
  autocomplete: any;
  autocompleteItems: any;
  geocoder: any;
  destinationMarker: Marker;

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public zone: NgZone,
    private platform: Platform) {
      this.GoogleAutocomplete = new google.maps.places.AutocompleteService();
      this.geocoder = new google.maps.Geocoder();
      this.autocomplete = { input: '' };
      this.autocompleteItems = [];
     }

  async ngOnInit() {
    // Since ngOnInit() is executed before `deviceready` event,
    // you have to wait the event.
    await this.platform.ready();
    await this.loadMap();
  }

  loadMap() {
    this.map = GoogleMaps.create('map_canvas', {
      camera: {
        target: {
          lat: 21.5181749,
          lng: 39.1987219
        },
        zoom: 10,
        tilt: 0
      }
    });

    this.map.on(GoogleMapsEvent.MAP_CLICK).subscribe((clicked) => {
      if (this.destinationMarker) {
        this.destinationMarker.remove();
      }
      this.destination =  {lat: clicked[0].lat, lng: clicked[0].lng};

      // add a marker
      this.destinationMarker = this.map.addMarkerSync({
        title: 'Destination',
        snippet: '',
        position: this.destination,
        animation: GoogleMapsAnimation.BOUNCE
      });

      // show the infoWindow
      this.destinationMarker.showInfoWindow();
    });
  }

  updateSearchResults() {
    if (!this.autocomplete.input || this.autocomplete.input === '') {
      this.autocompleteItems = [];
      return;
    }
    this.GoogleAutocomplete.getPlacePredictions({ input: this.autocomplete.input },
    (predictions, status) => {
      this.autocompleteItems = [];
      this.zone.run(() => {
        predictions.forEach((prediction) => {
          this.autocompleteItems.push(prediction);
        });
      });
    });
  }

  selectSearchResult(item) {
    this.autocompleteItems = [];

    this.geocoder.geocode({'placeId': item.place_id}, (results, status) => {
      if (status === 'OK' && results[0]) {
        if (this.destinationMarker) {
          this.destinationMarker.remove();
        }
        this.destination =  {lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng()};
        // Move the map camera to the location with animation
        this.map.animateCamera({
          target: this.destination,
          zoom: 24,
          tilt: 0
        });

        // add a marker
        this.destinationMarker = this.map.addMarkerSync({
          title: 'Destination',
          snippet: '',
          position: this.destination,
          animation: GoogleMapsAnimation.BOUNCE
        });

        // show the infoWindow
        this.destinationMarker.showInfoWindow();

        // If clicked it, display the alert
        this.destinationMarker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
          // this.showToast('clicked!');
        });
      }
    });
  }

  confirmLocation() {
    if (!this.destination || !this.myCurrentLocation) {
      this.showToast('Select location');
    }
  }


  async mylocation() {
    this.map.clear();
    this.destination = undefined;
    this.myCurrentLocation = undefined;
    this.destinationMarker = undefined;

    this.loading = await this.loadingCtrl.create({
      message: 'Please wait...'
    });
    await this.loading.present();

    // Get the location of you
    this.map.getMyLocation().then((location: MyLocation) => {
      this.loading.dismiss();
      this.myCurrentLocation =  {lat: location.latLng.lat, lng:  location.latLng.lng};
      console.log(JSON.stringify(location, null , 2));

      // Move the map camera to the location with animation
      this.map.animateCamera({
        target: location.latLng,
        zoom: 24,
        tilt: 0
      });

      // add a marker
      const marker: Marker = this.map.addMarkerSync({
        title: 'My Location',
        snippet: '',
        position: location.latLng,
        animation: GoogleMapsAnimation.BOUNCE
      });

      // show the infoWindow
      marker.showInfoWindow();

      // If clicked it, display the alert
      marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
        // this.showToast('clicked!');
      });
    })
    .catch(err => {
      this.loading.dismiss();
      this.showToast(err.error_message);
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
