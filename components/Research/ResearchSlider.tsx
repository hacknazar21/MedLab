import React, { useEffect, useRef, useState } from "react";
import Swiper, { Autoplay } from "swiper";

interface OwnProps {
  banner_img: any;
  long_title: string;
}

type Props = OwnProps;

export default function ResearchSlider(props: Props) {
  const [slider, setSlider] = useState(null);
  useEffect(() => {
    if (slider)
      new Swiper(`.${slider.classList[0]}`, {
        modules: [Autoplay],
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        autoHeight: false,
        speed: 800,

        // Эффекты
        effect: "fade",
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        breakpoints: {},
        on: {},
      });
  }, [slider]);

  return (
    <div className="research__silder">
      <div
        ref={(ref) => setSlider(ref)}
        className="research__slider research-swiper"
      >
        <div className="research__wrapper swiper-wrapper">
          {typeof props.banner_img === "Array" &&
            props.banner_img.map((banner, id) => {
              return (
                <div key={id} className="research__slide swiper-slide">
                  <img src={banner} alt={props.long_title} />
                </div>
              );
            })}
          <div className="research__slide swiper-slide">
            <img src={props.banner_img} alt={props.long_title} />
          </div>
        </div>
      </div>
    </div>
  );
}
