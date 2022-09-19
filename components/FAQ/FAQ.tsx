import * as React from 'react';
import Spoiler from "../Spoiler";
import FAQ_img from '../../src/img/faq/faq.png'
interface Props {

}


export function FAQ(props: Props) {


    return (
        <section className='page__faq faq'>
            <div className="faq__container">
                <div className="faq__spoilers">
                    <Spoiler className={'faq__spoiler'} title={'Вопрос номер 1'} content={['We fully realize that quality and accurate diagnosis is an important part of a patient’s healthcare journey and therefore customer centricity is one of our utmost priority. Right from offering a comfortable phlebotomy experience and ensuring the highest quality and accuracy of reports, our teams are aligned to always walk the extra mile for patients. Our best in class information, technology & security systems aids us to offer the best turn-around times and a seamless experience for all our patients and customers.']}/>
                    <Spoiler className={'faq__spoiler'} title={'Вопрос номер 2'} content={['We fully realize that quality and accurate diagnosis is an important part of a patient’s healthcare journey and therefore customer centricity is one of our utmost priority. Right from offering a comfortable phlebotomy experience and ensuring the highest quality and accuracy of reports, our teams are aligned to always walk the extra mile for patients. Our best in class information, technology & security systems aids us to offer the best turn-around times and a seamless experience for all our patients and customers.']}/>
                    <Spoiler className={'faq__spoiler'} title={'Вопрос номер 3'} content={['We fully realize that quality and accurate diagnosis is an important part of a patient’s healthcare journey and therefore customer centricity is one of our utmost priority. Right from offering a comfortable phlebotomy experience and ensuring the highest quality and accuracy of reports, our teams are aligned to always walk the extra mile for patients. Our best in class information, technology & security systems aids us to offer the best turn-around times and a seamless experience for all our patients and customers.']}/>
                    <Spoiler className={'faq__spoiler'} title={'Вопрос номер 4'} content={['We fully realize that quality and accurate diagnosis is an important part of a patient’s healthcare journey and therefore customer centricity is one of our utmost priority. Right from offering a comfortable phlebotomy experience and ensuring the highest quality and accuracy of reports, our teams are aligned to always walk the extra mile for patients. Our best in class information, technology & security systems aids us to offer the best turn-around times and a seamless experience for all our patients and customers.']}/>
                    <Spoiler className={'faq__spoiler'} title={'Вопрос номер 5'} content={['We fully realize that quality and accurate diagnosis is an important part of a patient’s healthcare journey and therefore customer centricity is one of our utmost priority. Right from offering a comfortable phlebotomy experience and ensuring the highest quality and accuracy of reports, our teams are aligned to always walk the extra mile for patients. Our best in class information, technology & security systems aids us to offer the best turn-around times and a seamless experience for all our patients and customers.']}/>
                </div>
                <div className="faq__image">
                    <img src={FAQ_img.src} alt=""/>
                </div>
            </div>
        </section>
    )
}
