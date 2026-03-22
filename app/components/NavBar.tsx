import "./../css/layout.css"
import Link from "next/link"
export default function NavBar() {
    return <>
        <nav className="mainNav">
            <ul>
                <li>
                    <Link href="/">SERVICES</Link>
                </li>
                <li>
                    <Link href="/">TRAINERS</Link>
                </li>
                <li>
                    <Link href="/">AI COACH</Link>
                </li>
                <li>
                    <Link href="/">PRICING</Link>
                </li>
                <li className="getStartedButton">
                    <Link href="/" >GET STARTED</Link>
                </li>
            </ul>
        </nav>
    </>
}