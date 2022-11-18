import Link from "next/link";
import { MainLayout } from "../layouts/mainLayout";
import { Sugar } from "../layouts/sugarLayout";
import Head from "next/head";
import { FAQ } from "../components/FAQ/FAQ";
import { IFAQ } from "../Interfaces/IFAQ";
import { GetServerSideProps } from "next";
import PageTitle from "../components/common/PageTitle";

export default function FAQPage({ faq }) {
  return (
    <>
      <Head>
        <title>Вопросы и ответы</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper contacts-page">
        <MainLayout>
          <Sugar
            sugar={[
              { title: "Главная", href: "/" },
              { title: "Вопросы и ответы", href: "" },
            ]}
          />
          <PageTitle title={"Вопросы и ответы"} />
          <FAQ faq={faq} />
        </MainLayout>
      </div>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const response = await fetch(
      `${process.env.API_HOST}/api/front/qaa/allQaA`
    );
    const faq: IFAQ = (await response.json())?.results ?? [];
    console.log(faq);
    return { props: { faq } };
  } catch (e) {
    console.log(e.message);
  }
  return { faq: [] };
};
