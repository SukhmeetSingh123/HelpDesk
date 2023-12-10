"use client"
import Loading from "../loading"
import TicketsList from "./TicketsList"
import { useRouter } from 'next/navigation'
import { useEffect, useState } from "react"

const Tickets = () => {
  const router = useRouter()
  const [tickets, setTickets] = useState([])

  useEffect(() => {
    async function fetchTickets() {
      const res = await fetch('http://localhost:4000/tickets')
      const data = await res.json()
      setTickets(data)
    }

    fetchTickets()
  }, [router])

  return (
    <main>
      <nav>
        <div>
          <h2>Tickets</h2>
          <p><small>Currently Open Tickets</small></p>
        </div>
      </nav>
      <TicketsList tickets={tickets} />
    </main>
  )
}

export default Tickets
