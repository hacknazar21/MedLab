import * as React from "react";
import { IAnalys } from "../../Interfaces/IAnalys";
import Analys from "../Index/Analysis/Analys";
import { useEffect } from "react";
import Select from "../Index/Select";
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
  function handleInputChange(event: any) {
    const target = event.target;
    const value =
      target.type === "checkbox"
        ? target.checked
          ? target.value
          : null
        : target.value || target.dataset.value;
    const name = target.name || target.dataset.name;
    this.setState(
      (state: any) => {
        return { [name]: value };
      },
      () => {
        this.props.callback(this.state);
      }
    );
  }
  return (
    <section className="page__catalog catalog">
      <div className="catalog__container">
        <div className="catalog__filter-container"></div>
        <div className="catalog__items-container">
          <div className="catalog__items">
            {props.researches.map((research) => {
              return (
                <Analys research={research} buttonClick={onResearchClick} />
              );
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
    </section>
  );
}
