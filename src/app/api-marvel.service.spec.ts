import { TestBed, inject } from '@angular/core/testing';

import { ApiMarvelService } from './api-marvel.service';

describe('ApiMarvelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiMarvelService]
    });
  });

  it('should be created', inject([ApiMarvelService], (service: ApiMarvelService) => {
    expect(service).toBeTruthy();
  }));
});
