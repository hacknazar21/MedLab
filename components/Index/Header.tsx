import React, {useContext, useEffect, useRef, useState} from 'react';
import Contacts from './Header/Contacts';
import Logo from './Header/Logo';
import Menu from './Header/Menu';
import {Basket} from "../Basket";
import {HeaderContext} from "../../context/HeaderContext";
import Link from "next/link";
import {AuthContext} from "../../context/AuthContext";
interface Props {
    basket: any
}
const menuItems:any = [
    {
        'href': '/',
        'title': 'Пакет анализов',
        'key': 0
    },
    {
        'href': '/',
        'title': 'F.A.Q.',
        'key': 1
    },
    {
        'href': '/',
        'title': 'Отзывы',
        'key': 2
    },
    {
        'href': '/',
        'title': 'Новости',
        'key': 3
    },
    {
        'href': '/',
        'title': 'Акции',
        'key': 4
    },
    {
        'href': '/',
        'title': 'О нас',
        'key': 5
    },
    {
        'href': '/',
        'title': 'Контакты',
        'key': 6
    }
]
const contacts:any = [
    {
        'number': '+7 (812) 309 12 21',
        'key': 0
    },
    {
        'number': '+7 (800) 700 03 03',
        'key': 1
    }
]
menuItems.push()
export function Header (props:Props) {
    const [basketClick, setBasketClick] = useState(false)
    const {storageLength, addDynamicRefs} = useContext(HeaderContext)
    const {isAuth} = useContext(AuthContext)
    const dynamicRefs = useRef([])
    const basketRef = useRef(null)
    const headerRef = useRef(null)
    const [scroll, setScroll] = useState(false)
    useEffect(() => {
        dynamicRefs.current = new Array(0);
    }, []);


    useEffect(()=>{
        if(headerRef !== null) window.addEventListener('scroll', scrollHandler);
    }, [headerRef])
    useEffect(()=>{
        addDynamicRefs(dynamicRefs.current)
    }, [dynamicRefs.current])
    useEffect(()=>{
        if(basketRef !== null) {
            props.basket(basketRef)
            dynamicRefs.current = [...dynamicRefs.current, basketRef.current]
        }
    }, [basketRef])
    const scrollHandler = async (event:any) => {
       if(window.scrollY > 0 && !scroll) {
           await setScroll(true)
           headerRef?.current?.classList.add('scroll')
       }
       else if(window.scrollY <= 0) {
           await setScroll(false)
           headerRef?.current?.classList.remove('scroll')
       }
    }
    const basketClickHandler = (event:any) => {
        setBasketClick((prev:any)=>{
            return !prev
        })
    }
    const menuClickHandler = (event:any) => {
        headerRef.current.classList.toggle('menu-open')
    }
    return (
        <header ref={headerRef} className='header'>
            <div className="header__container">
                <div className="header__first">
                    <Logo/>
                    <Menu menuItems={menuItems}/>
                    <Contacts contacts={contacts}/>
                    <div className="menu__mobile" />
                </div>
                <div className="header__second">
                    <div className="header__actions">
                        <div ref={el => dynamicRefs.current.push(el)} data-da=".menu__mobile, 990" className="header__action bg-orange br10">
                            <a href="" className="button ">Каталог анализов</a>
                        </div>
                        <div className="header__action search br10">
                            <form action="" className="search__form">
                                <input className="input search__input" placeholder="Поиск по сайту" />
                                    <button type="submit" className='_icon-finder'>
                                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.71 19.29L17 15.61C18.4401 13.8144 19.1375 11.5353 18.9488 9.24133C18.7601 6.94733 17.6997 4.81281 15.9855 3.27667C14.2714 1.74053 12.0338 0.919537 9.73295 0.982497C7.43207 1.04546 5.24275 1.98759 3.61517 3.61517C1.98759 5.24275 1.04546 7.43207 0.982497 9.73295C0.919537 12.0338 1.74053 14.2714 3.27667 15.9855C4.81281 17.6997 6.94733 18.7601 9.24133 18.9488C11.5353 19.1375 13.8144 18.4401 15.61 17L19.29 20.68C19.383 20.7738 19.4936 20.8482 19.6154 20.8989C19.7373 20.9497 19.868 20.9758 20 20.9758C20.132 20.9758 20.2627 20.9497 20.3846 20.8989C20.5065 20.8482 20.6171 20.7738 20.71 20.68C20.8903 20.4936 20.991 20.2444 20.991 19.985C20.991 19.7257 20.8903 19.4765 20.71 19.29ZM10 17C8.61556 17 7.26218 16.5895 6.11103 15.8203C4.95989 15.0511 4.06268 13.9579 3.53287 12.6788C3.00306 11.3997 2.86443 9.99226 3.13453 8.63439C3.40463 7.27653 4.07131 6.02925 5.05028 5.05028C6.02925 4.07131 7.27653 3.40463 8.63439 3.13453C9.99226 2.86443 11.3997 3.00306 12.6788 3.53287C13.9579 4.06268 15.0511 4.95989 15.8203 6.11103C16.5895 7.26218 17 8.61556 17 10C17 11.8565 16.2625 13.637 14.9498 14.9498C13.637 16.2625 11.8565 17 10 17Z" fill="black"/>
                                        </svg>
                                    </button>
                            </form>
                        </div>
                        <button onClick={menuClickHandler} className="header__open-menu icon-menu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                        <div ref={el => dynamicRefs.current.push(el)} data-da=".menu__mobile, 990" className="header__action bg-blue br10">
                            <a href="" className="button  _icon-result">результаты</a>
                        </div>
                        <div data-da=".mobile__actions, 990" ref={basketRef} className="header__action basket  ">
                            <span>{storageLength}</span>
                            {basketClick && <Basket/>}
                            <button onClick={basketClickHandler} className="button bg-darkorange br10  _icon-basket">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                                        stroke="#224864" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                                        stroke="#224864" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round"/>
                                    <path d="M3 6H21" stroke="#224864" stroke-width="2" stroke-linecap="round"
                                          stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                        <div ref={el => dynamicRefs.current.push(el)} data-da=".mobile__actions, 990" className="header__action br10 flx-1 bg-grey">
                            <Link href={isAuth ? '/profile/personal' : '/login'}>
                                <a  className="button  _icon-cabinet color-black">
                                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M18 18.875V17.125C18 16.1967 17.6313 15.3065 16.9749 14.6501C16.3185 13.9937 15.4283 13.625 14.5 13.625H7.5C6.57174 13.625 5.6815 13.9937 5.02513 14.6501C4.36875 15.3065 4 16.1967 4 17.125V18.875" stroke="#313131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M11 10.125C12.933 10.125 14.5 8.558 14.5 6.625C14.5 4.692 12.933 3.125 11 3.125C9.067 3.125 7.5 4.692 7.5 6.625C7.5 8.558 9.067 10.125 11 10.125Z" stroke="#313131" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    <span>личный кабинет</span>
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
