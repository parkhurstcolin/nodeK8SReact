import { Publisher, OrderCreatedEvent, Subjects } from "@xycorp/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated
}

