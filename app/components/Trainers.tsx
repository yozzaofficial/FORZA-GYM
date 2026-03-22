import "./../css/trainers.css"
import Image from "next/image"
export default function Trainers() {
    return <section className="trainersSection">
        <p className="sectionLabel">OUR TEAM</p>
        <h2 className="sectionTitle">THE TRAINERS</h2>
        <div className="trainersList">
            <div className="trainerCard">
                <Image src="https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=500&q=75&fit=crop&crop=faces" alt="Trainer photo" fill></Image>
                <div className="trainerInfo">
                    <p className="trainerLabel">STRENGTH & CONDITIONING</p>
                    <h3 className="trainername">LUCA FERRETTI</h3>
                </div>
            </div>
            <div className="trainerCard">
                <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&q=75&fit=crop&crop=faces" alt="Trainer photo" fill></Image>
                <div className="trainerInfo">
                    <p className="trainerLabel">YOGA & MOBILITY</p>
                    <h3 className="trainername">SARA MONTANARI</h3>
                </div>
            </div>
            <div className="trainerCard">
                <Image src="https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500&q=75&fit=crop" alt="Trainer photo" fill></Image>
                <div className="trainerInfo">
                    <p className="trainerLabel">BOXE & COMBAT SPORT</p>
                    <h3 className="trainername">DAVIDE ARENA</h3>
                </div>
            </div>
        </div>
    </section>
}