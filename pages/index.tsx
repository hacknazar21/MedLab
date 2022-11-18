import FirstScreen from "../components/Index/FirstScreen";
import Banners from "../components/Index/Banners";
import Popular from "../components/Index/Popular";
import { Catalog } from "../components/Index/Catalog";
import Reviews from "../components/Index/Reviews";
import News from "../components/Index/News";
import Info from "../components/Index/Info";
import { Map } from "../components/Index/Map";
import { IBanners } from "../Interfaces/IBanner";
import { INews } from "../Interfaces/INews";
import banner1 from "../src/img/baners/01.png";
import banner2 from "../src/img/baners/02.png";
import { IReview } from "../Interfaces/IReview";
import { IAnalys } from "../Interfaces/IAnalys";
import { MainLayout } from "../layouts/mainLayout";
import Head from "next/head";
import Packages from "../components/Index/Packages";
import { IPackage } from "../Interfaces/IPackage";
import { GetServerSideProps } from "next";
import Promotion from "../components/Index/Promotion";
import { useEffect, useState } from "react";
import useHttp from "../hooks/hooks.http";

export default function Index({
  news,
  reviews,
  analysis,
  packages,
  promotions,
}) {
  const [researches, setResearches] = useState([...analysis.results]);

  return (
    <>
      <Head>
        <title>Главная</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper">
        <MainLayout>
          <FirstScreen />
          <Promotion promotions={promotions} />
          <Packages packages={packages} />
          <Popular analysis={analysis.results} />
          <Catalog
            pageCount={analysis.count}
            setter={setResearches}
            analysis={researches}
          />
          <Reviews reviews={reviews} />
          <News news={news} />
          <Info />
          <Map mapSrc={"https://yandex.kz/map-widget/v1/-/CCURqDxLOA"} />
        </MainLayout>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch(
      process.env.API_HOST + "/api/front/news/allNews"
    );
    const news: INews = (await response.json())?.results ?? [];

    const responseReviews = await fetch(
      process.env.API_HOST + "/api/front/review/allReviews"
    );
    const reviews: IReview[] = (await responseReviews.json())?.results ?? [];

    const responseAnalysis = await fetch(
      process.env.API_HOST + "/api/front/analyse/allAnalyse"
    );
    const analysis = (await responseAnalysis.json()) ?? [];

    const responsePackages = await fetch(
      process.env.API_HOST + "/api/front/package/allPackages"
    );
    const packages: IPackage[] | any =
      (await responsePackages.json())?.results ?? [];

    const responsePromotions = await fetch(
      process.env.API_HOST + "/api/front/promotion/allPromotions"
    );
    const promotions: IPackage[] | any =
      (await responsePromotions.json())?.results ?? [];
    return {
      props: {
        news,
        analysis,
        reviews,
        packages,
        promotions,
      },
    };
  } catch (e) {
    console.log(e.message);
  }
  return { props: { news: [], reviews: [], analysis: [] } };
};
