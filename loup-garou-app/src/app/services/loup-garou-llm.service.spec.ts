import { TestBed } from '@angular/core/testing';

import { LoupGarouLlmService } from './loup-garou-llm.service';

describe('LoupGarouLlmService', () => {
  let service: LoupGarouLlmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoupGarouLlmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
