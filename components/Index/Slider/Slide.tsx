import React, { PureComponent } from 'react';
import {ISlide} from "../../../Interfaces/ISilde";
import {IAnalys} from "../../../Interfaces/IAnalys";
interface Props{
    slide: IAnalys
}
class Slide extends PureComponent<Props, string> {
  render() {
    return (
        <div className="popular-analises__slide swiper-slide">
            <div className="popular-analises__card card">
                <div className="card__img-ibg">
                    <img src={this.props.slide.image} alt="" />
                </div>
                <div className="card__text">
                    <h3 className="card__title">
                        <a href={this.props.slide.href} className="card__title-link">
                            {this.props.slide.title_long}
                        </a>
                    </h3>
                    <div className="card__desc">
                        {
                            this.props.slide.additional.split(',').map(descItem=>{
                                return(
                                    <div className="card__desc-item">{descItem}</div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="card__info">
                    <div className="card__info-item">{ this.props.slide.price } ₸ </div>
                    <div className="card__info-item">
                        <a href={this.props.slide.href} className="card__info-link baner__button">Узнать подробнее</a>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}

export default Slide;
