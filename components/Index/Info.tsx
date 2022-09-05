import React, {Component, createRef, EventHandler, RefObject} from 'react';
import {IInfo} from "../Interfaces/IInfo";

interface Props {
    info: IInfo
}
class Info extends React.Component<Props, any> {
    constructor(props:Props) {
        super(props);
        this.state = {
            currentActive: null
        }
    }
    componentDidMount() {
        this.setState({currentActive: this.buttons[0]}, ()=>{
            this.state.currentActive?.classList.add('active')
        })
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<any>, snapshot?: any) {
        prevState.currentActive?.classList.remove('active')
    }

    clickHandler(event: any){
        this.setState({currentActive: event.target}, ()=>{
            this.state.currentActive?.classList.add('active')
        })
    }
    buttons:Array<any> = []

    render() {
        return (
            <section className="page__info info">
                <div className="info__container">
                    <div className="info__box">
                        <div className="info__main">
                            <div className="info__tabs-buttons">
                                {this.props.info.buttons.map(({key, title})=>{
                                    return(
                                        <button
                                            key={key}
                                            className="info__tabs-button"
                                            ref={(element)=>{this.buttons.push(element)}}
                                            onClick={this.clickHandler.bind(this)}
                                        >{title}</button>
                                    )
                                })}
                            </div>
                            {this.props.info.tabs.map((tab)=>{
                                return(
                                    <>
                                        {
                                            this.state.currentActive?.innerText === tab.button &&
                                            <div key={tab.key} className="info__text active">
                                                <div className="info__text-title">{tab.title}</div>
                                                <div className="info__text-subtitle">
                                                    {tab.text.map((paragraph: string) => {
                                                        return (
                                                            <p>{paragraph}</p>
                                                        )
                                                    })}
                                                </div>
                                                <div className="info__text-footer">{tab.footer}</div>
                                            </div>
                                        }
                                    </>
                                )
                            })}
                        </div>
                        <div className="info__image active">
                            <img src={this.props.info.image} alt="" />
                        </div>
                        {
                            this.props.info.buttons.map(({key, title})=>{
                                return(
                                    <>
                                        {
                                            this.state.currentActive?.innerText === title &&
                                            <div key={key} data-tab={title} className="info__name active">
                                                {title}
                                                <span></span>
                                            </div>
                                        }
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default Info;