import CalculationType from "$root/data/CalculationType";
import WorkDay from "$root/data/WorkDay";
import WorkMonth from "$root/data/WorkMonth";
import WorkType from "$root/data/WorkType";
import EntityStorage from "../EntityStorage";
import FakeStorage from "./FakeStorage";

class FakeCreator {
  static createFakeMonths(): EntityStorage<WorkMonth> {
    const array = Array.from({ length: 10 }, (_, index) =>
      FakeCreator.createMonth(index, 2024, index)
    );

    return new FakeStorage<WorkMonth>(array);
  }

  private static createMonth(id: number, year: number, month: number) {
    const date = new Date(year, month, 1);

    const dayCount = new Date(year, month + 1, 0).getDate();

    const days = FakeCreator.createDays(dayCount);
    const types = FakeCreator.createTypes();

    return new WorkMonth({ id: id, date: date, days: days, types: types });
  }

  private static createDays(count: number): WorkDay[] {
    const days = Array.from(
      { length: count },
      (_, index) => new WorkDay({ day: index + 1, works: [] })
    );

    return days;
  }
  private static createTypes(): WorkType[] {
    return [
      new WorkType({
        id: 0,
        name: "Abonement",
        calculation: CalculationType.commaSeparator,
        price: 10,
      }),
      new WorkType({
        id: 1,
        name: "Personal",
        calculation: CalculationType.commaSeparator,
        price: 20,
      }),
      new WorkType({
        id: 2,
        name: "Hour",
        calculation: CalculationType.hour,
        price: 1,
      }),
    ];
  }
}

export default FakeCreator;
