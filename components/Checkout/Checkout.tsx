import Head from "next/head";
import CheckoutForm from "./CheckoutForm";
import CheckoutInfo from "./CheckoutInfo";

export default function Checkout() {
  return (
    <section className="page__checkout checkout">
      <div className="checkout__container">
        <div className="checkout__box">
          <CheckoutForm />
          <CheckoutInfo />
        </div>
      </div>
    </section>
  );
}
