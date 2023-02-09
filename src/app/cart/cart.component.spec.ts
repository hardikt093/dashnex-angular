import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductService } from '../services/product.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CartComponent } from './cart.component';

describe('CartComponent', () => {
  let component: CartComponent;
  let fixture: ComponentFixture<CartComponent>;
  let service: ProductService

  const mockData = {
      "id": 1,
      "title": "test product 7",
      "image": "/images/mouse7.webp",
      "price": 170,
      "description": "I've always had a soft spot for Steelseries gaming mice. They're always so balanced: nice lights but not too many; not too expensive; and lovely, understated design. But it wasn't until the Steelseries Prime Wireless mouse that I really, truly, madly, deeply fell in love. The Prime Wireless mouse is a perfect fit for a wide range of hand sizes, and it isn't cluttered with extra buttons.",
      "created_at": "2023-02-08T10:08:06+00:00",
      "updated_at": "2023-02-08T10:08:06+00:00"
    };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartComponent ],
      imports: [ HttpClientTestingModule ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
