import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsOnPageComponent } from './products-on-page.component';

describe('ProductsOnPageComponent', () => {
  let component: ProductsOnPageComponent;
  let fixture: ComponentFixture<ProductsOnPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsOnPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsOnPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
