import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerViewProductsComponent } from './customer-view-products.component';

describe('CustomerViewProductsComponent', () => {
  let component: CustomerViewProductsComponent;
  let fixture: ComponentFixture<CustomerViewProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerViewProductsComponent]
    });
    fixture = TestBed.createComponent(CustomerViewProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
