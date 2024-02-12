import CalculationType from "../data/CalculationType";

class RawWorkCalculator {
  static calculateWorks(
    works: string[],
    calculation: CalculationType,
    price: number
  ): number {
    if (works?.length === 0) {
      return 0;
    }

    let sum: number = 0;

    if (calculation == CalculationType.commaSeparator) {
      sum = works.length * price;
    } else {
      sum = works
        .map((item) => {
          let result = Number.parseInt(item);

          if (!result) return 0;

          return result;
        })
        .reduce((sum, current) => sum + current);
    }

    return Number.parseFloat(sum.toFixed(2));
  }
}

export default RawWorkCalculator;
