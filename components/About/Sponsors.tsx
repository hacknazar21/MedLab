import React, {RefObject, useEffect, useRef, useState} from 'react';
import missionImg from '../../src/img/mission/mission.png'
import Slide from "../Index/Slider/Slide";
import Swiper, {Autoplay, Navigation} from "swiper";
import slideImg from '../../src/img/about/slide.png'
interface OwnProps {

}

type Props = OwnProps;

export function Sponsors (props: Props) {
    const slider:RefObject<HTMLDivElement> = useRef()
    useEffect(() => {
        if(slider.current.className)
        new Swiper('.' + slider.current.classList[0], {
            modules: [Navigation, Autoplay],

            observer: true,
            observeParents: true,
            slidesPerView: 6,
            spaceBetween: 20,
            autoHeight: false,
            speed: 800,

            // Эффекты
            effect: 'fade',
            autoplay: {
                delay: 3000,
                disableOnInteraction: false,
            },

            // Брейкпоинты

            breakpoints: {
                320: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                770: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 5,
                    spaceBetween: 20,
                },
                1920: {
                    slidesPerView: 6,
                    spaceBetween: 20,
                }
            },

            // События
            on: {}
        });
    }, [slider]);

    return (
        <>
            <div className="sponsors">
                <h2 className="sponsors__title">Наши партнеры</h2>
                <div ref={slider} className="sponsors__swiper sponsors-swiper">
                    <div className="swiper-wrapper">
                        <div className="swiper__slide swiper-slide">
                            <img src={slideImg.src} alt="" className="swiper__silder-img"/>
                        </div>
                        <div className="swiper__slide swiper-slide">
                            <img src={slideImg.src} alt="" className="swiper__silder-img"/>
                        </div>
                        <div className="swiper__slide swiper-slide">
                            <img src={slideImg.src} alt="" className="swiper__silder-img"/>
                        </div>
                        <div className="swiper__slide swiper-slide">
                            <img src={slideImg.src} alt="" className="swiper__silder-img"/>
                        </div>
                        <div className="swiper__slide swiper-slide">
                            <img src={slideImg.src} alt="" className="swiper__silder-img"/>
                        </div>
                        <div className="swiper__slide swiper-slide">
                            <img src={slideImg.src} alt="" className="swiper__silder-img"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
