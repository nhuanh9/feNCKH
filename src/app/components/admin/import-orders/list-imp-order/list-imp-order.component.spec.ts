import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListImpOrderComponent } from './list-imp-order.component';

describe('ListImpOrderComponent', () => {
  let component: ListImpOrderComponent;
  let fixture: ComponentFixture<ListImpOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListImpOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListImpOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
