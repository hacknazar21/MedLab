import React, { FunctionComponent } from "react";
import { IPromotion } from "../../Interfaces/IPromotion";
import { IAnalys } from "../../Interfaces/IAnalys";
import { IPackage } from "../../Interfaces/IPackage";
import { ResearchCard } from "../common/ResearchCard";

interface OwnProps {
  packageItem: IPackage;
}

type Props = OwnProps;

const Package: FunctionComponent<Props> = ({ packageItem }) => {
  return (
    <>
      <section className="page__package package">
        <div className="package__container">
          <div className="research__main research-main">
            <div className="research-main__aside research-aside">
              <div className="research-aside__header">
                <h2 className="research-aside__title">
                  {packageItem.name_of_package}
                </h2>
              </div>
              <div className="research-aside__footer">
                <div className="research-aside__price research-aside__price_margin_top">
                  <p>стоимость:</p>
                  <span>{packageItem.price_of_package} тг</span>
                </div>
                <button className="research-aside__add">
                  Добавить в корзину
                </button>
              </div>
            </div>
            <div className="research-main__content-box">
              <div className="research-main__content-header">
                <button className="research-main__content-header-action border _icon-lab active">
                  Для пациентов
                </button>
              </div>
              <div className="research-main__content-main">
                <div className="research-main__content-main-item">
                  <h2 className="research-main__content-main-title">
                    Описание:
                  </h2>
                  <div className="research-main__content-main-description">
                    <p>{packageItem.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="page__package-researches package-researches single-page">
        <div className="package-researches__container">
          <div className="package-researches__box single-page-box">
            <h2 className="single-page-title">Анализы в пакете</h2>
            <div className="single-page-items single-page-items_number_4">
              {packageItem.package.map((research) => {
                return <ResearchCard research={research} />;
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Package;
