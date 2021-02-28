import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAddProductsComponent } from './box-add-products.component';

describe('BoxAddProductsComponent', () => {
  let component: BoxAddProductsComponent;
  let fixture: ComponentFixture<BoxAddProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxAddProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxAddProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
