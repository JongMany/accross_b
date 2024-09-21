import { BadRequestException, PipeTransform } from '@nestjs/common';

export class ParseJsonPipe<T extends Record<string, unknown>> implements PipeTransform<unknown, T | null> {
  constructor(private readonly option: { nullable: boolean }) {
  }

  transform(value: unknown): T | null {
    if (this.option.nullable && !value) {
      return null;
    }
    try {
      if (typeof value === 'string') {
        return JSON.parse(value);
      }
      return value as T;
    } catch {
      throw new BadRequestException(value);
    }
  }
}
