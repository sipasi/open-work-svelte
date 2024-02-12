import CalculationType from "$root/data/CalculationType";
import Work from "$root/data/Work";
import WorkDay from "$root/data/WorkDay";
import WorkMonth from "$root/data/WorkMonth";
import WorkType from "$root/data/WorkType";
import EntityStorage from "../EntityStorage";
import FakeStorage from "./FakeStorage";

import { faker } from "@faker-js/faker";

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

    const types = FakeCreator.createTypes();
    const days = FakeCreator.createDays(dayCount, types);

    return new WorkMonth({ id: id, date: date, days: days, types: types });
  }

  private static createDays(count: number, types: WorkType[]): WorkDay[] {
    const days = Array.from(
      { length: count },
      (_, index) =>
        new WorkDay({
          day: index + 1,
          works: FakeCreator.createWorks(this.getRandomInt(13), types),
        })
    );

    return days;
  }

  private static createWorks(count: number, types: WorkType[]): Work[] {
    return types.map((type) => {
      let units = Array.from({ length: count }, (_) => {
        return type.calculation == CalculationType.hour
          ? this.getRandomInt(7).toString()
          : faker.person.fullName();
      });

      const work = new Work(type, units);

      return work;
    });
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

  private static getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}

export default FakeCreator;
