import Link from "next/link";
import React, { FunctionComponent } from "react";
import { IPromotion } from "../../Interfaces/IPromotion";

interface OwnProps {
  promotion: IPromotion;
}

type Props = OwnProps;

const PromotionCard: FunctionComponent<Props> = (props) => {
  return (
    <article className="promotion-card">
      <div className="promotion-card__image">
        <img src={props.promotion.image} alt="" />
      </div>
      <h3 className="promotion-card__title">
        <Link href={"/promotions/" + props.promotion.link}>
          <a>
            Клинический анализ крови: общий анализ, лейкоформула, СОЭ (с
            микроскопией мазка крови при наличии патологических сдвигов)
          </a>
        </Link>
      </h3>
      <Link href={"/promotions/" + props.promotion.link}>
        <a className="promotion-card__more more-card">Подробнее</a>
      </Link>
    </article>
  );
};
export default PromotionCard;
