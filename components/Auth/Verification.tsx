import React, {
  FunctionComponent,
  useCallback,
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

interface OwnProps {}

type Props = OwnProps;

const Verification: FunctionComponent<Props> = (props) => {
  const { request, error, clearError, clearSuccess, success, loading } =
    useHttp();
  const { login } = useContext(AuthContext);
  const router = useRouter();
  const [formLogin, setFormLogin] = useState({
    code: [],
  });
  const [timer, setTimer] = useState(60);
  const [isCodeSend, setIsCodeSend] = useState(true);

  function isInt(value: any) {
    const parsed = parseInt(value);
    return !!parsed;
  }

  const inputChangeHandler = (event) => {
    if (event.target.value.length > 1 && isInt(event.target.value)) {
      event.target.value = event.target.value[0];
    } else if (!isInt(event.target.value)) {
      event.target.value = "";
    } else if (event.target.value.length === 1) {
      const nextInput = event.target.parentElement.nextSibling?.childNodes[0];
      if (nextInput) nextInput.focus();
    }
    setFormLogin((prev) => {
      prev[event.target.name][event.target.dataset.index] = event.target.value;
      return { ...prev };
    });
  };
  const formSubmitHandler = async (event) => {
    if (formLogin["code"].join("").length)
      try {
        const data = await request("/api/auth/login", "POST", formLogin, {
          "Content-Type": "application/json",
        });
        if (data.token) {
          await login(data.token, data.userId);
          router.push("/profile/personal");
        }
      } catch (e) {
        setTimeout(() => {
          clearError();
        }, 2000);
      }
  };
  const countTimer = () => {
    if (timer >= 0) {
      setTimeout(countTimer, 1000);
      setTimer((prevState) => {
        if (prevState > 0) return --prevState;
        return prevState;
      });
    }
  };
  useEffect(() => {
    if (isCodeSend) {
      setTimer(60);
    }
    countTimer();
  }, [isCodeSend]);
  useEffect(() => {
    console.log(formLogin);
  }, [JSON.stringify(formLogin)]);

  function inputBackspaceHandler(event) {
    if (event.key === "Backspace") {
      event.target.value = "";
      setFormLogin((prev) => {
        prev[event.target.name][event.target.dataset.index] =
          event.target.value;
        return { ...prev };
      });
      const prevInput =
        event.target.parentElement.previousSibling?.childNodes[0];
      if (prevInput) prevInput.focus();
    }
  }

  return (
    <>
      {error !== null ? <div className="bar error">{error}</div> : ""}
      <section className="page__auth auth">
        <div className="auth__container">
          <div className="auth__form auth-form">
            <div className="auth-form__wrapper">
              <h2 className="auth-form__title">Верификация</h2>
              <div className="auth-form__subtitle">
                Мы отправили вам код на указанный номер телефона
              </div>
              <div className="auth-form__inputs">
                <div className="auth-form__input-box">
                  <div className="auth-form__inputs-code">
                    <div className="auth-form__input-code">
                      <input
                        onInput={inputChangeHandler}
                        type={"number"}
                        name="code"
                        data-index={0}
                        onKeyDown={inputBackspaceHandler}
                        className="auth-form__input"
                      />
                    </div>
                    <div className="auth-form__input-code">
                      <input
                        onInput={inputChangeHandler}
                        type={"number"}
                        name="code"
                        data-index={1}
                        onKeyDown={inputBackspaceHandler}
                        className="auth-form__input"
                      />
                    </div>
                    <div className="auth-form__input-code">
                      <input
                        onInput={inputChangeHandler}
                        type={"number"}
                        name="code"
                        data-index={2}
                        onKeyDown={inputBackspaceHandler}
                        className="auth-form__input"
                      />
                    </div>
                    <div className="auth-form__input-code">
                      <input
                        onInput={inputChangeHandler}
                        type={"number"}
                        name="code"
                        data-index={3}
                        onKeyDown={inputBackspaceHandler}
                        className="auth-form__input"
                      />
                    </div>
                  </div>
                  <label className="auth-form__label">Введите код</label>
                </div>
                <div className="auth-form__submit-box">
                  <button
                    onClick={formSubmitHandler}
                    type="submit"
                    className="auth-form__submit"
                  >
                    Войти в аккаунт
                    {loading ? <Loading /> : ""}
                  </button>
                  <div className="auth-form__submit-info">
                    <p>Повторная отправка доступна через {timer} секунд</p>
                  </div>
                  <button disabled={timer > 0} className="auth-form__link">
                    Отправить код повторно
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Verification;
