import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { GroupsRestController } from './controllers/groups.rest.controller';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './http.exception-filter';

@Module({
  imports: [],
  controllers: [GroupsRestController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AdapterInModule implements NestModule {
  constructor() {
  }

  configure(consumer: MiddlewareConsumer) {}
}
