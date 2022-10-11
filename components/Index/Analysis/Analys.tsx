import React, { PureComponent } from "react";
import { IAnalys } from "../../Interfaces/IAnalys";
import Link from "next/link";

interface Props {
  research: IAnalys;
  buttonClick: (event: any) => void;
}
export function Analys(props: Props) {
  return (
    <>
      {!props.research.hidden && (
        <div
          data-item-id={props.research.id}
          className="analysis__item analysis-item"
        >
          <Link href={`/analysis/[id]`} as={`/analysis/${props.research.link}`}>
            <a href="">
              <h3 className="analysis-item__title">{props.research.title}</h3>
            </a>
          </Link>
          <div className="analysis-item__info-box">
            <div className="analysis-item__info _icon-clock">
              {props.research.research_time}
            </div>
            <div className="analysis-item__info _icon-blood">
              {props.research.biomaterial}
            </div>
          </div>
          <div className="analysis-item__price-box">
            <div className="analysis-item__price-id">
              {props.research.research_id}
            </div>
            <div className="analysis-item__price-value">
              {props.research.price} ₸
            </div>
          </div>
          <button
            onClick={props.buttonClick}
            className="analysis-item__add"
          ></button>
        </div>
      )}
    </>
  );
}

export default Analys;
