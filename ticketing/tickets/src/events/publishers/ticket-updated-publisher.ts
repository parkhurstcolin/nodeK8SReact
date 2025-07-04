import { Publisher, Subjects, TicketUpdatedEvent } from '@xycorp/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  subject: Subjects.TicketUpdated = Subjects.TicketUpdated;
}