import React, { FunctionComponent } from "react";
import PromotionCard from "../common/PromotionCard";

interface OwnProps {}

type Props = OwnProps;

const Promotion: FunctionComponent<Props> = (props) => {
  return (
    <section className="page__promotion promotion">
      <div className="promotion__container promotion__container_grid">
        <PromotionCard />
        <PromotionCard />
      </div>
    </section>
  );
};

export default Promotion;
