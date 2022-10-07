import React, {useEffect, useRef, useState} from 'react';
import Swiper, {Autoplay} from "swiper";
import Link from "next/link";


interface OwnProps {

}

type Props = OwnProps;

export default function ResearchPopular(props: Props) {
    const [slider, setSlider] = useState(null)
    useEffect(() => {
        if(slider) new Swiper(`.${slider.classList[0]}`, {
            modules: [Autoplay],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 20,
            autoHeight: false,
            speed: 800,

            // Эффекты
            effect: 'fade',
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
                }
            },
            on: {}
        });
    }, [slider]);

    return (
        <div className="research__popular">
            <h2 className="research__popular-title">Наиболее популярные анализы в Казахстане</h2>
            <div ref={ref=>setSlider(ref)} className="research__popular-slider research-swiper">
                <div  className="research__popular-slider-wrapper swiper-wrapper">
                    <div className="research__popular-slider-slide swiper-slide analysis__item analysis-item">
                        <Link href={`/analysis/[id]`} as={`/analysis/1`}>
                            <a href="">
                                <h3 className="analysis-item__title">rewgewgewg</h3>
                            </a>
                        </Link>
                        <div className="analysis-item__info-box">
                            <div className="analysis-item__info _icon-clock">ewqgwegewg</div>
                            <div className="analysis-item__info _icon-blood">ewgewg</div>
                        </div>
                        <div className="analysis-item__price-box">
                            <div className="analysis-item__price-id">ewgewgew</div>
                            <div className="analysis-item__price-value">23523 ₸</div>
                        </div>
                        <button className="analysis-item__add"></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

