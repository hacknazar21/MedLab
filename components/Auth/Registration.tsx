import React, { FunctionComponent, useEffect, useState } from "react";
import Link from "next/link";
import InputMask from "../InputMask";
import useHttp from "../../hooks/hooks.http";
import { Loading } from "../Loading";
import { useRouter } from "next/router";
import useForm from "../../hooks/hooks.form";

interface OwnProps {}

type Props = OwnProps;

const Registration: FunctionComponent<Props> = (props) => {
  const router = useRouter();
  const { formSubmitHandler, formChangeHandler, loading } =
    useForm(registerHandler);

  function registerHandler() {
    router.push("/login");
  }
  return (
    <section className="page__auth auth">
      <div className="auth__container">
        <form
          onSubmit={formSubmitHandler}
          action="/api/account/register/"
          method="POST"
          data-method={"POST"}
          className="auth__form auth-form"
        >
          <div className="auth-form__wrapper">
            <h2 className="auth-form__title"></h2>
            <div className="auth-form__inputs">
              <div className="auth-form__input-box">
                <input
                  onChange={formChangeHandler}
                  type="text"
                  id="username"
                  name="username"
                  className="auth-form__input"
                  placeholder="Имя пользователя"
                />
                <label htmlFor="username" className="auth-form__label">
                  Введите ваше имя
                </label>
              </div>
              <div className="auth-form__input-box">
                <InputMask
                  changeHandler={(value) => {
                    formChangeHandler({
                      target: {
                        name: "phone_number",
                        type: "text",
                        value,
                      },
                    });
                  }}
                  type="text"
                  id="phone_number"
                  name="phone_number"
                  className="auth-form__input"
                  placeholder="+ 7 (___) ___ __ __"
                />
                <label htmlFor="phone_number" className="auth-form__label">
                  Номер телефона
                </label>
              </div>
              <div className="auth-form__input-box">
                <input
                  onChange={formChangeHandler}
                  type="text"
                  id="email"
                  name="email"
                  className="auth-form__input"
                  placeholder="Введите ваш Email"
                />
                <label htmlFor="email" className="auth-form__label">
                  Email
                </label>
              </div>
              <div className="auth-form__input-box">
                <input
                  onChange={formChangeHandler}
                  type="password"
                  id="password"
                  name="password"
                  className="auth-form__input"
                  placeholder="Введите пароль"
                />
                <label htmlFor="password" className="auth-form__label">
                  Пароль
                </label>
              </div>
              <div className="auth-form__input-box">
                <input
                  onChange={formChangeHandler}
                  type="password"
                  id="password_check"
                  name="password_check"
                  className="auth-form__input"
                  placeholder="Повторите пароль"
                />
                <label htmlFor="password_check" className="auth-form__label">
                  Повторите пароль
                </label>
              </div>
              <div className="auth-form__submit-box">
                <button type="submit" className="auth-form__submit">
                  Зарегистрироваться
                  {loading ?? <Loading />}
                </button>
                <Link href="/login">
                  <a className="auth-form__link">У меня уже есть аккаунт</a>
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Registration;
