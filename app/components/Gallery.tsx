import Image from "next/image"
import "./../css/galley.css"
export default function Gallery() {
    return <section className="sectionGallery">
        <div className="galleyImg"><Image src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=75&fit=crop" alt="Forza img" fill></Image></div>
        <div className="galleyImg"><Image src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&q=75&fit=crop" alt="Forza img" fill></Image></div>
        <div className="galleyImg"><Image src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=500&q=75&fit=crop" alt="Forza img" fill></Image></div>
        <div className="galleyImg"><Image src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=500&q=75&fit=crop" alt="Forza img" fill></Image></div>
        <div className="galleyImg"><Image src="https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?w=500&q=75&fit=crop" alt="Forza img" fill></Image></div>
    </section>
}