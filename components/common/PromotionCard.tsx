import Link from "next/link";
import React, { FunctionComponent } from "react";

interface OwnProps {}

type Props = OwnProps;

const PromotionCard: FunctionComponent<Props> = (props) => {
  return (
    <article className="promotion-card">
      <div className="promotion-card__image">
        <img src="" alt="" />
      </div>
      <h3 className="promotion-card__title">
        <a href="">
          Клинический анализ крови: общий анализ, лейкоформула, СОЭ (с
          микроскопией мазка крови при наличии патологических сдвигов)
        </a>
      </h3>
      <a href="" className="promotion-card__more more-card">
        Подробнее
      </a>
    </article>
  );
};
export default PromotionCard;
