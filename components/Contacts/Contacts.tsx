import * as React from 'react';
import Map from '../../src/img/contacts/map.png'
import Tel from '../../src/img/contacts/tel.png'
interface Props {

}

export function Contacts(props: Props) {

    return (
        <section className='page__contacts contacts'>
            <div className="contacts__container">
                <div className="contacts__items">
                    <div className="contacts__item contact-item">
                        <div className="contact-item__header">
                            <div className="contact-item__icon"><img src={Map.src} alt=""/></div>
                            <div className="contact-item__name">Адрес</div>
                        </div>
                        <div className="contact-item__content">
                            <div className="contact-item__content-item">
                                <p>2972 Westheimer Rd. Santa Ana, Illinois 85486 </p>
                            </div>
                        </div>
                    </div>
                    <div className="contacts__item contact-item">
                        <div className="contact-item__header">
                            <div className="contact-item__icon">
                                <img src={Tel.src} alt=""/>
                            </div>
                            <div className="contact-item__name">Телефон</div>
                        </div>
                        <div className="contact-item__content">
                            <a href='tel:(603) 555-0123' className="contact-item__content-item">
                                <p>(603) 555-0123</p>
                            </a>
                            <a href='tel:(603) 555-0123' className="contact-item__content-item">
                                <p>(603) 555-0123</p>
                            </a>
                            <a href='tel:(603) 555-0123' className="contact-item__content-item">
                                <p>(603) 555-0123</p>
                            </a>
                            <a href='tel:(603) 555-0123' className="contact-item__content-item">
                                <p>(603) 555-0123</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contacts__map">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d23252.110274148865!2d76.9294336!3d43.2406528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x388369348c5349f1%3A0x7c5f1185bfc26c88!2z0JzQtdC00LjRhtC40L3RgdC60LjQuSDRhtC10L3RgtGAINCQ0LvRjNGC0LA!5e0!3m2!1sru!2skz!4v1663306738590!5m2!1sru!2skz"
                        width="100%" height="100%" allowFullScreen={true} loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </section>
    )
}
