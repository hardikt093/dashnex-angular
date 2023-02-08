import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string = "https://dashnex.albiorixtech.in/api/";

  constructor(private http: HttpClient) { }

  getProduct(): Observable<any> {
    return this.http.get(this.apiUrl + 'products');
  }

  getProductDetails(id: any): Observable<any>{
    return this.http.get(this.apiUrl + 'product/' + id )
  }

  getCartProducts(): Observable<any> {
    return this.http.get(this.apiUrl + 'cart');
  }

  addProductToCart(body: any){
     this.http.post(this.apiUrl +'cart', body).subscribe(res =>{
      console.log(res);
      
    })
  }
}
