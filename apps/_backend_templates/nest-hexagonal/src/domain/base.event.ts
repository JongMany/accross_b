export abstract class DomainEvent<T extends string, D extends Record<string, unknown>> {
  protected constructor(readonly topic: T, readonly data: D, readonly meta: { at?: number }) {
  }

  toJSON(): { topic: T; data: D; meta: { at?: number } } {
    return {
      topic: this.topic,
      data: JSON.parse(JSON.stringify(this.data)),
      meta: {
        at: this.meta.at,
      },
    };
  }
}
