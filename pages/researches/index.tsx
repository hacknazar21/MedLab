import { GetServerSideProps } from "next";
import { IAnalys } from "../../Interfaces/IAnalys";
import { MainLayout } from "../../layouts/mainLayout";
import { Sugar } from "../../layouts/sugarLayout";
import Head from "next/head";
import { Catalog } from "../../components/Catalog/Catalog";
import PageTitle from "../../components/common/PageTitle";

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
          <PageTitle title={"Каталог анализов"} />
          <Catalog researches={analysis} />
        </MainLayout>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const responseAnalysis = await fetch(
    `${process.env.API_HOST}/api/front/analyse/allAnalyse`
  );
  const analysis: IAnalys[] | any =
    (await responseAnalysis.json())?.results ?? [];
  return {
    props: { analysis },
  };
};