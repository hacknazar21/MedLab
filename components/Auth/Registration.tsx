import React, {FunctionComponent, useEffect, useState} from 'react';
import Link from "next/link";
import InputMask from "../InputMask";
import useHttp from "../../hooks/hooks.http";
import {Loading} from "../Loading";
import {useRouter} from "next/router";

interface OwnProps {}

type Props = OwnProps;

const Registration: FunctionComponent<Props> = (props) => {
  const {request, error, clearError, clearSuccess, success, loading, isOk} = useHttp()
  const router = useRouter()
  const [formLogin, setFormLogin] = useState({
    'phone_number': '',
    'name': '',
    'email': '',
    'password_check': '',
    'password': ''
  })
  const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
  };
  const inputChangeHandler = (event)=>{
    event.target.classList.remove('error')

    if(event.target.name === 'email' && event.target.value !== ''){
      if(!validateEmail(event.target.value)){
        event.target.classList.add('error')
        return
      }
    }
    setFormLogin(prev => {prev[event.target.name]=event.target.value; return {...prev}})
  }
  const changeInputState = (name, value)=>{
    setFormLogin(prev => {prev[name]=value; return {...prev}})
  }
  const formSubmitHandler = async (event)=>{
    for (const formLoginKey in formLogin) {
      console.log(formLoginKey, formLogin[formLoginKey])
      if(formLogin[formLoginKey] === ''){
        return
      }
    }
    try{
      const data = await request('http://192.168.0.108:8081/api/auth/register', 'POST', formLogin, {
        'Content-Type': 'application/json'
      })

      if(isOk){
        router.push('/login')
      }
    }catch (e) {
      console.log(e.message)
    }
  }
  return (
      <section className='page__auth auth'>
        <div className="auth__container">
          <div className='auth__form auth-form'>
            <div className="auth-form__wrapper">
              <h2 className="auth-form__title"></h2>
              <div className="auth-form__inputs">
                <div className="auth-form__input-box">
                  <input onChange={inputChangeHandler} type="text" id='username' name='name' className="auth-form__input" placeholder='Имя пользователя'/>
                  <label htmlFor="username" className="auth-form__label"> Введите ваше имя </label>
                </div>
                <div className="auth-form__input-box">
                  <InputMask changeHandler={changeInputState} type="text" id='phone_number' name='phone_number' className="auth-form__input"  placeholder='+ 7 (___) ___ __ __'/>
                  <label htmlFor="phone_number" className="auth-form__label">Номер телефона</label>
                </div>
                <div className="auth-form__input-box">
                  <input onChange={inputChangeHandler} type="text" id='email' name='email' className="auth-form__input" placeholder='Введите ваш Email'/>
                  <label htmlFor="email" className="auth-form__label"> Email </label>
                </div>
                <div className="auth-form__input-box">
                  <input onChange={inputChangeHandler} type="password" id='password' name='password' className="auth-form__input" placeholder='Введите пароль'/>
                  <label htmlFor="password" className="auth-form__label"> Пароль </label>
                </div>
                <div className="auth-form__input-box">
                  <input onChange={inputChangeHandler} type="password" id='password_check' name='password_check' className="auth-form__input" placeholder='Повторите пароль'/>
                  <label htmlFor="password_check" className="auth-form__label"> Повторите пароль </label>
                </div>
                <div className="auth-form__submit-box">
                  <button onClick={formSubmitHandler} type='submit' className="auth-form__submit">
                    Зарегистрироваться
                    {loading ?? <Loading/>}
                  </button>
                  <Link href='/login'><a className="auth-form__link">У меня уже есть аккаунт</a></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Registration;
