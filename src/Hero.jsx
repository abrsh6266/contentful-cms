import React from "react";
import heroImg from "./assets/hero2.svg";
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Explore My Web Creations</h1>
          <p>
            Welcome to my portfolio of web creations! Explore a diverse range of
            websites I've crafted with care and creativity. From sleek and
            modern designs to quirky and innovative interfaces, each site
            showcases my dedication to quality and user experience. Whether
            you're seeking inspiration or browsing for potential collaborations,
            you'll find a variety of projects here to spark your interest. Dive
            in and discover the world of possibilities that await!
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
