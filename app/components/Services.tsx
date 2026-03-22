import "./../css/services.css"
export default function Services() {
    return <section className="serviceSection">
        <div className="serivceContainer">
            <p className="sectionLabel">WHAT WE OFFER</p>
            <h2 className="sectionTitle">OUR <br /> SERVICES</h2>
            <div className="serviceCardsContainer">
                <div className="serviceCard"><span className="serviceIcon">🏋</span><h3 className="serviceTitle">WEIGHT ROOM</h3><p className="serviceDesc">Over 200 professional machines, dedicated zones for every muscle group, and real-time performance tracking systems.</p></div>
                <div className="serviceCard"><span className="serviceIcon">🥊</span><h3 className="serviceTitle">BOXING & COMBAT</h3><p className="serviceDesc">Professional ring, boxing bags, Muay Thai, MMA and self-defence classes led by regional champions and former competitive athletes.</p></div>
                <div className="serviceCard"><span className="serviceIcon">🧘‍♀️</span><h3 className="serviceTitle">YOGA & PILATES</h3><p className="serviceDesc">Soundproofed rooms with cork flooring, hot showers, and IYA-certified instructors for a complete mind-body journey.</p></div>
                <div className="serviceCard"><span className="serviceIcon">🚴</span><h3 className="serviceTitle">SPINNING & CARDIO</h3><p className="serviceDesc">40 connected bikes with heart rate monitors and live leaderboards. Group sessions or solo training with curated playlists.</p></div>
                <div className="serviceCard"><span className="serviceIcon">🥗</span><h3 className="serviceTitle">NUTRITION</h3><p className="serviceDesc">Personalised meal plan, consultation with a certified nutritionist, and macronutrient tracking integrated with your workout plan.</p></div>
                <div className="serviceCard"><span className="serviceIcon">🤖</span><h3 className="serviceTitle">AI PERSONAL TRAINERS</h3><p className="serviceDesc">Workout plan generated in real time by our AI, updated weekly based on your progress and specific goals.</p></div>
            </div>
        </div>
    </section>
}