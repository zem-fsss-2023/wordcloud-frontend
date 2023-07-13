import { TestBed } from '@angular/core/testing';

import { WordcloudServiceService } from './wordcloud-service.service';

describe('WordcloudServiceService', () => {
  let service: WordcloudServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordcloudServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
