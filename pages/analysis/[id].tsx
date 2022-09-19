import React from 'react';
import {IAnalys} from "../../Interfaces/IAnalys";

interface Props{
    oneAnalysis: IAnalys
}
export default function AnalysisOne (props: Props){

    return (
        <>
            {
                <div className="analysis__item analysis-item">
                    {JSON.stringify(props.oneAnalysis)}
                </div>
            }
        </>
    );
}

export async function getServerSideProps(context) {
    const id = context.query.id;
    let oneAnalysis = {}
    try{
        const responseOneAnalysis = await fetch(`http://localhost:8082/api/analysis?id=${id}`)
        oneAnalysis = await responseOneAnalysis.json()
    }catch (e) {
        console.log(e.message)
    }

    return { props: { oneAnalysis } }
}
