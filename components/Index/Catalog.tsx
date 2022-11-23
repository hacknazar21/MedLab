import React, { useEffect, useState } from "react";
import { IAnalys } from "../../Interfaces/IAnalys";
import { ResearchCard } from "../common/ResearchCard";
import Pagination from "../common/Pagination";
import Filter from "../common/Filter";
interface OwnProps {
  analysis: {
    results: IAnalys[];
  };
  pageCount: number;
  setter: Function;
}

type Props = OwnProps;

export function Catalog(props: Props) {
  const [filterUrl, setFilterUrl] = useState(
    "/api/front/analyse/allAnalyse?smt=hhp"
  );
  return (
    <section className="page__catalog catalog">
      <div className="catalog__container">
        <h2 className="catalog__title">Каталог анализов</h2>
        <Filter setFilterUrl={setFilterUrl} setter={props.setter} />
        <div className="catalog__box">
          <div className="catalog__grid">
            {props.analysis.results?.map((research: IAnalys) => {
              return <ResearchCard research={research} key={research.id} />;
            })}
            {props.analysis.results?.length === 0 &&
              "Ничего не найдено, попробуйте изменить запрос"}
          </div>
          <Pagination
            pageCount={Math.ceil(props.pageCount) / 8}
            setter={(data) => {
              props.setter({ ...data });
            }}
            link={filterUrl + "&page="}
          />
        </div>
      </div>
    </section>
  );
}
