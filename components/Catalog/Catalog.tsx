import * as React from "react";
import { IAnalys } from "../../Interfaces/IAnalys";
import Analys from "../Index/Analysis/Analys";
import { useEffect } from "react";
import Select from "../Index/Select";
import { ResearchCard } from "../common/ResearchCard";
interface Props {
  researches: IAnalys[];
}
export function Catalog(props: Props) {
  function onResearchClick(event) {
    console.log(event);
  }

  useEffect(() => {
    console.log(props.researches);
  }, []);

  return (
    <section className="page__catalog catalog single-page">
      <div className="catalog__container">
        <div className="catalog__filter-container"></div>
        <div className="catalog__items-container">
          <div className="catalog__box single-page-box">
            <div className="catalog__items single-page-items single-page-items_number_4">
              {props.researches.map((research) => {
                return <ResearchCard research={research} />;
              })}
            </div>
            {!props.researches?.length ? (
              <p className={"no-found"}>
                :(
                <br />
                <br />
                Ничего не найдено, попробуйте изменить запрос
              </p>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </section>
  );
}