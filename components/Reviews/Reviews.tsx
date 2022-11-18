import React, { FunctionComponent } from "react";
import PromotionCard from "../common/PromotionCard";
import { IReview } from "../../Interfaces/IReview";
import ReviewCard from "../common/ReviewCard";

interface OwnProps {
  reviews: IReview[];
}

type Props = OwnProps;

const Promotions: FunctionComponent<Props> = ({ reviews }) => {
  return (
    <section className="page__promotions promotions single-page">
      <div className="promotions__container">
        <div className="promotions__box single-page-box">
          <div className="promotions__items single-page-items single-page-items_number_2">
            {reviews?.map((review: IReview) => {
              return <ReviewCard key={review.id} review={review} />;
            })}
          </div>
          <div className="promotions__pagination single-page-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
