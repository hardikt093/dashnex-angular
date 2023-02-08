import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal  from 'sweetalert2';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  k:any;
  productArr: any;
  cart: Array<any> = [];
  cartTotal= 0;
  imageUrl: any = "https://dashnex.albiorixtech.in/public";

  constructor( private router: Router,private productService: ProductService) { }
 
  ngOnInit() {
    this.getCartProducts();
  }

  getCartProducts(){
    this.productService.getCartProducts().subscribe(res => {
      this.productArr = res.data;
      this.productArr.forEach((element: any) => {
        if(element?.product?.image) {
          element.product.image = this.imageUrl + element.product.image;
        }
      });
      this.calculateTotal();
    })
    
  }

  addToCart(i: any) {
    this.productArr.push(i);
    Swal.fire('Success','Item added to cart','success');
  }

  incrementQty(i: any) {
    this.productArr[i].quantity++;
    this.productArr[i].total = this.productArr[i].product.price * this.productArr[i].quantity;
    this.calculateTotal();
  }

  calculateTotal() {
    let tempTotal = 0;
    this.productArr.forEach((res: any) => {
      res.product.total = res.product.price * res.quantity;
      tempTotal += res.product.total
    })
    this.cartTotal = tempTotal;
  }

  decrementQty(i: any) {
    if (this.productArr[i].quantity > 1) {
      this.productArr[i].quantity--
    }
    this.productArr[i].total = this.productArr[i].product.price * this.productArr[i].quantity;
    this.calculateTotal();
  }

  remove(index: number) {
    this.productArr.splice(index);
  }

  removeAll() {
    this.productArr = [];
    this.updateCart()
  }

  updateCart() {
    localStorage.setItem('cartarr', JSON.stringify(this.productArr))
  }

  remove1(index: number) {
    this.productArr.splice(index, 1);
    this.updateCart()
  }
}
