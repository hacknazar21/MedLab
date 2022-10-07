import React from "react"
import Link from "next/link";
interface Props {
    sugar: {
        'title': string,
        'href': string
    }[]
}
export function Sugar(props: Props){
        return (
            <section className='sugar'>
                <div className="sugar__container">
                    <div className="sugar__items">
                        {props.sugar.map((sugarItem, id)=>{
                            if(sugarItem.href !== ''){
                                return (
                                    <React.Fragment key={id}>
                                    <div className='sugar__item'><Link href={sugarItem.href}><a>{sugarItem.title}</a></Link></div><span>/</span>
                                    </React.Fragment>
                                )
                            }
                            return (
                                    <div key={id} className='sugar__item'><Link href={sugarItem.href}><a>{sugarItem.title}</a></Link></div>
                            )
                        })}
                    </div>
                </div>
            </section>
        )
}
