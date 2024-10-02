import { ColumnEntity } from './src/columns/entity/column.entity';
import { GroupEntity } from './src/groups/entities/group.entity';

const ormseedconfig = {
  type: 'sqlite',
  database: 'axb.db',
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
  entities: [GroupEntity, ColumnEntity],
  migrations: ['src/database/seeds/*.ts'],
};

export default ormseedconfig;
