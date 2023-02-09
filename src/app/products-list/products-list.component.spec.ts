import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import {  of } from 'rxjs';
import { ProductService } from '../services/product.service';

import { ProductsListComponent } from './products-list.component';

describe('ProductsListComponent', () => {
  let component: ProductsListComponent;
  let fixture: ComponentFixture<ProductsListComponent>;
  let productService :ProductService;
  let httpMock: HttpTestingController;
  const mockRouter = {navigate: jasmine.createSpy('navigate')};
  const productMockData = {
    data: [
      {
          "id": 1,
          "title": "test product 7",
          "image": "/images/mouse7.webp",
          "price": 170,
          "description": "I've always had a soft spot for Steelseries gaming mice. They're always so balanced: nice lights but not too many; not too expensive; and lovely, understated design. But it wasn't until the Steelseries Prime Wireless mouse that I really, truly, madly, deeply fell in love. The Prime Wireless mouse is a perfect fit for a wide range of hand sizes, and it isn't cluttered with extra buttons.",
          "created_at": "2023-02-08T10:08:06+00:00",
          "updated_at": "2023-02-08T10:08:06+00:00"
      },
    ]
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsListComponent ],
      imports:[HttpClientTestingModule],
      providers: [
        ProductService,
        { provide: Router, useValue: mockRouter },
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    productService = TestBed.get(ProductService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should get all products', (() => {

    spyOn(productService, 'getProduct').and.callFake(() => {
      return of(productMockData);
    });

    component.getProductList();
    expect(component.productArray.length).toBe(1);
    expect(component.productArray).toBe(productMockData.data);

  }));

  it('should navigate to login on successful signup',waitForAsync(() => {

    component.productDetail(1);
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      expect(mockRouter.navigate).toHaveBeenCalledWith(['/productDetail/1']);
    });
  }));

});
