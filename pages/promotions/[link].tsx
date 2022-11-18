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

export default function PromotionPage({ promotion }) {
  useEffect(() => {
    console.log(promotion);
  }, []);
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
              { title: "Акции", href: "/promotions" },
              { title: promotion.title, href: "" },
            ]}
          />
          <PageTitle title={promotion.title} />
          <Promotion promotion={promotion} />
        </MainLayout>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { link } = query;
  const responsePromotion = await fetch(
    `${process.env.API_HOST}/api/front/promotion/${link}`
  );
  const promotion: IPromotion = (await responsePromotion.json()) ?? {};
  return { props: { promotion } };
};
