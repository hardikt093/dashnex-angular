import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'dashnex-test-js';
  totalCartItem!: number;
  cartProduct: [] = [];

  constructor(private productService: ProductService, private ref: ChangeDetectorRef){

  }
  ngOnInit(): void {
    this.productService.getCartProducts().subscribe(res => {
      this.cartProduct = res.data;
      this.ref.detectChanges();
    })
  }
}
