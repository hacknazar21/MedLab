import Link from "next/link";
import React, { FunctionComponent } from "react";
import { IReview } from "../../Interfaces/IReview";
import Rating from "react-rating";

interface OwnProps {
  review: IReview;
}

type Props = OwnProps;

const ReviewCard: FunctionComponent<Props> = ({ review }) => {
  return (
    <article className="reviews__card reviews-card">
      <div className="reviews-card__header">
        <div className="reviews-card__info-box">
          <div className="reviews-card__info-name">{review.name}</div>
          <div className="reviews-card__info-date">{review.date}</div>
        </div>
      </div>
      <div className="reviews-card__rating">
        <div className="reviews-card__rating-value">{review.ratings}/5</div>
        <Rating
          initialRating={review.ratings}
          readonly={true}
          emptySymbol={"rating-item"}
          fullSymbol={"rating-item-fill"}
        />
      </div>
      <div className="reviews-card__text">
        <p>{review.text_review}</p>
      </div>
    </article>
  );
};
export default ReviewCard;
