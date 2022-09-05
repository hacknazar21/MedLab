import React, {Component} from 'react';
import Swiper, {Autoplay, Navigation} from "swiper";
import {IReview} from "../../Interfaces/IReview";
interface Props {
    reviews: IReview[]
}
class Reviews extends React.Component<Props, any> {
    componentDidMount() {
        return new Swiper('.reviews-swiper', { // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [Navigation, Autoplay],

            observer: true,
            observeParents: true,
            slidesPerView: 2.7,
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
                prevEl: '.reviews-swiper .swiper-button-prev',
                nextEl: '.reviews-swiper .swiper-button-next',
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
                    slidesPerView: 2.4,
                    spaceBetween: 20,
                },
                1920: {
                    slidesPerView: 2.7,
                    spaceBetween: 20,
                }
            },

            // События
            on: {}
        });
    }
    render() {
        return (
            <section className="page__reviews reviews">
                <div className="reviews__container">
                    <div className="reviews__box">
                        <div className="reviews__header">
                            <h2 className="reviews__title section-title">Наши отзывы</h2>
                        </div>
                        <div className="reviews__slider reviews-swiper">
                            <div className="reviews__wrapper swiper-wrapper">
                                {this.props.reviews.map((review)=>{
                                    const date = `${review.date.split('T')[0].split('-').reverse().join('.')}`
                                    return (
                                        <div className="reviews__slide swiper-slide">
                                            <div className="reviews__card reviews-card">
                                                <div className="reviews-card__header">
                                                    <div className="reviews-card__img-ibg">
                                                        <img src={review.avatar} alt="" />
                                                    </div>
                                                    <div className="reviews-card__info-box">
                                                        <div className="reviews-card__info-name">{review.title}</div>
                                                        <div className="reviews-card__info-date">{date}</div>
                                                    </div>
                                                </div>
                                                <div className="reviews-card__text">
                                                    <p>{review.text}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="reviews__slider-buttons swiper-buttons">
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
                    </div>
                </div>
            </section>
        );
    }
}

export default Reviews;