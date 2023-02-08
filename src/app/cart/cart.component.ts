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

  productDetail(id: string) {
    this.router.navigate(['/productDetail/'+ id]);
  }

  addToCart(i: any) {
    this.productArr.push(i);
    Swal.fire('Success','Item added to cart','success');
  }

  calculateTotal() {
    let tempTotal = 0;
    this.productArr.forEach((res: any) => {
      res.product.total = res.product.price * res.quantity;
      tempTotal += res.product.total
    })
    this.cartTotal = tempTotal;
  }

  incrementQty(i: any, id:any) {
    Swal.fire({
      title: 'Do you want to add one of this product in the cart?',
      showCancelButton: true,
      confirmButtonText: 'Add',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productArr[i].quantity = this.productArr[i].quantity + 1; 
        let body = {
          "quantity" : this.productArr[i].quantity
        }         
        this.productService.updateProductFromCart(id, body).subscribe(res =>{
          console.log(res);
          window.location.reload();
        });
        Swal.fire('Added!', '', 'success');
      }
    })
    this.calculateTotal();
  }

  decrementQty(i: any, id:any) {
    if (this.productArr[i].quantity > 1) {
      Swal.fire({
        title: 'Do you want to remove one of this product from the cart?',
        showCancelButton: true,
        confirmButtonText: 'Remove',
      }).then((result) => {
        if (result.isConfirmed) {
          this.productArr[i].quantity = this.productArr[i].quantity - 1; 
          let body = {
            "quantity" : this.productArr[i].quantity
          }         
          this.productService.updateProductFromCart(id, body).subscribe(res =>{
            console.log(res);
            window.location.reload();
          });
          Swal.fire('Removed!', '', 'success');
        }
      })
    }
    else {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      }).then((result) => {
        if (result.isConfirmed) {
          this.productService.deleteProductFromCart(id).subscribe(res =>{
            console.log(res);
            window.location.reload();
            
          });
          Swal.fire('Deleted!', '', 'success');
        }
      })
    }
    this.calculateTotal();
  }

  removeItem(index: number) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.deleteProductFromCart(index).subscribe(res =>{
          console.log(res);
          window.location.reload();
          
        });
        Swal.fire('Deleted!', 'Product has been deleted.', 'success');
      }
    })
  }
}
