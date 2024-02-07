abstract class EntityStorage<T> {
  abstract count(): Promise<number>;
  abstract getAll(): Promise<T[]>;
  abstract getBy(id: number): Promise<T>;
}

export default EntityStorage;
