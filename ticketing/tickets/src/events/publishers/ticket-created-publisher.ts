import { Publisher, Subjects, TicketCreatedEvent } from '@xycorp/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}