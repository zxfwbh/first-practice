/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ComponentBaseService } from './component-base.service';

describe('Service: ComponentBase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ComponentBaseService]
    });
  });

  it('should ...', inject([ComponentBaseService], (service: ComponentBaseService) => {
    expect(service).toBeTruthy();
  }));
});
