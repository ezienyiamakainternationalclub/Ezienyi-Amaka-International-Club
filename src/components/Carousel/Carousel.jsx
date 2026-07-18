import "./Carousel.css";
import { useEffect, useState } from "react";

// Official Club Images
import hero1 from "../../assets/hero1.webp";
import anniversary10Years from "../../assets/10-years-aniversery-2015-2025.webp";

import chancellorCurrent from "../../assets/emma-chike-nwanju-club-chancellor-2024-till-date.webp";

// PICTURES ARE NOT AVAILABLE
// import viceChancellor from "../../assets/vice-chancellor.webp";
// import secretaryGeneral from "../../assets/secretary-general.webp";
// import assistantSecretaryGeneral from "../../assets/assistant-secretary-general.webp";
// import exchequer from "../../assets/exchequer-(financial -secretary).webp";
// import directorOfWelfare from "../../assets/director-of-welfare.webp";
// import directorOfDiscipline from "../../assets/director-of-discipline.webp";
import informationManager from "../../assets/information-manager-(PRO).webp";

import formerChancellor1 from "../../assets/desmond-obisike-club-chancellor-2020-till-2024.webp";
import formerChancellor2 from "../../assets/ezienyi-paully-ndubueze-club-chancellor-2015-till-2020.webp";

import anniversary from "../../assets/bot-members-pose-on-our-10th-anniversary.webp";
import membersWithChancellor from "../../assets/bot-members-with-the-chancellor-at-the -centre.webp";
import crossSection from "../../assets/cross-section-of-members.webp";
import membersGroup from "../../assets/members-group-image.webp";
import ihie1 from "../../assets/ihiee-1-of-ezienyi.webp";

import logo from "../../assets/Ezienyiamakainternationalclub-logo.webp";

const slides = [
  
  {

    image: hero1,

    title: "Ezienyi Amaka International Club",

  },
  
 {
  image: anniversary10Years,
  title: "10th Anniversary (2015 - 2025)",
},
  
  {
    image: chancellorCurrent,
    title: "Club Chancellor (2024 - Present)",
  },
// PICTURES ARE NOT AVAILABLE
  // {
  //   image: viceChancellor,
  //   title: "Vice Chancellor",
  // },
  // {
  //   image: secretaryGeneral,
  //   title: "Secretary-General",
  // },
  // {
  //   image: assistantSecretaryGeneral,
  //   title: "Assistant Secretary-General",
  // },
  // {
  //   image: exchequer,
  //   title: "Exchequer (Financial Secretary)",
  // },
  {
    image: informationManager,
    title: "Information Manager (PRO)",
  },
  // {
  //   image: directorOfWelfare,
  //   title: "Director of Welfare",
  // },
  // {
  //   image: directorOfDiscipline,
  //   title: "Director of Discipline",
  // },
  {
    image: formerChancellor1,
    title: "Club Chancellor (2020 - 2024)",
  },
  {
    image: formerChancellor2,
    title: "Club Chancellor (2015 - 2020)",
  },
  {
    image: anniversary,
    title: "10th Anniversary Celebration",
  },
  {
    image: membersWithChancellor,
    title: "Members with the Chancellor",
  },
  {
    image: crossSection,
    title: "Cross Section of Members",
  },
  {
    image: membersGroup,
    title: "Members Group Photograph",
  },
  {
    image: ihie1,
    title: "Ihiee of Ezienyi",
  },
  {
    image: logo,
    title: "Ezienyi Amaka International Club",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4500);

    return () => clearInterval(timer);
  }, [total]);

  const previousSlide = () => {
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % total);
  };

  return (
    <div className="carousel">

      <div className="carousel-image-wrapper">

        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt={slide.title}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
            className={
              current === index
                ? "carousel-image active"
                : "carousel-image"
            }
          />
        ))}

      </div>

      <button
        className="carousel-btn prev"
        onClick={previousSlide}
        aria-label="Previous Slide"
      >
        ❮
      </button>

      <button
        className="carousel-btn next"
        onClick={nextSlide}
        aria-label="Next Slide"
      >
        ❯
      </button>

      <div className="carousel-dots">

        {slides.map((_, index) => (

          <button
            key={index}
            className={
              current === index
                ? "carousel-dot active"
                : "carousel-dot"
            }
            onClick={() => setCurrent(index)}
          />

        ))}

      </div>

    </div>
  );
}