import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  productArray: any;
  imageUrl: any = "https://dashnex.albiorixtech.in/public";
  cart: Array<any> = [];
  activateCart = true;

  constructor(private router: Router, private productService: ProductService) { }

  ngOnInit() {
    this.getProductList();
  }

  // get product list from api
  getProductList() {
    this.productService.getProduct().subscribe(res => {
      this.productArray = res.data;
      this.productArray.forEach((element: any) => {
        if (element?.image) {
          element.image = this.imageUrl + element.image;
        }
      });
    })
  }

  // navigate to product details page
  productDetail(id: string) {
    this.router.navigate(['/productDetail/' + id]);
  }

  // add to cart
  addToCart(item: any) {
    let body = {
      "productId": item.id,
      "quantity": 1
    }
    this.productService.addProductToCart(body);
    Swal.fire('Success', 'Item added to cart', 'success');
  }
}
