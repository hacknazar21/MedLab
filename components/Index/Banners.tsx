import React, {PureComponent} from 'react';
import Banner from "./Banners/Banner";
import {IBanners, IBanner} from "../../Interfaces/IBanner";

class Banners extends React.Component<IBanners, any> {
  render() {
    return (
        <section className="page__baners baners">
            <div className="baners__container">
                <div className="baners__box baners">
                    {
                        this.props.banners.map(banner=>{
                            return(
                                <Banner {...banner}/>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    );
  }
}

export default Banners;
