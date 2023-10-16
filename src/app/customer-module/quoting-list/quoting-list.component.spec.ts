import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotingListComponent } from './quoting-list.component';

describe('QuotingListComponent', () => {
  let component: QuotingListComponent;
  let fixture: ComponentFixture<QuotingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuotingListComponent]
    });
    fixture = TestBed.createComponent(QuotingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
