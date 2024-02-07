import WorkDay from "./WorkDay";
import type WorkType from "./WorkType";

class WorkMonth {
  public readonly id: number;

  public readonly date: Date;

  public readonly days: Array<WorkDay>;
  public readonly types: Array<WorkType>;

  constructor({ id, date, days, types }: WorkMonth) {
    this.id = id;
    this.date = date;
    this.days = days;
    this.types = types;
  }
}

export default WorkMonth;
