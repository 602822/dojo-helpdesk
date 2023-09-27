import React from "react";
import { getTickets, getTicket } from "../ticketApi";

export default async function TicketDetails({ params }) {
  const ticket = await getTicket(params.id);
  const tickets = await getTickets();
  const length = tickets.length;
  return params.id > length ? (
    <h3 class="not-a-ticket">This is not a Ticket</h3>
  ) : (
    <main>
      <nav>
        <h2>Ticket Details</h2>
      </nav>
      <div className="card">
        <h3>{ticket.title}</h3>
        <small>Created by {ticket.user_email}</small>
        <p>{ticket.body}</p>
        <div className={`pill ${ticket.priority}`}>
          {ticket.priority} priority
        </div>
      </div>
    </main>
  );
}
