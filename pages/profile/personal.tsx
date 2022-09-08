import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import FourOhFour from '../404'
import Head from "next/head";
import {MainLayout} from "../../layouts/mainLayout";
import {Sugar} from "../../layouts/sugarLayout";
import Login from "../../components/Auth/Login";
import {Aside} from "../../components/profile/Aside";

export default function Personal({}) {
    const {isAuth} = useContext(AuthContext)


    if(!isAuth) return <FourOhFour/>

    return (
        <>
            <Head>
                <title>Личная информация</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="wrapper another">
                <MainLayout>
                    <Sugar sugar={[{title: 'Главная', href: '/'}, {title: 'Личная информация', href: ''}]}/>
                    <main className='page profile'>
                        <Aside/>
                    </main>
                </MainLayout>
            </div>
        </>
    )
}

