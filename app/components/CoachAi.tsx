import "./../css/coachai.css"
import ChatAI from "./ChatAI"
export default function CoachAi() {
    return <section className="coachAISection">
        <div className="coachAIContainer">
            <div className="aiIntro">
                <div className="aiTitle">
                    <p className="aiBadge">AI COACH ONLINE</p>
                    <h3 className="sectionTitle">YOUR <br />
                        DIGITAL<br />
                        COACH</h3>
                    <p className="aiDesc">Ask us anything about the gym, schedules, <br />
                        and classesor get a personalized training plan <br />generated in seconds, right here.</p>
                </div>


            </div>
            <div className="aiFeatures">
                <div className="aiFeature">
                    <span className="aiFeature-icon">🗒️</span>
                    <div>
                        <h3 className="aiFeature-title">CUSTOM TRAINING PLAN</h3>
                        <p className="aiFeatur-desc">
                            Tell me your goal (muscle gain, weight loss, toning) and your level. I'll generate a complete weekly plan.
                        </p>
                    </div>
                </div>
                <div className="aiFeature">
                    <span className="aiFeature-icon">🕑</span>
                    <div>
                        <h3 className="aiFeature-title">HOURS & AVAILABILITY</h3>
                        <p className="aiFeatur-desc">
                            Classes, bookings, trainer availability. All in real time without waiting at the front desk.</p>
                    </div>
                </div>
                <div className="aiFeature">
                    <span className="aiFeature-icon">💡</span>
                    <div>
                        <h3 className="aiFeature-title">PERSONALIZED ADVICE</h3>
                        <p className="aiFeatur-desc">
                            Nutrition, recovery, and supplementation: answers based on your profile and your specific goals.</p>                        </div>
                </div>
            </div>
            <ChatAI />
        </div>
    </section>
}