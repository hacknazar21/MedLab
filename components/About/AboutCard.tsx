import React from 'react';

interface OwnProps {
    title: string,
    content: string[],
    imageSrc: string,
    direction: string
}

type Props = OwnProps;

export function AboutCard (props: Props) {

    return (
        <div className={"about-card " + props.direction}>
            <div className="about-card__content">
                <h2 className="about-card__title">{props.title}</h2>
                <div className="about-card__text">
                    {props.content.map(value=> <p>{value}</p>)}
                </div>
            </div>
            <div className="about-card__image">
                <img src={props.imageSrc} alt=""/>
            </div>
        </div>
    );
};
