import { ParseJsonPipe } from './parse-json.pipe';
import { BadRequestException } from '@nestjs/common';

describe('adapters/in/controllers/pipes/parse-json.pipe', () => {
  it('should return null when input is empty and nullable is true', () => {
    const subject = new ParseJsonPipe({ nullable: true });
    expect(subject.transform('')).toEqual(null);
  });

  it('should return json when input is json type', () => {
    const subject = new ParseJsonPipe({ nullable: false });
    expect(subject.transform({ hello: 123 })).toEqual({ hello: 123 });
  });

  it('should return json', () => {
    const subject = new ParseJsonPipe({ nullable: false });
    expect(subject.transform('{ "hello": 123 }')).toEqual({ hello: 123 });
  });

  it('should throw bad request exception when string is not json format', () => {
    const subject = new ParseJsonPipe({ nullable: false });
    try {
      subject.transform('{ "hello":');
    } catch (e) {
      expect(e).toBeInstanceOf(BadRequestException);
    }
  });
});
