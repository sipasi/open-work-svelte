import Work from "$root/data/Work";
import WorkDay from "$root/data/WorkDay";
import WorkType from "$root/data/WorkType";

class DayEditModel {
  public input: string;
  public readonly day: number;
  public readonly type: WorkType;
  public readonly units: string[];

  constructor(day: number, type: WorkType, units: string[]) {
    this.input = "";
    this.day = day;
    this.type = type;
    this.units = units;
  }

  public static map(day: WorkDay) {
    const works = day.works;

    let map = new Map<WorkType, string[]>();

    for (let i = 0; i < works.length; i++) {
      const work = works[i];

      if (map.has(work.type) === false) {
        map.set(work.type, []);
      }

      const collection = map.get(work.type);

      collection!.push(...work.units);
    }

    const array = Array.from(map).map(
      (item) => new DayEditModel(day.day, item[0], item[1])
    );

    return array;
  }

  public static toWorkDay(day: number, model: DayEditModel[]): WorkDay {
    return new WorkDay({
      day: day,
      works: model.map((edit) => new Work(edit.type, edit.units)),
    });
  }
}

export default DayEditModel;
