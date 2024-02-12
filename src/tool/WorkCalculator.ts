import CalculationType from "../data/CalculationType";
import Work from "../data/Work";
import type WorkMonth from "../data/WorkMonth";

class WorkCalculator {
  static calculate(work: Work): number {
    switch (work.type.calculation) {
      case CalculationType.commaSeparator:
        return this._calculateComma(work);
      case CalculationType.hour:
        return this._calculateHour(work);
      default:
        return 0;
    }
  }

  static calculateWorks(works: Work[] | null): number {
    if (!works || works.length === 0) {
      return 0;
    }

    if (works.length === 1) {
      return this.calculate(works[0]);
    }

    const result = works
      .map((e) => this.calculate(e))
      .reduce((value, element) => value + element);

    return this._toPrecision(result);
  }

  static calculateMonth(month: WorkMonth): number {
    if (!month || month.days.length === 0) {
      return 0;
    }

    const result = month.days
      .map((day) => this.calculateWorks(day.works))
      .reduce((value, element) => value + element);

    return this._toPrecision(result);
  }

  private static _calculateComma(work: Work): number {
    const length = work.units.length;

    const result = this._toPrecision(length * work.type.price);

    return result;
  }

  private static _calculateHour(work: Work): number {
    const units = work.units;

    if (units.length === 0) {
      return 0;
    }

    const numbers = units.map((e) => parseFloat(e) || 0);

    const result = numbers.reduce((sum, element) => sum + element, 0);

    return this._toPrecision(result * work.type.price);
  }

  private static _toPrecision(number: number): number {
    return parseFloat(number.toFixed(2));
  }
}

export default WorkCalculator;
