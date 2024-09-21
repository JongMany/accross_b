import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export type GroupStatus = 'INIT' | 'PROGRESS' | 'DONE' | 'PENDING';
@Entity({ name: 'groups' })
export class GroupEntity {
  @PrimaryGeneratedColumn('uuid')
  readonly id: string;

  @Column()
  name: string;

  @Column()
  orderCount: number;

  @Column()
  createdAt: number;

  @Column({ enum: ['INIT', 'PROGRESS', 'DONE', 'PENDING'] })
  status: GroupStatus;
}
