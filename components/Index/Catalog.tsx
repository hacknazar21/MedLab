import React, { useContext, useEffect, useState } from "react";
import { IAnalys } from "../../Interfaces/IAnalys";
import { Analys } from "./Analysis/Analys";
import Filter from "./Analysis/Filter";
import { HeaderContext } from "../../context/HeaderContext";
import { ResearchCard } from "../common/ResearchCard";
interface OwnProps {
  analysis: IAnalys[];
}

type Props = OwnProps;

export function Catalog(props: Props) {
  const [number, setNumber] = useState(props.analysis.length);

  const callback = (data: any) => {
    // запрос на бэк
  };

  return (
    <section className="page__catalog catalog">
      <div className="catalog__container">
        <h2 className="catalog__title">Каталог анализов</h2>
        <Filter callback={callback} number={number} />
        <div className="catalog__box">
          <div className="catalog__grid">
            {props.analysis.map((research, id) => {
              return <ResearchCard research={research} id={id} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
