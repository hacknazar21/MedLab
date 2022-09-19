import React, { PureComponent } from 'react';
import {ISlider} from "../../Interfaces/ISlider";
import Slide from "./Slider/Slide";
// @ts-ignore
import Swiper, {Navigation, Autoplay} from "swiper";

interface Props{
    slider: ISlider
}
class Slider extends React.Component<Props> {
    componentDidMount()  {
        return new Swiper('.'+this.props.slider.className+'-swiper', { // Указываем скласс нужного слайдера
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
                effect: 'fade',
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                // Кнопки "влево/вправо"
                navigation: {
                    prevEl: `.${this.props.slider.className}-swiper .swiper-button-prev`,
                    nextEl: `.${this.props.slider.className}-swiper .swiper-button-next`,
                },

                // Брейкпоинты

                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    770: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    992: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    1920: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    }
                },

                // События
                on: {}
            });
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any) {
        return new Swiper('.'+this.props.slider.className+'-swiper', { // Указываем скласс нужного слайдера
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
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },
            // Кнопки "влево/вправо"
            navigation: {
                prevEl: '.popular-analises-swiper .swiper-button-prev',
                nextEl: '.popular-analises-swiper .swiper-button-next',
            },

            // Брейкпоинты

            breakpoints: {
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                },
                770: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                }
            },

            // События
            on: {}
        });
    }

    render() {
       return  (
           <>
               {!this.props.slider.hidden &&
                  <div className={this.props.slider.className + "__slider popular-analises-swiper active"}>
                      <div className={this.props.slider.className + "__wrapper swiper-wrapper"}>
                          {this.props.slider.slides.map((slide)=>{
                              return <Slide slide={slide}/>
                          })}
                      </div>
                      <div className={this.props.slider.className + "__slider-buttons swiper-buttons"}>
                          <button className="swiper-button-prev">
                              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"
                                   fill="none">
                                  <path
                                      d="M0.499997 7.79999L6.2 13.4C6.6 13.8 7.2 13.8 7.6 13.4C8 13 8 12.4 7.6 12L2.7 6.99999L7.6 1.99999C8 1.59999 8 0.999987 7.6 0.599988C7.4 0.399988 7.2 0.299988 6.9 0.299988C6.6 0.299988 6.4 0.399988 6.2 0.599988L0.499997 6.19999C0.099997 6.69999 0.099997 7.29999 0.499997 7.79999C0.499997 7.69999 0.499997 7.69999 0.499997 7.79999Z"
                                      fill="none"/>
                              </svg>
                          </button>
                          <button className="swiper-button-next">
                              <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14"
                                   fill="none">
                                  <path
                                      d="M0.499997 7.79999L6.2 13.4C6.6 13.8 7.2 13.8 7.6 13.4C8 13 8 12.4 7.6 12L2.7 6.99999L7.6 1.99999C8 1.59999 8 0.999987 7.6 0.599988C7.4 0.399988 7.2 0.299988 6.9 0.299988C6.6 0.299988 6.4 0.399988 6.2 0.599988L0.499997 6.19999C0.099997 6.69999 0.099997 7.29999 0.499997 7.79999C0.499997 7.69999 0.499997 7.69999 0.499997 7.79999Z"
                                      fill="none"/>
                              </svg>
                          </button>
                      </div>
                  </div>
               }
           </>
          );
  }
}

export default Slider;
