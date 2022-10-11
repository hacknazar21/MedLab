import React, { useEffect, useRef, useState } from "react";
import Swiper, { Autoplay } from "swiper";
import { IAnalys } from "../../Interfaces/IAnalys";

interface OwnProps {
  research: IAnalys;
}

type Props = OwnProps;

export default function ResearchMain(props: Props) {
  return (
    <div className="research__main research-main">
      <div data-item-id={1} className="research-main__aside research-aside">
        <div className="research-aside__header">
          <h2 className="research-aside__title">{props.research.long_title}</h2>
          <div className="research-aside__subtitile">
            <p>{props.research.title}</p>
          </div>
        </div>
        <div className="research-aside__content">
          <div className="research-aside__info-items">
            <div className="research-aside__info-item">
              исследование: <span>{props.research.research_id}</span>
            </div>
            <div className="research-aside__info-item">
              срок исследования: <span>{props.research.research_time}</span>
            </div>
            <div className="research-aside__info-item">
              биоматериал: <span>{props.research.biomaterial}</span>
            </div>
          </div>
          <div className="research-aside__info-scalable-img">
            <img src={props.research.document_img} alt="" />
          </div>
        </div>
        <div className="research-aside__footer">
          <div className="research-aside__price">
            <p>стоимость:</p>
            <span>{props.research.price} тг</span>
          </div>
          <button className="research-aside__add">Добавить в корзину</button>
        </div>
      </div>
      <div className="research-main__content-box">
        <div className="research-main__content-header">
          <button className="research-main__content-header-action _icon-lab active">
            Для пациентов
          </button>
          {props.research.is_unique ? (
            <button className="research-main__content-header-action _icon-lab">
              Для врачей
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="research-main__content-main">
          <div className="research-main__content-main-item">
            <h2 className="research-main__content-main-title">Описание:</h2>
            <div className="research-main__content-main-description">
              <p>{props.research.description_patient}</p>
            </div>
          </div>
          <div className="research-main__content-main-item">
            <h2 className="research-main__content-main-title">
              Подготовка к анализу:
            </h2>
            <div className="research-main__content-main-description">
              <p>{props.research.preparation_patient}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
