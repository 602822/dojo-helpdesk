import React from 'react'
import Link from 'next/link'
const NavBar = () => {
  return (
    <nav className='bg-blue-500 p-4 text-white'>
        <h1 className='text-2xl font-bold'>Dojo Helpdesk</h1>
        <Link href="/" className="mx-2 hover:underline">Dashboard</Link>|
        <Link href="/tickets" className="mx-2 hover:underline ">Tickets</Link>|
        <Link href="/about" className="mx-2 hover:underline ">About</Link>
      </nav>
  )
}

export default NavBar