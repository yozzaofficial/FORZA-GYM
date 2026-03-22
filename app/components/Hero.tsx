import "./../css/hero.css"
import Link from "next/link"
import Image from "next/image"
export default function Hero() {
    return <section className="heroSection">
        <div className="heroText">
            <p className="heroEyebrow">MILAN · 14 STRENGTH STREET</p>
            <h1>
                FORGE<br />
                YOUR <br />
                <span>BODY</span>
            </h1>
            <p className="heroSub">Not just a gym. A tailored training system,<br />
                powered by artificial intelligence, for those who<br /> want real results.</p>
            <div className="heroCTA">
                <Link href="">TALK TO AI COACH</Link>
                <Link href="">DISCOVER SERVICES</Link>
            </div>
            <div className="heroStats">
                <div>
                    <div className="statsNum">12<span>+</span></div>
                    <div className="statsLabel">YEARS ACTIVE</div>
                </div>
                <div>
                    <div className="statsNum">3<span>K</span></div>
                    <div className="statsLabel">ACTIVE MEMBERS</div>
                </div>
                <div>
                    <div className="statsNum">98<span>%</span></div>
                    <div className="statsLabel">SATISFACTION</div>
                </div>
            </div>
        </div>
        <div className="heroImg">
            <Image src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=900&q=80&fit=crop"
                alt="Forza gym image"
                fill
                className="imgHero"
            ></Image>
            <div className="heroBadge">
                <p>OPEN EVERY DAY</p>
                <span>6:00 - 23:00</span>
            </div>
        </div>
    </section>
}