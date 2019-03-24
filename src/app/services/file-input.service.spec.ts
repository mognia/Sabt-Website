import { TestBed } from '@angular/core/testing';

import { FileInputService } from './file-input.service';

describe('FileInputService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FileInputService = TestBed.get(FileInputService);
    expect(service).toBeTruthy();
  });
});
