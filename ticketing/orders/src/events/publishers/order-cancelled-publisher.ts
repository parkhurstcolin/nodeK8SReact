import { Publisher, OrderCancelledEvent, Subjects } from "@xycorp/common";

export class OrderCreatedPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled
}

