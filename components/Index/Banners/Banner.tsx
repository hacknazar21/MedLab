import React, { PureComponent } from 'react';
// @ts-ignore
import {IBanner} from "../../Interfaces/IBanner";


class Banner extends PureComponent<IBanner>{
  render() {
    return (
        <div key={this.props.banner.key} className="baners__baner baner">
            <div className="baner__text">
                <div className="baner__title">{this.props.banner.title}</div>
                <div className="baner__subtitle">
                    {this.props.banner.text}
                </div>
                <a href={this.props.banner.href} className="baner__button">Записаться на прием</a>
            </div>
            <div className="baner__image">
                <img src={this.props.banner.src} alt="" />
            </div>
        </div>
    );
  }
}

export default Banner;
