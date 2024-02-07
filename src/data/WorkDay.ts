import Work from "./Work";

class WorkDay {
  public readonly day: number;

  public readonly works: Array<Work>;

  constructor({ day, works }: WorkDay) {
    this.day = day;
    this.works = works;
  }
}

export default WorkDay;
