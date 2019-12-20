import { TestBed, async, inject } from '@angular/core/testing';

import { AdminInnerGuard } from './admin-inner.guard';

describe('AdminInnerGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminInnerGuard]
    });
  });

  it('should ...', inject([AdminInnerGuard], (guard: AdminInnerGuard) => {
    expect(guard).toBeTruthy();
  }));
});
