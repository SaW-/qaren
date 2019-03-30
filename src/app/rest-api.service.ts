import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { forkJoin } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';

const uberProductURl = 'https://api.uber.com/v1.2/products';
const uberPriceURl = 'https://api.uber.com/v1.2/estimates/price';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private nativeHttp: HTTP) {

  }

  getProducts(lat, lon): Observable<any> {
    const uberProduct = this.nativeHttp.get(uberProductURl + '?latitude=' + lat + '&longitude=' + lon, {},
      {'Authorization': 'Token sgahgwWHvapkOFeFLop3aoEXFMU7R8vlzXGc4_vc', 'Content-Type': 'application/json'}
   );
    return forkJoin([uberProduct]);
  }

  getUberPrice(startLat, startLon, endLat, endLon): Observable<any> {
    const uberProduct = this.nativeHttp.get(uberPriceURl + '?start_latitude=' + startLat + '&start_longitude=' +
    startLon + '&end_latitude=' + endLat + '&end_longitude=' + endLon, {}, {
     'Authorization': 'Token sgahgwWHvapkOFeFLop3aoEXFMU7R8vlzXGc4_vc', 'Content-Type': 'application/json'
   });
    return forkJoin([uberProduct]);
  }
}
