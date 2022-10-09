import React, { PureComponent } from "react";
import { IAnalys } from "../../../Interfaces/IAnalys";
import Link from "next/link";

interface Props {
  research: IAnalys;
}
class Slide extends PureComponent<Props, string> {
  render() {
    return (
      <div className="popular-analises__slide swiper-slide">
        <div className="popular-analises__card card">
          <div className="card__img-ibg">
            <img src={this.props.research.main_img} alt="" />
          </div>
          <div className="card__text">
            <h3 className="card__title">
              <Link
                href={`/analysis/[id]`}
                as={`/analysis/${this.props.research.id}`}
              >
                <a className="card__title-link">
                  {this.props.research.long_title}
                </a>
              </Link>
            </h3>
            <div className="card__desc">
              {this.props.research?.additional?.split(",").map((descItem) => {
                return <div className="card__desc-item">{descItem}</div>;
              })}
            </div>
          </div>
          <div className="card__info">
            <div className="card__info-item">
              {this.props.research.price} ₸{" "}
            </div>
            <div className="card__info-item">
              <Link
                href={`/analysis/[id]`}
                as={`/analysis/${this.props.research.id}`}
              >
                <a className="card__info-link baner__button">
                  Узнать подробнее
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Slide;
