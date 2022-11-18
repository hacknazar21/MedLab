import React, { FunctionComponent } from "react";
import PromotionCard from "../common/PromotionCard";
import { INews } from "../../Interfaces/INews";
import NewsCard from "../common/NewsCard";

interface OwnProps {
  news: INews[];
}

type Props = OwnProps;

const News: FunctionComponent<Props> = (props) => {
  return (
    <section className="page__news news single-page">
      <div className="news__container">
        <div className="news__box single-page-box">
          <div className="news__items single-page-items single-page-items_number_4">
            {props.news?.map((news: INews) => {
              return <NewsCard key={news.id} news={news} />;
            })}
          </div>
          <div className="news__pagination single-page-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default News;
