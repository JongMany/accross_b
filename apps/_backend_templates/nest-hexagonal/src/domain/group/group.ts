import { AggregateRoot } from '../aggregate-root';
import { v4 } from 'uuid';

export type GroupStatus = 'INIT' | 'PROGRESS' | 'DONE' | 'PENDING';

export default class Group extends AggregateRoot {
  readonly id: string;
  readonly name: string;
  readonly orderCount: number;
  readonly createdAt: Date;
  readonly status: GroupStatus;

  constructor({ id, createdAt, name, orderCount }: { id: string, name: string, orderCount: number, createdAt: Date }){
    super();
    this.id = id;
    this.name = name;
    this.orderCount = orderCount;
    this.createdAt = new Date(createdAt.getTime());
    this.status = 'INIT';
  }

  static create({ name, orderCount }: { name: string, orderCount: number }): Group {
    return new Group({
      id: v4(), 
      name,
      orderCount,
      createdAt: new Date(),
    });
  }

  toJSON(): {
    id: string,
    name: string,
    orderCount: number,
    createdAt: number,
    status: GroupStatus,
    } {
    return {
      id: this.id,
      name: this.name,
      orderCount: this.orderCount,
      createdAt: this.createdAt.getTime(),
      status: this.status,
    };
  }
}