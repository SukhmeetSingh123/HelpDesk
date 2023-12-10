import Link from "next/link"
const NotFound = () => {
  return (
    <main className="text-center">
    <h2 className="text-3xl">We Hit a Brick Wall.</h2>
    <p>We could not find the ticket you were lookin for</p>
    <p>Go back to the <Link href='/tickets'>Tickets</Link></p>
</main>
  )
}

export default NotFound
