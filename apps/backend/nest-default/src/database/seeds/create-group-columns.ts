import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { ColumnEntity } from '../../columns/entity/column.entity';

export default class GroupSeed implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<void> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(ColumnEntity)
      .values([
        { name: '대기', status: 'INIT' },
        { name: '진행중', status: 'PROGRESS' },
        { name: '완료', status: 'DONE' },
        { name: '보류', status: 'PENDING' },
      ])
      .execute();
  }
}
