import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productId: any;
  productData: any;
  imageUrl: any = "https://dashnex.albiorixtech.in/public";
  constructor(private router: Router, private productService: ProductService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.params['id'];
    if (this.productId != null && this.productId != undefined) {
      this.getProductDetails(this.productId);
    }
  }

  // get product details
  getProductDetails(id: any) {
    this.productService.getProductDetails(id).subscribe(res => {
      this.productData = res.data;
      if (this.productData?.image) {
        this.productData.image = this.imageUrl + this.productData.image;
      }
    })
  }

  // add to cart 

  addToCart(item: any){
    let body = {
      "productId": item.id,
      "quantity": 1
    }
    this.productService.addProductToCart(body);
    Swal.fire('Success','Item added to cart','success');
  }
}
