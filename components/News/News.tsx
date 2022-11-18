import React, { FunctionComponent } from "react";
import PromotionCard from "../common/PromotionCard";
import { INews } from "../../Interfaces/INews";
import NewsCard from "../common/NewsCard";
import Pagination from "../common/Pagination";

interface OwnProps {
  news: INews[];
  pageCount: number;
  setter: Function;
}

type Props = OwnProps;

const News: FunctionComponent<Props> = ({ news, setter, pageCount }) => {
  return (
    <section className="page__news news single-page">
      <div className="news__container">
        <div className="news__box single-page-box">
          <div className="news__items single-page-items single-page-items_number_4">
            {news?.map((news: INews) => {
              return <NewsCard key={news.id} news={news} />;
            })}
          </div>
          <Pagination
            pageCount={Math.ceil(pageCount) / 8}
            setter={(data) => {
              setter([...data]);
            }}
            link={"/api/front/news/allNews?page="}
          />
        </div>
      </div>
    </section>
  );
};

export default News;
