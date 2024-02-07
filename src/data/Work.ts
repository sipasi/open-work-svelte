import CalculationType from "./CalculationType";

class Work {
  public readonly price: number;

  public readonly type: string;

  public readonly calculation: CalculationType;

  public readonly units: Array<string>;

  constructor(
    price: number,
    type: string,
    calculation: CalculationType,
    units: Array<string>
  ) {
    this.price = price;
    this.type = type;
    this.calculation = calculation;
    this.units = units;
  }
}

export default Work;
