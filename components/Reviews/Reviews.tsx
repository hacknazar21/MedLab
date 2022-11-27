import React, { FunctionComponent, useEffect, useState } from "react";
import PromotionCard from "../common/PromotionCard";
import { IReview } from "../../Interfaces/IReview";
import ReviewCard from "../common/ReviewCard";
import Pagination from "../common/Pagination";
import Popup from "../common/Popup";
import Rating from "react-rating";
import useForm from "../../hooks/hooks.form";
import { Loading } from "../Loading";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const [openModal, setOpenModal] = useState(false);
  const { formSubmitHandler, formChangeHandler, form, loading } = useForm(
    onSubmitHandler,
    {
      text: {
        date:
          new Date().getDate() +
          "/" +
          (new Date().getMonth() + 1) +
          "/" +
          new Date().getFullYear(),
      },
    }
  );
  function onSubmitHandler(data) {
    router.reload();
  }
  return (
    <section className="page__reviews reviews single-page">
      <div className="reviews__container">
        <div className="reviews__box single-page-box">
          <button
            onClick={() => {
              setOpenModal(true);
            }}
            className="reviews__button add-button"
          >
            оставить свой отзыв
          </button>
          <div className="reviews__items single-page-items single-page-items_number_2">
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
          <Popup active={openModal} setActive={setOpenModal}>
            <form
              action="/api/front/review/allReviews/"
              method={"POST"}
              data-method={"POST"}
              className="form review__form"
              onSubmit={formSubmitHandler}
            >
              <h2 className="form-title review__form-title">Оставить отзыв</h2>
              <div className="input-box review__input-box">
                <label htmlFor="name" className="label review__label">
                  Имя пользователя
                </label>
                <input
                  type="text"
                  onInput={formChangeHandler}
                  required={true}
                  placeholder="Введите имя"
                  name="name"
                  id="name"
                  className="input review__input"
                />
              </div>
              <div className="input-box review__input-box">
                <label htmlFor="name" className="label review__label">
                  Оценка
                </label>
                <Rating
                  emptySymbol={"rating-item rating-item_size_big"}
                  initialRating={form?.text?.ratings || 0}
                  onChange={(value) => {
                    formChangeHandler({
                      target: {
                        name: "ratings",
                        type: "text",
                        value,
                      },
                    });
                  }}
                  fullSymbol={"rating-item-fill rating-item-fill_size_big"}
                />
              </div>
              <div className="input-box review__input-box">
                <label htmlFor="name" className="label review__label">
                  Комментарий
                </label>
                <input
                  type="textarea"
                  onInput={formChangeHandler}
                  required={true}
                  id="name"
                  placeholder="Начните писать"
                  name="text_review"
                  className="input input_type_textarea review__input"
                />
              </div>
              <div className="input-box review__input-box">
                <button type="submit" className="submit review__submit">
                  Оставить отзыв
                  {loading && <Loading />}
                </button>
              </div>
            </form>
          </Popup>
        </div>
      </div>
    </section>
  );
};

export default Promotions;
