import React, {FunctionComponent, useContext, useEffect, useState} from 'react';
import InputMask from "../../InputMask";
import useHttp from "../../../hooks/hooks.http";
import {AuthContext} from "../../../context/AuthContext";

interface OwnProps {
    userInfo: {
      username: string,
      firstname: string,
      lastname: string,
      avatar: string,
      phone_number: string,
      email: string,
      address: string,
    }
}

type Props = OwnProps;

const Personal: FunctionComponent<Props> = (props) => {
  const [formPersonal, setFormPersonal] = useState({
    'lastname': '',
    'firstname': '',
    'phone_number': '',
    'email': '',
    'address': '',
    'password': 'Здесь какой-то пароль',
    'avatar': null,
    'avatarPreview': ''
  })
  const { request, error, loading, isOk } = useHttp()
  const {token}  = useContext(AuthContext)
  useEffect(() => {
        setFormPersonal(prev => {
          prev.avatarPreview = props.userInfo.avatar;
          return {...prev, ...props.userInfo}
        })
      },
      [props.userInfo])
  const inputChangeHandler = (event)=>{
    setFormPersonal(prev => {prev[event.target.name]=event.target.value; return {...prev}})
  }
  const changeInputState = (name, value)=>{
    setFormPersonal(prev => {prev[name]=value; return {...prev}})
  }
  const fileInputChange = (event)=>{
    setFormPersonal(prev => {
      prev['avatarPreview']=URL.createObjectURL(event.target.files[0]);
      console.log(event.target.files[0])
      prev['avatar'] = event.target.files[0];
      return {...prev}
    })
  }
  const clickSubmitHandler = async event =>{
    try{
      const formData = new FormData()
      for (const formPersonalKey in formPersonal) {
        if(formPersonalKey === 'avatar' && typeof formPersonal[formPersonalKey] !== 'string') {
              formPersonalKey === 'avatar' ?
              formData.set(formPersonalKey, new Blob([formPersonal[formPersonalKey]], {type: formPersonal[formPersonalKey].type}), formPersonal[formPersonalKey].type.replace('/', '.')) :
              formData.set(formPersonalKey, formPersonal[formPersonalKey])
        }
        else {
          formData.set(formPersonalKey, formPersonal[formPersonalKey])
        }
      }
      const data = await request('http://192.168.0.118:8081/api/user/updateinfo', 'POST', formData, {
        'Authorization': `Bearer ${token}`
      }, true)
    }catch (e) {
      console.log(e.message)
    }
  }
  return (<>
      <h2 className="personal__title profile-title">Личная информация</h2>
      <div className="personal__form">
        <div className="personal__form-inputs">
          <div className="personal__form-input-header">
            <div className="personal__form-input-avatar">
              <img src={formPersonal.avatarPreview} alt=""/>
            </div>
            <input onChange={fileInputChange} type='file' id='avatar-input' name='avatar' className='personal__form-input-file'/>
            <label htmlFor='avatar-input'>Изменить фото</label>
          </div>
          <div className="personal__form-inputs-main">
            <div className="personal__form-input-box">
              <input onChange={inputChangeHandler} type="text" id='lastname' name='lastname' className="auth-form__input" placeholder='Фамилия' value={formPersonal.lastname}/>
              <label htmlFor="lastname" className="auth-form__label"> Фамилия </label>
            </div>
            <div className="personal__form-input-box">
              <input onChange={inputChangeHandler} type="text" id='firstname' name='firstname' className="auth-form__input" placeholder='Имя' value={formPersonal.firstname}/>
              <label htmlFor="firstname" className="auth-form__label"> Имя </label>
            </div>
            <div className="personal__form-input-box">
              <InputMask changeHandler={changeInputState} type="text" id='phone_number' name='phone_number' className="auth-form__input" placeholder='Номер телефона' value={formPersonal.phone_number}/>
              <label htmlFor="phone_number" className="auth-form__label"> Номер телефона </label>
            </div>
            <div className="personal__form-input-box">
              <input onChange={inputChangeHandler} type="text" id='email' name='email' className="auth-form__input" placeholder='Email' value={formPersonal.email}/>
              <label htmlFor="email" className="auth-form__label"> Email </label>
            </div>
            <div className="personal__form-input-box">
              <input onChange={inputChangeHandler} type="text" id='address' name='address' className="auth-form__input" placeholder='Адрес' value={formPersonal.address}/>
              <label htmlFor="address" className="auth-form__label"> Адрес </label>
            </div>
            <div className="personal__form-input-box">
              <input onChange={inputChangeHandler} type="password" id='password' name='password' className="auth-form__input" placeholder='Пароль' value={formPersonal.password}/>
              <label htmlFor="password" className="auth-form__label"> Пароль </label>
            </div>
          </div>
          <button onClick={clickSubmitHandler} className='personal__form-submit'>Редактировать профиль</button>
        </div>
      </div>
  </>);
};

export default Personal;
