import React, { useEffect, useState } from "react";
import { IAnalys } from "../../Interfaces/IAnalys";
import Filter from "./Analysis/Filter";
import { ResearchCard } from "../common/ResearchCard";
import Pagination from "../common/Pagination";
interface OwnProps {
  analysis: IAnalys[];
  pageCount: number;
  setter: Function;
}

type Props = OwnProps;

export function Catalog(props: Props) {
  const [number, setNumber] = useState(props.analysis.length);
  const callback = () => {};
  useEffect(() => {
    console.log("render");
  }, []);

  return (
    <section className="page__catalog catalog">
      <div className="catalog__container">
        <h2 className="catalog__title">Каталог анализов</h2>
        <Filter callback={callback} number={number} />
        <div className="catalog__box">
          <div className="catalog__grid">
            {props.analysis.map((research) => {
              return <ResearchCard research={research} key={research.id} />;
            })}
          </div>
          <Pagination
            pageCount={Math.ceil(props.pageCount) / 8}
            setter={(data) => {
              props.setter([...data]);
            }}
            link={"/api/front/analyse/allAnalyse?page="}
          />
        </div>
      </div>
    </section>
  );
}
