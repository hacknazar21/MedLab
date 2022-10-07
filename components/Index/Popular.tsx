import React from 'react';
import { ISlider } from '../../Interfaces/ISlider';
import Slider from "./Slider";
import {IAnalys} from "../../Interfaces/IAnalys";

interface OwnProps {
    analysis: IAnalys[]
}

type Props = OwnProps;

const sliders:ISlider[] = [
        {
            key: 1124,
            tab: 'Анализы',
            className: 'popular-analises',
            slides: [],
            hidden: false
        },
        {
            key: 32532,
            tab: 'Комплексы анализов',
            className: 'popular-analises',
            slides: [],
            hidden: true
        }
]


class Popular extends React.Component<Props, any> {

    constructor(props:Props) {
        super(props);

        this.state = {
            sliders: sliders
        }
    }
    componentWillMount() {
        this.setState((state: any)=>{
            state.sliders[0].slides = []
            state.sliders[1].slides = []
            for (const analysis of this.props.analysis) {
                if(analysis.is_complex) state.sliders[1].slides.push(analysis)
                else state.sliders[0].slides.push(analysis)
            }
            return {sliders: state.sliders}
        })
    }

    buttonClickHandler = (event:any) => {
        this.setState((state:any) => {
           return {
               sliders: state.sliders.map(
                   (slider:ISlider) => {
                       if(event.target.innerText !== slider.tab)  slider.hidden = true
                       else slider.hidden = false
                       return slider
                   })
           }
        })
        event.target.parentElement.querySelector('.active').classList.remove('active')
        event.target.classList.add('active')
    }
    componentDidUpdate() {
    }

    render() {
    return (
        <section className="page__popular-analises popular-analises">
            <div className="popular-analises__container">
                <div data-tabs className="popular-analises__box">
                    <div className="popular-analises__header">
                        <h2 className="popular-analises__title section-title">Популярные анализы</h2>
                        <div className="popular-analises__mobile"></div>
                        <div data-da=".popular-analises__mobile-types, 990" className="popular-analises__types">
                            <button onClick={this.buttonClickHandler} className="popular-analises__type active">
                                Анализы
                            </button>
                            <button onClick={this.buttonClickHandler} className="popular-analises__type">
                                Комплексы анализов
                            </button>
                        </div>
                    </div>
                    {
                        this.state.sliders.map((slider:ISlider)=>{ return <Slider slider={slider}/>})
                    }
                </div>
            </div>
        </section>
    );
  }
}

export default Popular;
