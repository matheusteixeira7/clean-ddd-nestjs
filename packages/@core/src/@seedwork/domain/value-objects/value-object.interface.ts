export interface ValueObject<T> {
  equals: (value: T) => boolean;
}
