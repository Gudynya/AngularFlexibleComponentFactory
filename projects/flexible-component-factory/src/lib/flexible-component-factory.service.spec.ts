import { TestBed } from '@angular/core/testing';

import { FlexibleComponentFactoryService } from './flexible-component-factory.service';

describe('FlexibleComponentFactoryService', () => {
  let service: FlexibleComponentFactoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlexibleComponentFactoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
