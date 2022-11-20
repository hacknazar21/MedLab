import Head from "next/head";
import { useRouter } from "next/router";
import useForm from "../../hooks/hooks.form";
import InputMask from "../InputMask";

export default function CheckoutForm() {
  const router = useRouter();
  const { formSubmitHandler, formChangeHandler, loading } = useForm();
  return (
    <form onSubmit={formSubmitHandler} className="checkout__form checkout-form">
      <h2 className="checkout-form__title form-title">Оплата</h2>
      <div className="checkout-form__inputs">
        <div className="checkout-form__radio radio input-box">
          <h3 className="radio__title">Выберите способ оплаты</h3>
          <div className="radio__items">
            <div className="radio__item">
              <input
                type="radio"
                id="CASH"
                name="payment_method"
                defaultValue="CASH"
                defaultChecked={true}
                className="radio__input"
              />
              <label htmlFor="CASH" className="radio__label">
                Наличный расчет
              </label>
            </div>
            <div className="radio__item">
              <input
                type="radio"
                id="CARD"
                name="payment_method"
                defaultValue="CARD"
                className="radio__input"
              />
              <label htmlFor="CARD" className="radio__label">
                Оплата картой
              </label>
            </div>
          </div>
        </div>
        <div className="checkout-form__input-box input-box">
          <label htmlFor="full_name" className="label">
            ФИО
          </label>
          <input
            onChange={formChangeHandler}
            type="text"
            name="full_name"
            id="full_name"
            className="input"
          />
        </div>
        <div className="checkout-form__input-box input-box">
          <label htmlFor="tel" className="label">
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
            type="text"
            name="tel"
            id="tel"
            className="input"
          />
        </div>
        <div className="checkout-form__input-box input-box">
          <label htmlFor="address" className="label">
            Адрес
          </label>
          <input
            onChange={formChangeHandler}
            type="text"
            name="address"
            id="address"
            className="input"
          />
        </div>
        <div className="checkout-form__input-box input-box">
          <label htmlFor="email" className="label">
            Почта
          </label>
          <input
            onChange={formChangeHandler}
            type="email"
            name="email"
            id="email"
            className="input"
          />
        </div>
      </div>
      <div className="checkout-form__actions">
        <button
          onClick={() => {
            router.back();
          }}
          className="checkout-form__back form-back"
        >
          Вернуться назад
        </button>
        <button type="submit" className="checkout-form__submit submit">
          Оплатить
        </button>
      </div>
    </form>
  );
}
