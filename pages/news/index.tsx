import { GetServerSideProps } from "next";
import { MainLayout } from "../../layouts/mainLayout";
import { Sugar } from "../../layouts/sugarLayout";
import Head from "next/head";
import { INews } from "../../Interfaces/INews";
import PageTitle from "../../components/common/PageTitle";
import News from "../../components/News/News";
import { useState } from "react";

export default function NewsPage({ news }) {
  const [objects, setObjects] = useState([...news.results]);
  return (
    <>
      <Head>
        <title>Новости</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper news-page">
        <MainLayout>
          <Sugar
            sugar={[
              { title: "Главная", href: "/" },
              { title: "Новости", href: "" },
            ]}
          />
          <PageTitle title={"Новости"} />
          <News pageCount={news.count} setter={setObjects} news={objects} />
        </MainLayout>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const response = await fetch(
      `${process.env.API_HOST}/api/front/news/allNews`
    );
    const news: INews[] = (await response.json()) ?? [];
    return { props: { news } };
  } catch (e) {
    return { props: { news: [] } };
  }
};
