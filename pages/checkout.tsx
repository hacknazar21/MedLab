import { GetServerSideProps } from "next";
import { MainLayout } from "../layouts/mainLayout";
import Head from "next/head";
import Login from "../components/Auth/Login";
import { Sugar } from "../layouts/sugarLayout";
import Checkout from "../components/Checkout/Checkout";

export default function CheckoutPage() {
  return (
    <>
      <Head>
        <title>Check-Out</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper another">
        <MainLayout>
          <Sugar
            sugar={[
              { title: "Главная", href: "/" },
              { title: "Check-Out", href: "" },
            ]}
          />
          <main className="page">
            <Checkout />
          </main>
        </MainLayout>
      </div>
    </>
  );
}
