import React, { useEffect } from "react";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000, // Длительность анимации в миллисекундах
      once: false, // Анимация будет проигрываться один раз
    });
  }, []);
  return (
    <>
      <section>
        <div className="container">
          <div className="wrap">
            <div className="box" data-aos="flip-up" data-aos-delay="200">
              {" "}
            </div>
            <div className="box" data-aos="flip-up" data-aos-delay="400"></div>
            <div className="box" data-aos="flip-up" data-aos-delay="600"></div>
          </div>
          <div className="wrap">
            <div className="box" data-aos="flip-up" data-aos-delay="800">
              {" "}
            </div>
            <div className="box" data-aos="flip-up" data-aos-delay="1000"></div>
            <div className="box" data-aos="flip-up" data-aos-delay="1200"></div>
          </div>
          <div className="wrap">
            <div className="box" data-aos="flip-right">
              {" "}
            </div>
            <div className="box" data-aos="flip-down"></div>
            <div className="box" data-aos="flip-left"></div>
          </div>
          <div className="wrap">
            <div className="box" data-aos="flip-right">
              {" "}
            </div>
            <div className="box" data-aos="flip-down"></div>
            <div className="box" data-aos="flip-left"></div>
          </div>
          <div className="wrap">
            <div className="box" data-aos="flip-right">
              {" "}
            </div>
            <div className="box" data-aos="flip-down"></div>
            <div className="box" data-aos="flip-left"></div>
          </div>
          <div className="wrap">
            <div className="box" data-aos="flip-right">
              {" "}
            </div>
            <div className="box" data-aos="flip-down"></div>
            <div className="box" data-aos="flip-left"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
