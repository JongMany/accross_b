import { ArgumentsHost, Catch, HttpException, Logger } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';

@Catch(HttpException)
export class HttpExceptionFilter extends BaseExceptionFilter {
  private readonly logger: Logger = new Logger(this.constructor.name);

  catch(exception: HttpException, host: ArgumentsHost) {
    this.logger.error(exception.stack);
    super.catch(exception, host);
  }
}
