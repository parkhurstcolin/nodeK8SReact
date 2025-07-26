import { Subjects, Publisher, OrderCancelledEvent } from '@xycorp/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
