import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import Link from "next/link";
import InputMask from "../InputMask";
import useHttp from "../../hooks/hooks.http";
import { Loading } from "../Loading";
import { AuthContext } from "../../context/AuthContext";
import { useRouter } from "next/router";
import useForm from "../../hooks/hooks.form";

interface OwnProps {}

type Props = OwnProps;

const Login: FunctionComponent<Props> = (props) => {
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const { formSubmitHandler, formChangeHandler, loading } =
    useForm(onSubmitHandler);
  function onSubmitHandler(data) {
    console.log(data);
  }
  return (
    <>
      <section className="page__auth auth">
        <div className="auth__container">
          <form
            action="/api/front/review/allReviews"
            method="POST"
            data-method="POST"
            onSubmit={formSubmitHandler}
            className="auth__form auth-form"
          >
            <div className="auth-form__wrapper">
              <h2 className="form-title">Войти в аккаунт</h2>
              <div className="input-box">
                <label htmlFor="mobile" className="label">
                  Номер телефона
                </label>
                <InputMask
                  changeHandler={(value) => {
                    formChangeHandler({
                      target: {
                        name: "tel",
                        type: "text",
                        value,
                      },
                    });
                  }}
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="input"
                  placeholder="+ 7 (___) ___ __ __"
                />
              </div>
              <div className="input-box">
                <label htmlFor="password" className="label">
                  Пароль
                </label>
                <input
                  onChange={formChangeHandler}
                  type="password"
                  id="password"
                  name="password"
                  className="input"
                  placeholder="Введите пароль"
                />
              </div>
              <div className="input-box">
                <button type="submit" className="submit">
                  Войти
                  {loading ? <Loading /> : ""}
                </button>
                <Link href="/registration">
                  <a className="auth-form__link">У меня нет аккаунта</a>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
