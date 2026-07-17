import "./Carousel.css";

import { useEffect, useState } from "react";

import hero1 from "../../assets/hero1.webp";
import membersGroup from "../../assets/members-group-pic.webp";
import chairman from "../../assets/chairman.webp";
import viceChairman from "../../assets/vice-chairman.webp";
import secretary from "../../assets/secretary.webp";
import financialSecretary from "../../assets/financial-secretary.webp";
import treasurer from "../../assets/treasurer.webp";
import welfareChairman from "../../assets/welfare-chairman.webp";
import logo from "../../assets/Ezienyiamakainternationalclub-logo.webp";

const slides = [
  {
    image: hero1,
    title: "Ezienyi Amaka International Club",
  },
  {
    image: membersGroup,
    title: "Members",
  },
  {
    image: chairman,
    title: "Chairman",
  },
  {
    image: viceChairman,
    title: "Vice Chairman",
  },
  {
    image: secretary,
    title: "Secretary",
  },
  {
    image: financialSecretary,
    title: "Financial Secretary",
  },
  {
    image: treasurer,
    title: "Treasurer",
  },
  {
    image: welfareChairman,
    title: "Welfare Chairman",
  },
  {
    image: logo,
    title: "Club Logo",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, 4000);

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
              index === current
                ? "carousel-image active"
                : "carousel-image"
            }
          />
        ))}

      </div>

      <button
        className="carousel-btn prev"
        onClick={previousSlide}
        aria-label="Previous"
      >
        ❮
      </button>

      <button
        className="carousel-btn next"
        onClick={nextSlide}
        aria-label="Next"
      >
        ❯
      </button>

      <div className="carousel-dots">

        {slides.map((_, index) => (

          <button
            key={index}
            className={
              index === current
                ? "carousel-dot active"
                : "carousel-dot"
            }
            onClick={() => setCurrent(index)}
            aria-label={`Slide ${index + 1}`}
          />

        ))}

      </div>

    </div>
  );
}