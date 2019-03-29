import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { forkJoin } from 'rxjs';

const uberProductURl = 'https://api.uber.com/v1.2/products';
const uberPriceURl = 'https://api.uber.com/v1.2/estimates/price';


@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) {

  }

  getProducts(lat, lon): Observable<any> {
    const uberProduct = this.http.get(uberProductURl + '?latitude=' + lat + '&longitude=' + lon, {
      headers: {'Authorization': 'Token sgahgwWHvapkOFeFLop3aoEXFMU7R8vlzXGc4_vc', 'Content-Type': 'application/json'}
   });
    return forkJoin([uberProduct]);
  }

  getUberPrice(startLat, startLon, endLat, endLon): Observable<any> {
    const uberProduct = this.http.get(uberPriceURl + '?start_latitude=' + startLat + '&start_longitude=' +
    startLon + '&end_latitude=' + endLat + '&end_longitude=' + endLon, {
      headers: {'Authorization': 'Token sgahgwWHvapkOFeFLop3aoEXFMU7R8vlzXGc4_vc', 'Content-Type': 'application/json'}
   });
    return forkJoin([uberProduct]);
  }
}
