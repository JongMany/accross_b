import { GroupStatus } from 'shared-types';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'columns' })
export class ColumnEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  name: string;

  @Column({ enum: ['INIT', 'PROGRESS', 'DONE', 'PENDING'] })
  status: GroupStatus;

  constructor() {
    this.id = ''; // 기본값 설정
    this.name = ''; // 기본값 설정
    this.status = 'INIT'; // 기본값 설정
  }
}
