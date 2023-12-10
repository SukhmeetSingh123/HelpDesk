import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
const NavBar = () => {
  return (
    <nav>
      {/* <Image
        src={''}
        alt="Logo"
        width={70}
        quality={100}
        // placeholder='blur'
      /> */}
      <h1>HelpDesk</h1>
      <Link href='/'>DashBoard</Link>
      <Link href='/tickets'>Tickets</Link>
      <Link href='/tickets/create'>Create Ticket</Link>
    </nav>
  )
}

export default NavBar
