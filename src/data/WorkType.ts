import type CalculationType from "./CalculationType";

class WorkType {
  public readonly id: number;

  public readonly name: string;

  public readonly calculation: CalculationType;

  public readonly price: number;

  constructor({ id, name, calculation, price }: WorkType) {
    this.id = id;
    this.name = name;
    this.calculation = calculation;
    this.price = price;
  }
}

export default WorkType;
