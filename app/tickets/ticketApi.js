export async function getTickets() {
    const res = await fetch("http://localhost:4000/tickets", {
      next: {
        revalidate: 0,
      },
    });
    return res.json();
  }

 export  async function getTicket(id) {
    const res = await fetch("http://localhost:4000/tickets/" + id, {
      next: {
        revalidate: 60,
      },
    });
    return res.json();
  }