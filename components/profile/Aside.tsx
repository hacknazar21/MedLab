import * as React from 'react';
import Link from "next/link";
import {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import useHttp from "../../hooks/hooks.http";
import {Loading} from "../Loading";

interface Props {
    userInfo: {
        avatar: string,
        name: string,
    }
}

export function Aside(props: Props) {

    return (
        <>
            <aside className="aside-profile">
                <div className="aside-profile__header">
                    <div className="aside-profile__avatar">
                        {props.userInfo.avatar === '' || props.userInfo.avatar == null ? <div className='lazy'></div> : <img src={props.userInfo.avatar} alt="avatar"/>}
                    </div>
                    <div className="aside-profile__name">
                        {props.userInfo.name === '' ? 'Фамилия и имя' : <p>{props.userInfo.name}</p>}
                    </div>
                    <div className="aside-profile__arrow">
                        <Link href="/profile/personal">
                            <a className="aside-profile__link-arrow">
                                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.5402 11.29L9.88023 5.64004C9.78726 5.54631 9.67666 5.47191 9.5548 5.42115C9.43294 5.37038 9.30224 5.34424 9.17023 5.34424C9.03821 5.34424 8.90751 5.37038 8.78565 5.42115C8.66379 5.47191 8.55319 5.54631 8.46023 5.64004C8.27398 5.8274 8.16943 6.08085 8.16943 6.34504C8.16943 6.60922 8.27398 6.86267 8.46023 7.05004L13.4102 12.05L8.46023 17C8.27398 17.1874 8.16943 17.4409 8.16943 17.705C8.16943 17.9692 8.27398 18.2227 8.46023 18.41C8.55284 18.5045 8.66329 18.5797 8.78516 18.6312C8.90704 18.6827 9.03792 18.7095 9.17023 18.71C9.30253 18.7095 9.43342 18.6827 9.55529 18.6312C9.67717 18.5797 9.78761 18.5045 9.88023 18.41L15.5402 12.76C15.6417 12.6664 15.7227 12.5527 15.7781 12.4262C15.8336 12.2997 15.8622 12.1631 15.8622 12.025C15.8622 11.8869 15.8336 11.7503 15.7781 11.6238C15.7227 11.4973 15.6417 11.3837 15.5402 11.29Z" fill="url(#paint0_radial_170_6000)"/>
                                    <defs>
                                        <radialGradient id="paint0_radial_170_6000" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.6861 15.2015) rotate(172.277) scale(3.72987 13.5682)">
                                            <stop stop-color="#0528A3"/>
                                            <stop offset="1" stop-color="#244CCB"/>
                                        </radialGradient>
                                    </defs>
                                </svg>
                            </a>
                        </Link>
                    </div>
                </div>
                <div className="aside-profile__menu">
                    <ul className="aside-profile__list">
                        <li className="aside-profile__item">
                            <Link href="">
                                <a className="aside-profile__link">
                                    <svg width="18" height="22" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7183 17C14.2643 10.8716 11.3999 9.25635 11.3999 6.19995V2.59995H11.9999C12.1591 2.59995 12.3117 2.53674 12.4242 2.42422C12.5367 2.31169 12.5999 2.15908 12.5999 1.99995V0.799951C12.5999 0.640821 12.5367 0.488209 12.4242 0.375687C12.3117 0.263165 12.1591 0.199951 11.9999 0.199951H5.99994C5.84081 0.199951 5.6882 0.263165 5.57568 0.375687C5.46315 0.488209 5.39994 0.640821 5.39994 0.799951V1.99995C5.39994 2.15908 5.46315 2.31169 5.57568 2.42422C5.6882 2.53674 5.84081 2.59995 5.99994 2.59995H6.59994V6.19995C6.59994 9.25635 3.73554 10.8716 1.28154 17C0.50034 18.9499 -1.50606 21.7999 8.99994 21.7999C19.5059 21.7999 17.4995 18.9499 16.7183 17ZM14.7779 19.1011C13.9355 19.3531 12.2591 19.64 8.99994 19.64C5.74074 19.64 4.06434 19.3531 3.22194 19.1011C2.92314 19.0124 2.80674 18.6655 2.91234 18.3475C3.17634 17.5435 3.67434 16.1539 4.60554 14.6024C6.88074 10.8116 9.24114 15.1987 11.2055 15.1987C13.1699 15.1987 12.6311 13.3256 13.3943 14.6024C14.0967 15.7837 14.6646 17.0399 15.0875 18.3475C15.1931 18.6655 15.0767 19.0111 14.7779 19.1011Z" fill="#717C97"/>
                                    </svg>
                                    Мои исследования
                                </a>
                            </Link>
                        </li>
                        <li className="aside-profile__item">
                            <Link href="">
                                <a className="aside-profile__link">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M10 12C10.1978 12 10.3911 11.9414 10.5556 11.8315C10.72 11.7216 10.8482 11.5654 10.9239 11.3827C10.9996 11.2 11.0194 10.9989 10.9808 10.8049C10.9422 10.6109 10.847 10.4327 10.7071 10.2929C10.5673 10.153 10.3891 10.0578 10.1951 10.0192C10.0011 9.98063 9.80004 10.0004 9.61732 10.0761C9.43459 10.1518 9.27841 10.28 9.16853 10.4444C9.05865 10.6089 9 10.8022 9 11C9 11.2652 9.10536 11.5196 9.29289 11.7071C9.48043 11.8946 9.73478 12 10 12ZM15 12C15.1978 12 15.3911 11.9414 15.5556 11.8315C15.72 11.7216 15.8482 11.5654 15.9239 11.3827C15.9996 11.2 16.0194 10.9989 15.9808 10.8049C15.9422 10.6109 15.847 10.4327 15.7071 10.2929C15.5673 10.153 15.3891 10.0578 15.1951 10.0192C15.0011 9.98063 14.8 10.0004 14.6173 10.0761C14.4346 10.1518 14.2784 10.28 14.1685 10.4444C14.0586 10.6089 14 10.8022 14 11C14 11.2652 14.1054 11.5196 14.2929 11.7071C14.4804 11.8946 14.7348 12 15 12ZM10 16C10.1978 16 10.3911 15.9414 10.5556 15.8315C10.72 15.7216 10.8482 15.5654 10.9239 15.3827C10.9996 15.2 11.0194 14.9989 10.9808 14.8049C10.9422 14.6109 10.847 14.4327 10.7071 14.2929C10.5673 14.153 10.3891 14.0578 10.1951 14.0192C10.0011 13.9806 9.80004 14.0004 9.61732 14.0761C9.43459 14.1518 9.27841 14.28 9.16853 14.4444C9.05865 14.6089 9 14.8022 9 15C9 15.2652 9.10536 15.5196 9.29289 15.7071C9.48043 15.8946 9.73478 16 10 16ZM15 16C15.1978 16 15.3911 15.9414 15.5556 15.8315C15.72 15.7216 15.8482 15.5654 15.9239 15.3827C15.9996 15.2 16.0194 14.9989 15.9808 14.8049C15.9422 14.6109 15.847 14.4327 15.7071 14.2929C15.5673 14.153 15.3891 14.0578 15.1951 14.0192C15.0011 13.9806 14.8 14.0004 14.6173 14.0761C14.4346 14.1518 14.2784 14.28 14.1685 14.4444C14.0586 14.6089 14 14.8022 14 15C14 15.2652 14.1054 15.5196 14.2929 15.7071C14.4804 15.8946 14.7348 16 15 16ZM5 12C5.19778 12 5.39112 11.9414 5.55557 11.8315C5.72002 11.7216 5.84819 11.5654 5.92388 11.3827C5.99957 11.2 6.01937 10.9989 5.98079 10.8049C5.9422 10.6109 5.84696 10.4327 5.70711 10.2929C5.56725 10.153 5.38907 10.0578 5.19509 10.0192C5.00111 9.98063 4.80004 10.0004 4.61732 10.0761C4.43459 10.1518 4.27841 10.28 4.16853 10.4444C4.05865 10.6089 4 10.8022 4 11C4 11.2652 4.10536 11.5196 4.29289 11.7071C4.48043 11.8946 4.73478 12 5 12ZM17 2H16V1C16 0.734784 15.8946 0.48043 15.7071 0.292893C15.5196 0.105357 15.2652 0 15 0C14.7348 0 14.4804 0.105357 14.2929 0.292893C14.1054 0.48043 14 0.734784 14 1V2H6V1C6 0.734784 5.89464 0.48043 5.70711 0.292893C5.51957 0.105357 5.26522 0 5 0C4.73478 0 4.48043 0.105357 4.29289 0.292893C4.10536 0.48043 4 0.734784 4 1V2H3C2.20435 2 1.44129 2.31607 0.87868 2.87868C0.316071 3.44129 0 4.20435 0 5V17C0 17.7956 0.316071 18.5587 0.87868 19.1213C1.44129 19.6839 2.20435 20 3 20H17C17.7956 20 18.5587 19.6839 19.1213 19.1213C19.6839 18.5587 20 17.7956 20 17V5C20 4.20435 19.6839 3.44129 19.1213 2.87868C18.5587 2.31607 17.7956 2 17 2ZM18 17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18H3C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V8H18V17ZM18 6H2V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H17C17.2652 4 17.5196 4.10536 17.7071 4.29289C17.8946 4.48043 18 4.73478 18 5V6ZM5 16C5.19778 16 5.39112 15.9414 5.55557 15.8315C5.72002 15.7216 5.84819 15.5654 5.92388 15.3827C5.99957 15.2 6.01937 14.9989 5.98079 14.8049C5.9422 14.6109 5.84696 14.4327 5.70711 14.2929C5.56725 14.153 5.38907 14.0578 5.19509 14.0192C5.00111 13.9806 4.80004 14.0004 4.61732 14.0761C4.43459 14.1518 4.27841 14.28 4.16853 14.4444C4.05865 14.6089 4 14.8022 4 15C4 15.2652 4.10536 15.5196 4.29289 15.7071C4.48043 15.8946 4.73478 16 5 16Z" fill="#717C97"/>
                                    </svg>
                                    Мои записи
                                </a>
                            </Link>
                        </li>
                        <li className="aside-profile__item">
                            <Link href="">
                                <a className="aside-profile__link">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V13C0 13.7956 0.316071 14.5587 0.87868 15.1213C1.44129 15.6839 2.20435 16 3 16H14.59L18.29 19.71C18.3834 19.8027 18.4943 19.876 18.6161 19.9258C18.7379 19.9755 18.8684 20.0008 19 20C19.1312 20.0034 19.2613 19.976 19.38 19.92C19.5626 19.845 19.7189 19.7176 19.8293 19.5539C19.9396 19.3901 19.999 19.1974 20 19V3C20 2.20435 19.6839 1.44129 19.1213 0.87868C18.5587 0.316071 17.7956 0 17 0ZM18 16.59L15.71 14.29C15.6166 14.1973 15.5057 14.124 15.3839 14.0742C15.2621 14.0245 15.1316 13.9992 15 14H3C2.73478 14 2.48043 13.8946 2.29289 13.7071C2.10536 13.5196 2 13.2652 2 13V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V16.59ZM10 10C9.80222 10 9.60888 10.0586 9.44443 10.1685C9.27998 10.2784 9.15181 10.4346 9.07612 10.6173C9.00043 10.8 8.98063 11.0011 9.01921 11.1951C9.0578 11.3891 9.15304 11.5673 9.29289 11.7071C9.43275 11.847 9.61093 11.9422 9.80491 11.9808C9.99889 12.0194 10.2 11.9996 10.3827 11.9239C10.5654 11.8482 10.7216 11.72 10.8315 11.5556C10.9414 11.3911 11 11.1978 11 11C11 10.7348 10.8946 10.4804 10.7071 10.2929C10.5196 10.1054 10.2652 10 10 10ZM10 4C9.73478 4 9.48043 4.10536 9.29289 4.29289C9.10536 4.48043 9 4.73478 9 5V8C9 8.26522 9.10536 8.51957 9.29289 8.70711C9.48043 8.89464 9.73478 9 10 9C10.2652 9 10.5196 8.89464 10.7071 8.70711C10.8946 8.51957 11 8.26522 11 8V5C11 4.73478 10.8946 4.48043 10.7071 4.29289C10.5196 4.10536 10.2652 4 10 4Z" fill="#717C97"/>
                                    </svg>
                                    Мои уведомления
                                </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </aside>
        </>
    )
}
