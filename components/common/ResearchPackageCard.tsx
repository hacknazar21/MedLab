import React from "react";
import { IPackage } from "../../Interfaces/IPackage";
import Link from "next/link";

interface Props {
  package: IPackage;
}
export function ResearchPackageCard(props: Props) {
  return (
    <>
      <article
        data-item-id={props.package.id}
        className="analysis-package__item analysis-package"
      >
        <div className="analysis-package__image">
          <img src={props.package.main_img} alt="" />
        </div>
        <div className="analysis-package__number">
          Анализов: <span>{props.package.package.length}</span>
        </div>
        <h3 className="analysis-package__title">
          <Link href={"/researches/packages/" + props.package.link}>
            <a>{props.package.name_of_package}</a>
          </Link>
        </h3>
        <div className="analysis-package__date">
          <span>2 — 4 дня</span>
        </div>
        <div className="analysis-package__actions">
          <div className="analysis-package__price">
            <p>{props.package.price_of_package} тг</p>
          </div>
          <Link href={"/researches/packages/" + props.package.link}>
            <a className="analysis-package__more more-card">Подробнее</a>
          </Link>
        </div>
      </article>
    </>
  );
}
