export class UpdateColumnNameDto {
  readonly name: string;
  readonly id: string;
  constructor({ name, id }: { name: string; id: string }) {
    this.name = name;
    this.id = id;
  }
}
