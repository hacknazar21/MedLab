import React, { FunctionComponent } from "react";
import PromotionCard from "../common/PromotionCard";
import { IReview } from "../../Interfaces/IReview";
import ReviewCard from "../common/ReviewCard";
import Pagination from "../common/Pagination";

interface OwnProps {
  reviews: IReview[];
  pageCount: number;
  setter: Function;
}

type Props = OwnProps;

const Promotions: FunctionComponent<Props> = ({
  reviews,
  setter,
  pageCount,
}) => {
  return (
    <section className="page__promotions promotions single-page">
      <div className="promotions__container">
        <div className="promotions__box single-page-box">
          <div className="promotions__items single-page-items single-page-items_number_2">
            {reviews?.map((review: IReview) => {
              return <ReviewCard key={review.id} review={review} />;
            })}
          </div>
          <Pagination
            pageCount={Math.ceil(pageCount) / 8}
            setter={(data) => {
              setter([...data]);
            }}
            link={"/api/front/review/allReviews?page="}
          />
        </div>
      </div>
    </section>
  );
};

export default Promotions;
