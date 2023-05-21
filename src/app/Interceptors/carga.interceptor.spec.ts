import { TestBed } from '@angular/core/testing';

import { CargaInterceptor } from './carga.interceptor';

describe('CargaInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      CargaInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: CargaInterceptor = TestBed.inject(CargaInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
