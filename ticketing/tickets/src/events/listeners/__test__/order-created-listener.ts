import { OrderCreatedEvent, OrderStatus } from '@xycorp/common';
import { OrderCreatedListener } from '../order-created-listener';
import { natsWrapper } from '../../../nats-wrapper';
import { Ticket } from '../../../models/ticket';
import mongoose from 'mongoose';
import { Message } from 'node-nats-streaming';

const setup = async () => {
  // Create an isntance of the listener
  const listener = new OrderCreatedListener(natsWrapper.client);

  // Create and save a ticket
  const ticket = Ticket.build({
    title: 'concert',
    price: 99,
    userId: 'asdf',
  });
  await ticket.save();

  // Create the fake data event
  const data: OrderCreatedEvent['data'] = {
    id: new mongoose.Types.ObjectId().toHexString(),
    version: 0,
    status: OrderStatus.Created,
    userId: 'asgewrgerg',
    expiresAt: 'agiuegjheiug',
    ticket: {
      id: ticket.id,
      price: ticket.price,
    },
  };

  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, ticket, data, msg };
};
