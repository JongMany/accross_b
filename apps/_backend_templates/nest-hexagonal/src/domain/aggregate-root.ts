import { DomainEvent } from './base.event';

export abstract class AggregateRoot {
  private domainEvents: DomainEvent<string, any>[] = [];

  addEvent(event: DomainEvent<string, any>) {
    this.domainEvents.push(event);
  }

  flushEvents(): any[] {
    const events = this.domainEvents;
    this.domainEvents = [];
    return events.map((e) => e.toJSON());
  }
}
