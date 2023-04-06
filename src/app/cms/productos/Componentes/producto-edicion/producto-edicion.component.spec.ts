import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductoEdicionComponent } from './producto-edicion.component';

describe('ProductoEdicionComponent', () => {
  let component: ProductoEdicionComponent;
  let fixture: ComponentFixture<ProductoEdicionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductoEdicionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductoEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
