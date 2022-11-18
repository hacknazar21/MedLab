import Banners from "../../components/Index/Banners";
import Link from "next/link";
import { MainLayout } from "../../layouts/mainLayout";
import { Sugar } from "../../layouts/sugarLayout";
import Head from "next/head";
import Promotions from "../../components/Promotions/Promotions";
import { IPackage } from "../../Interfaces/IPackage";
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import { IPromotion } from "../../Interfaces/IPromotion";
import Promotion from "../../components/Promotions/Promotion";
import PageTitle from "../../components/common/PageTitle";
import { INews } from "../../Interfaces/INews";
import SingleNews from "../../components/News/SingleNews";

export default function PromotionPage({ news }) {
  useEffect(() => {
    console.log(news);
  }, []);
  return (
    <>
      <Head>
        <title>{news.title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper actions-page">
        <MainLayout>
          <Sugar
            sugar={[
              { title: "Главная", href: "/" },
              { title: "Новости", href: "/news" },
              { title: news.title, href: "" },
            ]}
          />
          <PageTitle title={news.title} />
          <SingleNews news={news} />
        </MainLayout>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { link } = query;
  const responseNews = await fetch(
    `${process.env.API_HOST}/api/front/news/${link}`
  );
  const news: INews = (await responseNews.json()) ?? {};
  return { props: { news } };
};
