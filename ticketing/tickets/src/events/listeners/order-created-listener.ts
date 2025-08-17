import { Message } from "node-nats-streaming";
import { Listener, OrderCreatedEvent, OrderStatus, Subjects } from "@xycorp/common";
import { queueGroupName } from "./queue-group-name";

export class OrderCreatedListener extends Listener <OrderCreatedEvent>{
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
  queueGroupName = queueGroupName;

  onMessage(data: OrderCreatedEvent['data'], msg: Message): void {
    
  }
}