// @ts-ignore
import { GetServerSideProps } from "next";
// @ts-ignore
import Link from "next/link";
import { MainLayout } from "../layouts/mainLayout";
import { Sugar } from "../layouts/sugarLayout";
// @ts-ignore
import Head from "next/head";
import { INews } from "../Interfaces/INews";
import { Contacts } from "../components/Contacts/Contacts";
import PageTitle from "../components/common/PageTitle";

export default function ContactsPage({ news }) {
  return (
    <>
      <Head>
        <title>Контакты</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper contacts-page">
        <MainLayout>
          <Sugar
            sugar={[
              { title: "Главная", href: "/" },
              { title: "Контакты", href: "" },
            ]}
          />
          <PageTitle title={"Наши контакты"} />
          <Contacts />
        </MainLayout>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  return { props: {} };
};
