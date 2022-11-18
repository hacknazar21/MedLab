import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import Swiper, { Autoplay } from "swiper";
import Link from "next/link";
import { IAnalys } from "../../Interfaces/IAnalys";
import { ResearchCard } from "../common/ResearchCard";

interface OwnProps {
  researches: IAnalys[];
}

type Props = OwnProps;

const ResearchPopular: FunctionComponent<Props> = ({ researches }) => {
  const [slider, setSlider] = useState(null);
  useEffect(() => {
    if (slider)
      new Swiper(`.${slider.classList[0]}`, {
        modules: [Autoplay],
        observer: true,
        observeParents: true,
        slidesPerView: 4,
        spaceBetween: 20,
        autoHeight: false,
        speed: 800,

        // Эффекты
        effect: "fade",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 2,
          },
          960: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
          1920: {
            slidesPerView: 4,
          },
        },
        on: {},
      });
  }, [slider]);

  return (
    <div className="research__popular single-page">
      <div className="single-page-box">
        <h2 className="research__popular-title single-page-title">
          Похожие анализы
        </h2>
        <div
          ref={(ref) => setSlider(ref)}
          className="research__popular-slider research-swiper"
        >
          <div className="research__popular-slider-wrapper swiper-wrapper">
            {researches.map((research) => {
              return (
                <div className="swiper-slide">
                  <ResearchCard research={research} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResearchPopular;
