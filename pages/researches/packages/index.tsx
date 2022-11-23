import { GetServerSideProps } from "next";
import { IAnalys } from "../../../Interfaces/IAnalys";
import { MainLayout } from "../../../layouts/mainLayout";
import { Sugar } from "../../../layouts/sugarLayout";
import Head from "next/head";
import { Catalog } from "../../../components/Catalog/Catalog";
import PageTitle from "../../../components/common/PageTitle";
import Packages from "../../../components/Packages/Packages";
import { useState } from "react";

export default function CatalogPage({ packages }) {
  const [objects, setObjects] = useState([...packages.results]);
  return (
    <>
      <Head>
        <title>Пакеты анализов</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper catalog">
        <MainLayout>
          <Sugar
            sugar={[
              { title: "Главная", href: "/" },
              { title: "Пакеты анализов", href: "" },
            ]}
          />
          <PageTitle title={"Пакеты анализов"} />
          <Packages
            pageCount={packages.count}
            setter={setObjects}
            packages={objects}
          />
        </MainLayout>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const responsePackages = await fetch(
    `${process.env.API_HOST}/api/front/package/allPackages`
  );
  const packages: IAnalys[] | any = (await responsePackages.json()) ?? [];
  return {
    props: { packages },
  };
};