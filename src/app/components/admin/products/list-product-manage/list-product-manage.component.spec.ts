import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductManageComponent } from './list-product-manage.component';

describe('ListProductManageComponent', () => {
  let component: ListProductManageComponent;
  let fixture: ComponentFixture<ListProductManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductManageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
