import "./../css/layout.css"
import Link from "next/link"
export default function Footer() {
    return <footer className="mainFooter">
        <div className="footerContainer">
            <div className="footerGrid">
                <div className="footer-brand">
                    <Link href="/" className="logo">FOR<span>Z</span>A</Link>
                    <p>The gym that combines professionalism, <br />
                        technology and passion for fitness.<br /> Milan since 2012.</p>
                </div>
                <div className="footer-col">
                    <p className="colTitle">GYM</p>
                    <ul>
                        <li>
                            <Link href="/">About us</Link>
                        </li>
                        <li>
                            <Link href="/">Our Trainers</Link>
                        </li>
                        <li>
                            <Link href="/">Facilities</Link>
                        </li>
                        <li>
                            <Link href="/">Work with us</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <p className="colTitle">SERVICES</p>
                    <ul>
                        <li>
                            <Link href="/">Weigth room</Link>
                        </li>
                        <li>
                            <Link href="/">Group classes</Link>
                        </li>
                        <li>
                            <Link href="/">Personal trainer</Link>
                        </li>
                        <li>
                            <Link href="/">Ai Coach</Link>
                        </li>
                    </ul>
                </div>
                <div className="footer-col">
                    <p className="colTitle">CONTACR</p>
                    <ul>
                        <li>
                            <Link href="/">14 forza Steet, Milan</Link>
                        </li>
                        <li>
                            <Link href="/">+39 02 1234 5678</Link>
                        </li>
                        <li>
                            <Link href="/">forza@forza.forza</Link>
                        </li>
                        <li>
                            <Link href="/">Instagram</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footerBottom">
                <p>© 2025 FORZA Gym Ltd.</p>
                <p>Privacy Policy · Cookie Policy</p>
            </div>
        </div>
    </footer>
}