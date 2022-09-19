import React, { PureComponent } from 'react';
// @ts-ignore
import {IAnalys} from "../../Interfaces/IAnalys";
// @ts-ignore
import Link from "next/link";

interface Props{
  analys: IAnalys,
  buttonClick: (event:any)=>void
}
export function Analys (props: Props){
    return (
        <>
            {
                !props.analys.hidden &&
                <Link href={`/analysis/[id]`} as={`/analysis/${props.analys.id}`}>
                  <a data-item-id={props.analys.id} className="analysis__item analysis-item">
                      <h3 className="analysis-item__title">{props.analys.title}</h3>
                      <div className="analysis-item__info-box">
                          <div className="analysis-item__info _icon-clock">{props.analys.date}</div>
                          <div className="analysis-item__info _icon-blood">{props.analys.type}</div>
                      </div>
                      <div className="analysis-item__price-box">
                          <div className="analysis-item__price-id">{props.analys.code}</div>
                          <div className="analysis-item__price-value">{props.analys.price} ₸</div>
                      </div>
                      <button onClick={props.buttonClick} className="analysis-item__add"></button>
                  </a>
                </Link>
            }
      </>
    );
}

export default Analys;
