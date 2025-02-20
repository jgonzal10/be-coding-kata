
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private http: HttpClient) {}


  getTotal(products: { productId: number; productQuantity: number }[]): Observable<any> {
    return this.http.post('http://localhost:3000/getTotal',{products});
  }
}

