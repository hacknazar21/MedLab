import {Header} from "../components/Index/Header";
import FirstScreen from "../components/Index/FirstScreen";
import Banners from "../components/Index/Banners";
import Popular from "../components/Index/Popular";
import {Analysis} from "../components/Index/Analysis";
import Reviews from "../components/Index/Reviews";
import News from "../components/Index/News";
import Info from "../components/Index/Info";
import {Map} from "../components/Index/Map";
import Footer from "../components/Index/Footer";
import {IBanners} from "../Interfaces/IBanner";
import {ISlide} from "../Interfaces/ISilde";
import {INews} from "../Interfaces/INews";
import {IInfo} from "../Interfaces/IInfo";
import banner1 from '../src/img/baners/01.png';
import banner2 from '../src/img/baners/02.png';
import Microscope from "../src/img/microscope.png";
import {GetServerSideProps} from "next";
import {IReview} from "../Interfaces/IReview";
import {IAnalys} from "../Interfaces/IAnalys";
import Link from "next/link";
import {MainLayout} from "../layouts/mainLayout";
const banners:IBanners = {
    banners: [
        {
            banner: {
                title: 'Проверка симптомов Covid - 18',
                text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' +
                    ' Velit officia consequat duis enim velit mollit.',
                src: banner1.src,
                href: '',
                key: 0
            }
        },
        {
            banner: {
                title: 'Назначения правильного лечения',
                text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.' +
                    ' Velit officia consequat duis enim velit mollit.',
                src: banner2.src,
                href: '',
                key: 1
            }
        }
    ]
}
const info:IInfo = {
    buttons: [
        {
            key: 0,
            title: 'Удобство'
        },
        {
            key: 1,
            title: 'Качество'
        },
        {
            key: 2,
            title: 'Надежность'
        },
        {
            key: 3,
            title: 'Сроки'
        }
    ],
    tabs: [
        {
            key: 4,
            title: 'Лучшее оборудования для проверки',
            text: ['Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.', 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'],
            button: 'Удобство',
            footer: 'Работаем с 1988 года'
        },
        {
            key: 5,
            title: 'Лучшее оборудования для проверки',
            text: ['Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.', 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'],
            button: 'Качество',
            footer: 'Работаем с 1388 года'
        },
        {
            key: 6,
            title: 'Лучшее оборудования для проверки',
            text: ['Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.', 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'],
            button: 'Надежность',
            footer: 'Работаем с 1588 года'
        },
        {
            key: 7,
            title: 'Лучшее оборудования для проверки',
            text: ['Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.', 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.'],
            button: 'Сроки',
            footer: 'Работаем с 1688 года'
        }
    ],
    image: Microscope.src
}
export default function Index({news, reviews, analysis}) {
    return (
        <div className="wrapper">
            <MainLayout>
                <FirstScreen />
                <Banners {...banners}/>
                <Popular analysis={analysis}/>
                <section className="page__main main">
                    <div className="main__container"><Link href="/catalog" ><a className="main__button">Каталог анализов</a></Link></div>
                </section>
                <Analysis analysis={analysis.analys}/>
                <Reviews reviews={reviews}/>
                <News news={news}/>
                <Info info={info}/>
                <Map mapSrc={"https://yandex.kz/map-widget/v1/-/CCURqDxLOA"}/>
            </MainLayout>
        </div>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const response = await fetch('http://localhost:8081/api/news')
    const news:INews = await response.json() ?? []
    const responseReviews = await fetch('http://localhost:8081/api/reviews')
    const reviews:IReview[] = await responseReviews.json() ?? []
    const responseAnalysis = await fetch('http://localhost:8081/api/analysis?type=analys')
    const responseComplexAnalysis = await fetch('http://localhost:8081/api/analysis?type=complex')
    const analysis:IAnalys[] | any = await responseAnalysis.json() ?? []
    const complexAnalysis:IAnalys[] | any = await responseComplexAnalysis.json() ?? []
    return {props: {news, reviews, analysis: {complex: complexAnalysis, analys: analysis}}}
}