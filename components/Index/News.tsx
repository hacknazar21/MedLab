import React from "react";
import { INews } from "../../Interfaces/INews";
import Swiper, { Autoplay, Navigation } from "swiper";
interface Props {
  news: INews[];
}
class News extends React.Component<Props, any> {
  componentDidMount() {
    return new Swiper(".news-swiper", {
      // Указываем скласс нужного слайдера
      // Подключаем модули слайдера
      // для конкретного случая
      modules: [Navigation, Autoplay],

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
      // Кнопки "влево/вправо"
      navigation: {
        prevEl: ".news-swiper .swiper-button-prev",
        nextEl: ".news-swiper .swiper-button-next",
      },

      // Брейкпоинты

      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        770: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        992: {
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
  }

  render() {
    return (
      <section className="page__news news">
        <div className="news__container">
          <div className="news__box">
            <div className="news__header">
              <h2 className="news__title section-title">Наши новости</h2>
            </div>
            <div className="news__slider news-swiper">
              <div className="news__wrapper swiper-wrapper">
                {this.props.news.map((news) => {
                  return (
                    <div key={news.id} className="news__slide swiper-slide">
                      <div className="news__card card">
                        <div className="card__img-ibg">
                          <img src={news.img_news} alt="" />
                        </div>
                        <div className="card__text">
                          <div className="card__desc">
                            <div className="card__desc-item">{news.date}</div>
                          </div>
                          <h3 className="card__title">
                            <a
                              href={"/news/" + news.link}
                              className="card__title-link"
                            >
                              {news.title}
                            </a>
                          </h3>
                        </div>
                        <div className="card__info">
                          <div className="card__info-item">
                            <a
                              href={"/news/" + news.link}
                              className="card__info-link baner__button"
                            >
                              Узнать подробнее
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className={"news__slider-buttons swiper-buttons"}>
                <button className="swiper-button-prev">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                  >
                    <path
                      d="M0.499997 7.79999L6.2 13.4C6.6 13.8 7.2 13.8 7.6 13.4C8 13 8 12.4 7.6 12L2.7 6.99999L7.6 1.99999C8 1.59999 8 0.999987 7.6 0.599988C7.4 0.399988 7.2 0.299988 6.9 0.299988C6.6 0.299988 6.4 0.399988 6.2 0.599988L0.499997 6.19999C0.099997 6.69999 0.099997 7.29999 0.499997 7.79999C0.499997 7.69999 0.499997 7.69999 0.499997 7.79999Z"
                      fill="none"
                    />
                  </svg>
                </button>
                <button className="swiper-button-next">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="8"
                    height="14"
                    viewBox="0 0 8 14"
                    fill="none"
                  >
                    <path
                      d="M0.499997 7.79999L6.2 13.4C6.6 13.8 7.2 13.8 7.6 13.4C8 13 8 12.4 7.6 12L2.7 6.99999L7.6 1.99999C8 1.59999 8 0.999987 7.6 0.599988C7.4 0.399988 7.2 0.299988 6.9 0.299988C6.6 0.299988 6.4 0.399988 6.2 0.599988L0.499997 6.19999C0.099997 6.69999 0.099997 7.29999 0.499997 7.79999C0.499997 7.69999 0.499997 7.69999 0.499997 7.79999Z"
                      fill="none"
                    />
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

export default News;
