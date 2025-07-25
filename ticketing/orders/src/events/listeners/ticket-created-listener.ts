import { Message } from 'node-nats-streaming'
import { Subjects, Listener, TicketCreatedEvent} from '@xycorp/common'
import { Ticket } from '../../models/ticket'

export class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queueGroupName: string = 'orders-service';

  onMessage(data: TicketCreatedEvent['data'], msg: Message): void {
    
  }
}