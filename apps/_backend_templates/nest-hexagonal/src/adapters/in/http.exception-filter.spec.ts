import { BaseExceptionFilter } from '@nestjs/core';
import { HttpExceptionFilter } from './http.exception-filter';

describe('adapters/in/http.exception-filter', () => {
  const mockCatch = jest.fn();
  BaseExceptionFilter.prototype.catch = mockCatch

  const subject = new HttpExceptionFilter();

  beforeEach(() => {
    mockCatch.mockReset();
  });

  it('should call super.catch', () => {
    subject.catch('hello' as any, 'world' as any);
    expect(mockCatch).toHaveBeenCalledWith('hello', 'world');
  });
});
