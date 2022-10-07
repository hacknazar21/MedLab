import React from 'react';
import Head from "next/head";
import {MainLayout} from "../../../layouts/mainLayout";
import {Sugar} from "../../../layouts/sugarLayout";


interface Props{

}
export default function AnalysisOne (props: Props){

    return (
        <>
            <Head>
                <title>Пакеты анализов</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="wrapper another">
                <MainLayout>
                    <Sugar sugar={[{title: 'Главная', href: '/'}, {title: 'Пакеты анализов', href: ''}]}/>
                    <main className='page analysis-packages'>
                        <div className="analysis-packages__container">
                            <div className="analysis-packages__box">
                            <h1 className="analysis-packages__title">Пакеты анализов</h1>
                            <div className="analysis-packages__items">
                                <div className="analysis-packages__item analysis-package">
                                    <a href='' className="analysis-package__image">
                                        <img src="" alt=""/>
                                    </a>
                                    <div className="analysis-package__name">Исследование 1</div>
                                    <a href='' className="analysis-package__title">
                                        Клинический анализ крови: общий анализ, лейкоформула, СОЭ (с микроскопией мазка крови при наличии патологических сдвигов)
                                    </a>
                                    <div className="analysis-package__footer">
                                        <div className="analysis-package__price">5 000 тг</div>
                                        <a href='' className="analysis-package__more">Узнать подробнее</a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </main>
                </MainLayout>
            </div>
        </>
    );
}

export async function getServerSideProps(context) {
    const id = context.query.id;
    let oneAnalysis = {}
    try{
        const responseOneAnalysis = await fetch(`http://195.49.215.130:8081/analysis/${id}`)
        oneAnalysis = await responseOneAnalysis.json()
    }catch (e) {
        console.log(e.message)
    }
    return { props: { oneAnalysis } }
}
