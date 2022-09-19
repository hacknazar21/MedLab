import React from 'react';
import missionImg from '../../src/img/mission/mission.png'
import checkImg from '../../src/img/check.svg'
interface OwnProps {
    missionTitle: string,
    visionTitle: string,
    missionText: string,
    visionText: string,
    missionListTitle: string,
    missionListItems: string[],
    missionImage: string
}

type Props = OwnProps;

export function Mission (props: Props) {

    return (
        <>
            <div className="mission__box">
                <div className="mission__text-box">
                    <div className="mission__text-item text-item-mission">
                        <h2 className="text-item-mission__title">MISSION</h2>
                        <div className="text-item-mission__content">
                            <p>To contribute to the well-being of the communities we serve, by enabling medical professionals in reaching the right diagnoses through our scientific expertise, cutting edge technology coupled with people prowess and by creating opportunities for every individual to manage their own health, through our high-quality services driven by innovation and compassionate care.</p>
                        </div>
                    </div>
                    <div className="mission__text-item text-item-mission">
                        <h2 className="text-item-mission__title">VISION</h2>
                        <div className="text-item-mission__content">
                            <p>To be the most trusted and dynamic leader in diagnostic industry.</p>
                        </div>
                    </div>
                </div>
                <div className="mission__list-box">
                    <h2 className="mission__list-title">Our mission in delivering this is as follows:</h2>
                    <ul className="mission__list">
                        <li className="mission__list-item">
                            <div className="mission__list-img">
                                <img src={checkImg.src} alt=""/>
                            </div>
                            To provide accurate and precise diagnostic, prognostic and predictive testing services in a timely manner
                        </li>
                        <li className="mission__list-item">
                            <div className="mission__list-img">
                                <img src={checkImg.src} alt=""/>
                            </div>
                            To ensure that every employee is treated with dignity and respect, and in a fair, consistent and equitable manner
                        </li>
                        <li className="mission__list-item">
                            <div className="mission__list-img">
                                <img src={checkImg.src} alt=""/>
                            </div>
                            To create a stimulating, enabling and supportive work atmosphere
                        </li>
                        <li className="mission__list-item">
                            <div className="mission__list-img">
                                <img src={checkImg.src} alt=""/>
                            </div>
                            To aid and encourage employees in realizing their full potential
                        </li>
                    </ul>
                </div>
                <div className="mission__image-box">
                    <img src={missionImg.src} alt="" className="mission__image"/>
                </div>
            </div>
        </>
    );
};
