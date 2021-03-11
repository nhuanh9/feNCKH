import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpOrderComponent } from './list-exp-order.component';

describe('ListExpOrderComponent', () => {
  let component: ListExpOrderComponent;
  let fixture: ComponentFixture<ListExpOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExpOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExpOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
