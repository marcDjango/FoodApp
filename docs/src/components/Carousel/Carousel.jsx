import React, { useState, useEffect } from "react";
import CarouselSelect from "./CarouselSelect";
import "./Carousel.scss";
import { useWindowWidth } from "../utils";

function Carousel() {
  const windowWidth = useWindowWidth();
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (windowWidth <= 600) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowWidth]);

  return (
    <>
      <h1 className="TitleCarousel">COMPOSE YOUR MENU</h1>
      <div className="CarouselGlobal">
        <div className="CarouselDesktop">
          {!isMobile && <CarouselSelect mealType="breakfast" />}
        </div>
        <div className="CarouselMobile">
          <CarouselSelect mealType="lunch" />
        </div>
        <div className="CarouselDesktop">
          {!isMobile && <CarouselSelect mealType="teatime" />}
        </div>
      </div>
    </>
  );
}

export default Carousel;
