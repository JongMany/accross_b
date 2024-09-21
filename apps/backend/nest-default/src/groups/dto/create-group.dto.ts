export class CreateGroupDto {
  readonly name: string;
  readonly orderCount: number;
  constructor({ name, orderCount }: { name: string; orderCount: number }) {
    this.name = name;
    this.orderCount = orderCount;
  }
}
