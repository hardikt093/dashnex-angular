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
    })
  }

  deleteProductFromCart(id: any){
    return this.http.delete(this.apiUrl + 'cart/'+ id )
  }

  updateProductFromCart(id:any, body:any){
    return this.http.put(this.apiUrl + 'cart/' + id, body)
  }
}
