import React, { useEffect } from "react";
import { IAnalys } from "../../Interfaces/IAnalys";
import { ResearchCard } from "../common/ResearchCard";
import Swiper, { Navigation, Autoplay } from "swiper";

interface OwnProps {
  analysis: IAnalys[];
}

type Props = OwnProps;

export function Popular(props: Props) {
  useEffect(() => {
    new Swiper(".popular-analises__slider.popular-analises-swiper", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],

      observer: true,
      observeParents: true,
      slidesPerView: 4,
      spaceBetween: 20,
      autoHeight: true,
      speed: 800,

      // Эффекты
      effect: "fade",
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: `.popular-analises__slider.popular-analises-swiper .swiper-button-prev`,
        nextEl: `.popular-analises__slider.popular-analises-swiper .swiper-button-next`,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.2,
          spaceBetween: 11,
        },
        770: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1280: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1920: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },

      // События
      on: {},
    });
  }, []);
  return (
    <section className="page__popular-analises popular-analises">
      <div className="popular-analises__container">
        <div className="popular-analises__box">
          <div className="popular-analises__header">
            <h2 className="popular-analises__title section-title">
              Популярные анализы
            </h2>
            <a href="" className="popular-analises__show-all-pc show-all-pc">
              <span>смотреть все анализы</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="29"
                viewBox="0 0 28 29"
                fill="none"
              >
                <path
                  d="M22.3145 14.1455C22.3145 13.873 22.2002 13.6094 21.998 13.416L16.2236 7.6416C15.9951 7.42188 15.7578 7.3252 15.5117 7.3252C14.9492 7.3252 14.5449 7.7207 14.5449 8.25684C14.5449 8.53809 14.6592 8.77539 14.835 8.95117L16.8125 10.9551L19.3613 13.2842L17.3223 13.1611H6.66992C6.08105 13.1611 5.67676 13.5654 5.67676 14.1455C5.67676 14.7168 6.08105 15.1211 6.66992 15.1211H17.3223L19.3613 14.998L16.8125 17.3271L14.835 19.3311C14.6592 19.5068 14.5449 19.7441 14.5449 20.0254C14.5449 20.5615 14.9492 20.957 15.5117 20.957C15.7578 20.957 15.9951 20.8604 16.2061 20.6582L21.998 14.8662C22.2002 14.6729 22.3145 14.4092 22.3145 14.1455Z"
                  fill="#337FF9"
                />
              </svg>
            </a>
          </div>
          <div className="popular-analises__slider popular-analises-swiper">
            <div className="popular-analises__wrapper swiper-wrapper">
              {props.analysis.map((research: IAnalys, id) => {
                return (
                  <div className="popular-analises__slide swiper-slide">
                    <ResearchCard research={research} id={id} />
                  </div>
                );
              })}
            </div>
          </div>
          <a href="" className="popular-analises__show-all show-all">
            смотреть все анализы
          </a>
        </div>
      </div>
    </section>
  );
}

export default Popular;
