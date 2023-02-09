import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2';
import { Product } from '../interface/product.interface';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  productArray!: Product[];
  imageUrl: string = "https://dashnex.albiorixtech.in/public";

  constructor(private router: Router,private productService : ProductService) {}

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProduct().subscribe(res => {
      this.productArray = res.data;
      this.productArray.forEach((element: any) => {
        if(element?.image) {
          element.image = this.imageUrl + element.image;
        }
      });      
    })
  }

  productDetail(id: number|any) {
    this.router.navigate(['/productDetail/'+ id]);
  }

  addToCart(item: any){
    let body = {
      "productId": item.id,
      "quantity": 1
    }
    this.productService.addProductToCart(body);
    Swal.fire({
      title: 'Item added to cart',
      icon: 'success',
      confirmButtonText: 'Ok'
    }).then((result) => {
      if (result.isConfirmed) {
      window.location.reload();
      }
    });
    
  }
}

