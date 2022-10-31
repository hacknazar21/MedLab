import { Header } from "../components/Index/Header";
import FirstScreen from "../components/Index/FirstScreen";
import Banners from "../components/Index/Banners";
import Popular from "../components/Index/Popular";
import { Catalog } from "../components/Index/Analysis";
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
import { IReview } from "../Interfaces/IReview";
import { IBanners } from "../Interfaces/IBanner";
import banner1 from "../src/img/baners/01.png";
import banner2 from "../src/img/baners/02.png";
import { INews } from "../Interfaces/INews";
const banners: IBanners = {
  banners: [
    {
      banner: {
        title: "Проверка симптомов Covid - 18",
        text:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." +
          " Velit officia consequat duis enim velit mollit.",
        src: banner1.src,
        href: "",
        key: 0,
      },
    },
    {
      banner: {
        title: "Назначения правильного лечения",
        text:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." +
          " Velit officia consequat duis enim velit mollit.",
        src: banner2.src,
        href: "",
        key: 1,
      },
    },
    {
      banner: {
        title: "Назначения правильного лечения",
        text:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." +
          " Velit officia consequat duis enim velit mollit.",
        src: banner2.src,
        href: "",
        key: 2,
      },
    },
  ],
};
export default function ActionsPage({}) {
  return (
    <>
      <Head>
        <title>Акции</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper actions-page">
        <MainLayout>
          <Sugar
            sugar={[
              { title: "Главная", href: "/" },
              { title: "Акции", href: "" },
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
              <div className="main__button">Акции</div>
            </div>
          </section>
          <Banners {...banners} />
        </MainLayout>
      </div>
    </>
  );
}

ActionsPage.getInitialProps = async ({ req }) => {
  const response = await fetch(
    "http://195.49.215.130:8081/api/front/news/allNews"
  );
  const news: INews = (await response.json()) ?? [];
  const responseReviews = await fetch(
    "http://195.49.215.130:8081/api/front/review/allReviews"
  );
  const reviews: IReview[] = (await responseReviews.json()) ?? [];
  const responseAnalysis = await fetch(
    "http://195.49.215.130:8081/api/front/analysis/allAnalysis"
  );
  const analysis: IAnalys[] | any = (await responseAnalysis.json()) ?? [];
  return { news, reviews, analysis };
};