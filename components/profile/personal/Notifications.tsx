import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import InputMask from "../../InputMask";
import useHttp from "../../../hooks/hooks.http";
import {AuthContext} from "../../../context/AuthContext";

interface OwnProps {
    notifications: {
        date: string,
        title: string,
        result: string
    }[]
}

type Props = OwnProps;

const Personal: FunctionComponent<Props> = (props) => {

    return (<>
        <h2 className="notifications__title profile-title">Мои уведомления</h2>
        <div className="notifications__items">
            <div className="notifications__item notification">
                <div className="notification__date">
                    <p>11.04.22</p>
                </div>
                <h2 className="notification__title">
                    Результаты анализов: Общий анализ крови. E403
                </h2>
                <a href={''} className="notification__result profile-link">
                    <p>Смотреть результаты</p>
                </a>
            </div>
        </div>
    </>);
};

export default Personal;
