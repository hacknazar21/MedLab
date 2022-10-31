import React, { PureComponent, useContext, useState } from "react";
import { IAnalys } from "../../Interfaces/IAnalys";
import Link from "next/link";
import { HeaderContext } from "../../context/HeaderContext";
import { IPackage } from "../../Interfaces/IPackage";

interface Props {
  package: IPackage;
  id: number;
}
export function ResearchPackageCard(props: Props) {
  return (
    <>
      <article
        data-item-id={props.package.id}
        className="analysis-package__item analysis-package"
      >
        <div className="analysis-package__image">
          <img src="" alt="" />
        </div>
        <div className="analysis-package__number">
          Анализов: <span>{props.package.package.length}</span>
        </div>
        <a href="" className="analysis-package__title">
          <h3>{props.package.name_of_package}</h3>
        </a>
        <div className="analysis-package__date">
          <span>2 — 4 дня</span>
        </div>
        <div className="analysis-package__actions">
          <div className="analysis-package__price">
            <p>{props.package.price_of_package} тг</p>
          </div>
          <a href={""} className="analysis-package__more more-card">
            Подробнее
          </a>
        </div>
      </article>
    </>
  );
}
