import * as request from 'supertest';
import { Test, TestingModule } from '@nestjs/testing';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { INestApplication } from '@nestjs/common';
import { GroupsRestController } from './groups.rest.controller';
import { CreateGroupCommand } from '../../../modules/group/commands/create-group-command';

describe('adapter/in/controllers/groups.rest.controller', () => {
  let app: INestApplication;
  const mockCommandBus = { execute: jest.fn() };
  const mockQueryBus = { execute: jest.fn() };

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupsRestController],
      providers: [
        {
          provide: CommandBus,
          useValue: mockCommandBus,
        },
        {
          provide: QueryBus,
          useValue: mockQueryBus,
        },
      ],
    }).compile();

    app = module.createNestApplication();
    await app.init();
  });

  beforeEach(() => {
    mockCommandBus.execute.mockReset();
    mockQueryBus.execute.mockReset();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('GET /groups', () => {
    it('should return query result', () => {
      const mockResult = [
        {
          id: 'group-1',
          name: 'group-1',
          orderCount: 1,
        },
      ];
      mockQueryBus.execute.mockResolvedValue(mockResult);
      return request(app.getHttpServer())
        .get('/groups')
        .expect(200)
        .expect(mockResult);
    });
  });
  describe('POST /groups', () => {
    it('should throw BadRequestException when groupName or orderCount is empty', () => {
      return request(app.getHttpServer())
        .post('/groups')
        .expect(400);
    });
    it('should call commandBug execute with groupName, orderCount using CreateGroupCommand', () => {
      const mockResult = {
        groupId: 'group-1',
      };
      mockCommandBus.execute.mockResolvedValue(mockResult);
      return request(app.getHttpServer())
        .post('/groups')
        .send({
          groupName: 'group-1',
          orderCount: 1,
        })
        .expect(200)
        .expect(() => {
          expect(mockCommandBus.execute).toBeCalledWith(new CreateGroupCommand({ name: 'group-1', orderCount: 1 }));
        });
    });
  });
});
