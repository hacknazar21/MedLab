import React, {useContext, useEffect, useState} from "react";
import {AuthContext} from "../../context/AuthContext";
import FourOhFour from '../404'
import Head from "next/head";
import {MainLayout} from "../../layouts/mainLayout";
import {Sugar} from "../../layouts/sugarLayout";
import Login from "../../components/Auth/Login";
import {Aside} from "../../components/profile/Aside";
import Personal from "../../components/profile/personal/Personal";
import useHttp from "../../hooks/hooks.http";

export default function PersonalPage({}) {
    const {isAuth} = useContext(AuthContext)
    const [userInfo, setUserInfo] = useState({
        'avatar': '',
        'username': '',
        'firstname': '',
        'lastname': '',
        'address': '',
        'email': '',
        'phone_number': ''
    })
    const {token}  = useContext(AuthContext)
    const {request, error, clearError, clearSuccess, success, loading} = useHttp()
    useEffect( ()=>{
        if(token)
            (async ()=>{
                try{
                    const data = await request('/api/user/info', 'GET', null, {
                        'Authorization': `Bearer ${token}`,
                        'Accept': 'application/json'
                    })

                    if(data.username){
                        setUserInfo(prev=>{return {...data}})
                    }

                }catch (e) {
                    console.log(e.message)
                }
            })()
    }, [token])
    useEffect(() => {
        console.log(userInfo)
    }, [userInfo]);

    if(!isAuth) return <FourOhFour/>

    return (
        <>
            <Head>
                <title>Мои уведомления</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="wrapper another">
                <MainLayout>
                    <Sugar sugar={[{title: 'Главная', href: '/'}, {title: 'Мои уведомления', href: ''}]}/>
                    <main className='page profile'>
                        <Aside userInfo={{avatar: userInfo.avatar, name: userInfo.username}}/>
                        <div className='profile__content'>

                        </div>
                    </main>
                </MainLayout>
            </div>
        </>
    )
}

