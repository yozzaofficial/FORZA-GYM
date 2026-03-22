import "./../css/plan.css"
import Link from "next/link"
export default function Plan() {
    return <section className="planSection">
        <p className="sectionLabel">MEMBERSHIP</p>
        <h2 className="sectionTitle">CHOOSE<br />YOUR PLAN</h2>
        <div className="planContainer">
            <div className="plan">
                <div className="priceCard">
                    <p className="priceTag">STARTER</p>
                    <h3 className="pricePlan">39€</h3>
                    <p className="pricePeriod">per month</p>
                </div>
                <div className="listBenef">
                    <ul>
                        <li>Unlimited weight room</li>
                        <li>Locker rooms & showers</li>
                        <li>FORZA App</li>
                        <li>2 course per month</li>
                    </ul>
                </div>
                <Link href="/">START NOW</Link>
            </div>
            <div className="plan">
                <div className="priceCard">
                    <p className="priceTag">PRO · MOST POPULAR </p>
                    <h3 className="pricePlan">69€</h3>
                    <p className="pricePeriod">per month</p>
                </div>
                <div className="listBenef">
                    <ul>
                        <li>Everything in Starter</li>
                        <li>Unlimited classes</li>
                        <li>Integrated AI Coach</li>
                        <li>1 PT session / month</li>
                        <li>Body composition analysis</li>
                    </ul>
                </div>
                <Link href="/">CHOOSE PRO</Link>
            </div>
            <div className="plan">
                <div className="priceCard">
                    <p className="priceTag">ELITE</p>
                    <h3 className="pricePlan">119€</h3>
                    <p className="pricePeriod">per month</p>
                </div>
                <div className="listBenef">
                    <ul>
                        <li>Everything in Pro</li>
                        <li>Unlimited PT sessions</li>
                        <li>Nutrition plan</li>
                        <li>VIP area access</li>
                        <li>Guest pass × 2</li>
                    </ul>
                </div>
                <Link href="/">CHOOSE ELITE</Link>
            </div>
        </div>
    </section>
}