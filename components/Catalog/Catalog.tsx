import * as React from "react";
import { IAnalys } from "../../Interfaces/IAnalys";
import Analys from "../Index/Analysis/Analys";
import { useEffect, useState } from "react";
import Select from "../Index/Select";
import { ResearchCard } from "../common/ResearchCard";
import Pagination from "../common/Pagination";
import Filter from "../common/Filter";
interface Props {
  researches: {
    results: IAnalys[];
  };
  pageCount: number;
  setter: Function;
}
export function Catalog(props: Props) {
  const [filterUrl, setFilterUrl] = useState(
    "/api/front/analyse/allAnalyse?smt=hhp"
  );
  return (
    <section className="page__catalog catalog single-page">
      <div className="catalog__container">
        <div className="catalog__filter-container">
          <Filter setter={props.setter} setFilterUrl={setFilterUrl} />
        </div>
        <div className="catalog__items-container">
          <div className="catalog__box single-page-box">
            <div className="catalog__items single-page-items single-page-items_number_4">
              {props.researches.results.map((research) => {
                return <ResearchCard key={research.id} research={research} />;
              })}
            </div>
            {!props.researches?.results.length
              ? "Ничего не найдено, попробуйте изменить запрос"
              : ""}
            <Pagination
              pageCount={Math.ceil(props.pageCount) / 8}
              setter={(data) => {
                props.setter({ ...data });
              }}
              link={filterUrl + "&page="}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
