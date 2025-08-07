import mongoose from "mongoose";
import { TicketUpdatedEvent } from "@xycorp/common";
import { TicketUpdatedListener } from "../ticket-updated-listener";
import { natsWrapper } from "../../../nats-wrapper";
import { Ticket } from "../../../models/ticket";
import { Message } from "node-nats-streaming";


const setup = async () => {
  // create and instance of the listener
  const listener = new TicketUpdatedListener(natsWrapper.client);

  // create and save a ticket
  const ticket = Ticket.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    title: 'concert',
    price: 10,
  });
  await ticket.save();

  // Create a fake data object 
  const data: TicketUpdatedEvent['data'] = {
      id: ticket.id,
      version: ticket.version + 1,
      title: 'concert',
      price: 999,
      userId: new mongoose.Types.ObjectId().toHexString(),
    };

  // Create a fake msg object
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn()
  }

  return { msg, data, ticket, listener}
};

it('finds, updates and saves a ticket', async () => {

})

it('acks the message', async () => {

})