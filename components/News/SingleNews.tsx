import React, { FunctionComponent } from "react";
import { INews } from "../../Interfaces/INews";

interface OwnProps {
  news: INews;
}

type Props = OwnProps;

const SingleNews: FunctionComponent<Props> = ({ news }) => {
  return (
    <section className="page__news news single-record">
      <div className="news__container">
        <div className="news__box single-record-box">
          <time dateTime={news.date} className="single-record-time">
            {news.date}
          </time>
          <div className="news__image single-record-image">
            <img src={news.img_news} alt={news.title} />
          </div>
          <div className="news__text single-record-text">
            <p>{news.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleNews;
