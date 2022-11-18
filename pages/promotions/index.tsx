import Banners from "../../components/Index/Banners";
import Link from "next/link";
import { MainLayout } from "../../layouts/mainLayout";
import { Sugar } from "../../layouts/sugarLayout";
import Head from "next/head";
import Promotions from "../../components/Promotions/Promotions";
import { IPackage } from "../../Interfaces/IPackage";
import { useEffect } from "react";
import { GetServerSideProps } from "next";
import PageTitle from "../../components/common/PageTitle";

export default function PromotionsPage({ promotions }) {
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
          <PageTitle title={"Акции"} />
          <Promotions promotions={promotions} />
        </MainLayout>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const responsePromotions = await fetch(
    process.env.API_HOST + "/api/front/promotion/allPromotions"
  );
  const promotions: IPackage[] | any =
    (await responsePromotions.json())?.results ?? [];
  return { props: { promotions } };
};
