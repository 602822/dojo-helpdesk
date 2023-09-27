import React from "react";

async function getTicket(id) {
  const res = await fetch("http://localhost:4000/tickets/" + id, {
    next: {
      revalidate: 60,
    },
  });
  return res.json();
}

//just to get the number of tickets
async function getTickets() {
  const res = await fetch("http://localhost:4000/tickets", {
    next: {
      revalidate: 0,
    },
  });
  return res.json();
}

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
