import EntityStorage from "../EntityStorage";

export class FakeStorage<T> extends EntityStorage<T> {
  private readonly array: T[];

  constructor(array: T[]) {
    super();

    this.array = array;
  }

  count(): Promise<number> {
    return Promise.resolve(this.array.length);
  }
  getAll(): Promise<T[]> {
    return Promise.resolve(this.array);
  }
  getBy(id: number): Promise<T> {
    return Promise.resolve(this.array[id]);
  }
}

export default FakeStorage;
