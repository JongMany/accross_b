import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

  @Column()
    status: 'INIT' | 'PROGRESS' | 'DONE' | 'PENDING';
}