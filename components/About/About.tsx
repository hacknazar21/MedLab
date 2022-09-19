import React, {useEffect, useState} from 'react';
import {AboutCard} from "./AboutCard";
import {Mission} from "./Mission";
import {Sponsors} from "./Sponsors";

interface OwnProps {

}

type Props = OwnProps;

export function About (props: Props) {
    const textContent = 'Instituted in 1995, SRL is India’s largest chain of diagnostic laboratories by geographic presence and the only lab in India with a pan-India presence. Our network of labs and patient service centres can be found in 34 states and union territories. Our network consists of 428 laboratories, 1500+ patient service centres and 5000+ institutional touch points across the country. SRL also has labs in Dubai, Afghanistan and Nepal.\n With 46 NABL and 1 CAP accredited labs’ across our country-wide network, the SRL group has built a strong legacy of quality and has earned the trust of patients, doctors and hospitals. The NABL Accreditation (National Accreditation Board for Testing & Calibration) is the only laboratory accreditation constituted to labs by the Department of Science & Technology run by the Government of India. SRL has two global reference laboratories in Mumbai and Gurgaon and two regional reference laboratories located in Bangalore and Kolkata.'

    return (
        <>
            <section className='page__about about-page'>
                <div className="about-page__container">
                    <AboutCard title={'SRL Diagnostics has the largest network of labs and the only lab to have a pan-India presence'} content={textContent.split('\n')} imageSrc={'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'} direction={'normal'}/>
                    <AboutCard title={'SRL Diagnostics has 428 networking laboratories including'} content={textContent.split('\n')} imageSrc={'https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'} direction={'reverse'}/>
                </div>
            </section>
            <section className='page__mission mission-page'>
                <div className="mission-page__container">
                    <Mission missionTitle={''} visionTitle={''} missionText={''} visionText={''} missionListTitle={''} missionListItems={['']} missionImage={''}/>
                </div>
            </section>
            <section className='page__sponsors sponsors-page'>
                <div className="sponsors-page__container">
                    <Sponsors />
                </div>
            </section>
        </>
    );
};
