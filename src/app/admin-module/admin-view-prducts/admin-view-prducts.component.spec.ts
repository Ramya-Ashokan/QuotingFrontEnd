import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewPrductsComponent } from './admin-view-prducts.component';

describe('AdminViewPrductsComponent', () => {
  let component: AdminViewPrductsComponent;
  let fixture: ComponentFixture<AdminViewPrductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminViewPrductsComponent]
    });
    fixture = TestBed.createComponent(AdminViewPrductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
