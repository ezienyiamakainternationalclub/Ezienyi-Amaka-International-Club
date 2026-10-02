import "./Anniversary.css";

// Import Anniversary Images
import img1 from "../../assets/10-years-aniversery-2015-20255.png";
import img2 from "../../assets/1 The Incumbent  chancellor Ezienyi Emma Nwanju welcomes guests with kola.jpeg";
import img3 from "../../assets/2 Chairman Opening Speech.jpeg";
import img4 from "../../assets/3 arrival of the guest.jpeg";
import img5 from "../../assets/4 MC 2-can-talk and DJ Harmonix in operation.jpeg";
import img6 from "../../assets/5 presentation of kola nuts.jpeg";
import img7 from "../../assets/6 cutting cake.jpeg";
import img8 from "../../assets/7 guest session1.jpeg";
import img9 from "../../assets/8 award presentation.jpeg";
import img10 from "../../assets/9 cake for the anniversary.jpeg";
import img11 from "../../assets/10 provost with other respected personalities.jpeg";
import img12 from "../../assets/11 guest session2.jpeg";
import img13 from "../../assets/12 guest session3.jpeg";

const anniversaryPhotos = [
  { src: img1, title: "10-years-aniversery-2015-2025" },
  { src: img2, title: "Chancellor Ezienyi Emma Nwanju welcoming guests with kola" },
  { src: img3, title: "Chairman Opening Speech" },
  { src: img4, title: "Arrival of Guests" },
  { src: img5, title: "MC 2-Can-Talk and DJ Harmonix in Action" },
  { src: img6, title: "Presentation of Kola Nuts" },
  { src: img7, title: "Cutting of the Anniversary Cake" },
  { src: img8, title: "Guests Session" },
  { src: img9, title: "Award Presentation" },
  { src: img10, title: "10th Anniversary Cake" },
  { src: img11, title: "The Chancellor Ezienyi Emma Nwanju Addressing Respected Personalities" },
  { src: img12, title: "Guests Session" },
  { src: img13, title: "Guests Session" },
];

export default function Anniversary() {
  return (
    <section className="anniversary-section">
      <div className="anniversary-container">
        <h2 className="anniversary-title">10th Anniversary Celebration Highlights</h2>
        <p className="anniversary-subtitle">
          Moments from our 10th-anniversary celebration, honoring unity, brotherhood, and excellence.
        </p>

        <div className="anniversary-scroll-row">
          {anniversaryPhotos.map((photo, index) => (
            <div key={index} className="anniversary-card">
              <img src={photo.src} alt={photo.title} loading="lazy" />
              <p className="anniversary-card-caption">{photo.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}