import Link from "next/link";
import React, { FunctionComponent } from "react";
import { INews } from "../../Interfaces/INews";

interface OwnProps {
  news: INews;
}

type Props = OwnProps;

const NewsCard: FunctionComponent<Props> = ({ news }) => {
  return (
    <article className="news__slide swiper-slide">
      <div className="news__card card">
        <div className="card__img-ibg">
          <img src={news.img_news} alt="" />
        </div>
        <div className="card__text">
          <div className="card__desc">
            <div className="card__desc-item">{news.date}</div>
          </div>
          <h3 className="card__title">
            <Link href={"/news/" + news.link}>
              <a className="card__title-link">{news.title}</a>
            </Link>
          </h3>
        </div>
        <div className="card__info">
          <div className="card__info-item">
            <Link href={"/news/" + news.link}>
              <a className="card__info-link baner__button">Узнать подробнее</a>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};
export default NewsCard;
