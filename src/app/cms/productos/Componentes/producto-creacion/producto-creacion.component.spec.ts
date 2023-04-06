import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoCreacionComponent } from './producto-creacion.component';

describe('ProductoCreacionComponent', () => {
  let component: ProductoCreacionComponent;
  let fixture: ComponentFixture<ProductoCreacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoCreacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoCreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
