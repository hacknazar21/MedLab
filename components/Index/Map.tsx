import * as React from 'react';

interface Props {
    mapSrc: string
}

export function Map(props: Props) {
    return (
        <section className="page__map map">
            <div className="map__container">
                <div className="map__item">
                    <iframe src={props.mapSrc} allowFullScreen = {true} style={{position: "relative"}}></iframe>
                </div>
            </div>
        </section>
    );
};