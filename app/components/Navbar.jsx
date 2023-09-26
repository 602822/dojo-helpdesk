import React from "react";
import Link from "next/link";
const NavBar = () => {
  return (
    <nav>
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>|<Link href="/tickets">Tickets</Link>|
      <Link href="/about">About</Link>
    </nav>
  );
};

export default NavBar;
