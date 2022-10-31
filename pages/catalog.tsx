import { Header } from "../components/Index/Header";
import FirstScreen from "../components/Index/FirstScreen";
import Banners from "../components/Index/Banners";
import Popular from "../components/Index/Popular";
import Reviews from "../components/Index/Reviews";
import News from "../components/Index/News";
import Info from "../components/Index/Info";
import { Map } from "../components/Index/Map";
import Footer from "../components/Index/Footer";
// @ts-ignore
import { GetServerSideProps } from "next";
import { IAnalys } from "../Interfaces/IAnalys";
// @ts-ignore
import Link from "next/link";
import { MainLayout } from "../layouts/mainLayout";
import { Sugar } from "../layouts/sugarLayout";
// @ts-ignore
import Head from "next/head";
import { Catalog } from "../components/Catalog/Catalog";

export default function CatalogPage({ analysis }) {
  return (
    <>
      <Head>
        <title>Каталог</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper catalog">
        <MainLayout>
          <Sugar
            sugar={[
              { title: "Главная", href: "/" },
              { title: "Каталог", href: "" },
            ]}
          />
          <section className="page__main main">
            <div className="main__container">
              <Link href="/">
                <a className="main__back">
                  <span>
                    <svg
                      width="100%"
                      height="100%"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.2929 15.7071C12.6834 16.0976 13.3166 16.0976 13.7071 15.7071C14.0976 15.3166 14.0976 14.6834 13.7071 14.2929L12.2929 15.7071ZM10 12L9.29289 11.2929C8.90237 11.6834 8.90237 12.3166 9.29289 12.7071L10 12ZM13.7071 9.70711C14.0976 9.31658 14.0976 8.68342 13.7071 8.29289C13.3166 7.90237 12.6834 7.90237 12.2929 8.29289L13.7071 9.70711ZM13.7071 14.2929L10.7071 11.2929L9.29289 12.7071L12.2929 15.7071L13.7071 14.2929ZM10.7071 12.7071L13.7071 9.70711L12.2929 8.29289L9.29289 11.2929L10.7071 12.7071Z"
                        fill="white"
                        fill-opacity="0.8"
                      />
                    </svg>
                  </span>
                  Назад
                </a>
              </Link>
              <div className="main__button">Каталог анализов</div>
            </div>
          </section>
          <Catalog researches={analysis} />
        </MainLayout>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const responseAnalysis = await fetch(
    "http://195.49.215.130/api/front/analyse/allAnalyse"
  );
  const analysis: IAnalys[] | any =
    (await responseAnalysis.json())?.results ?? [];

  return {
    props: { analysis },
  };
};
