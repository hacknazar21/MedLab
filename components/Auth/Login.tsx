import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import Link from "next/link";
import InputMask from "../InputMask";
import useHttp from "../../hooks/hooks.http";
import {Loading} from "../Loading";
import {AuthContext} from "../../context/AuthContext";
import {useRouter} from "next/router";

interface OwnProps {}

type Props = OwnProps;

const Login: FunctionComponent<Props> = (props) => {
  const {request, error, clearError, clearSuccess, success, loading} = useHttp()
  const { login } = useContext(AuthContext)
  const router = useRouter()
  const [formLogin, setFormLogin] = useState({
    'phone_number': '',
    'password': ''
  })
  const inputChangeHandler = (event)=>{
    setFormLogin(prev => {prev[event.target.name]=event.target.value; return {...prev}})
  }
  const changeInputState = (name, value)=>{
    setFormLogin(prev => {prev[name]=value; return {...prev}})
  }
  const formSubmitHandler = async (event)=>{
    for (const formLoginKey in formLogin) {
      if(formLogin[formLoginKey] === ''){
        return
      }
    }
    try{
      const data = await request('http://192.168.0.108:8081/api/auth/login', 'POST', formLogin, {
        'Content-Type': 'application/json'
      })
      if(data.token){
        await login(data.token, data.userId)
        router.push('/profile/personal')
      }
    }
    catch (e) {
      setTimeout(()=>{
        clearError()
      }, 2000)
    }
  }
  return (
      <>
      {error !== null ? <div className="bar error">{error}</div>: ''}
      <section className='page__auth auth'>
        <div className="auth__container">
          <div className='auth__form auth-form'>
            <div className="auth-form__wrapper">
              <h2 className="auth-form__title"></h2>
              <div className="auth-form__inputs">
                <div className="auth-form__input-box">
                  <InputMask changeHandler={changeInputState} type="text" id='mobile' name='mobile' className="auth-form__input"  placeholder='+ 7 (___) ___ __ __'/>
                  <label htmlFor="mobile" className="auth-form__label">Номер телефона</label>
                </div>
                <div className="auth-form__input-box">
                  <input onChange={inputChangeHandler} type="password" id='password' name='password' className="auth-form__input" placeholder='Введите пароль'/>
                  <label htmlFor="password" className="auth-form__label"> Пароль </label>
                </div>
                <div className="auth-form__submit-box">
                  <button onClick={formSubmitHandler} type='submit' className="auth-form__submit">
                    Логин
                    {loading ? <Loading/> : ''}
                  </button>
                  <Link href='/registration'><a className="auth-form__link">У меня нет аккаунта</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default Login;
