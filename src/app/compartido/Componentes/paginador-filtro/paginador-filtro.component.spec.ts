import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginadorFiltroComponent } from './paginador-filtro.component';

describe('PaginadorFiltroComponent', () => {
  let component: PaginadorFiltroComponent;
  let fixture: ComponentFixture<PaginadorFiltroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginadorFiltroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginadorFiltroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
