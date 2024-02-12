import type WorkType from "./WorkType";

class Work {
  public readonly type: WorkType;

  public readonly units: Array<string>;

  constructor(type: WorkType, units: Array<string>) {
    this.type = type;
    this.units = units;
  }
}

export default Work;
