import Link from "next/link";
import { MainLayout } from "../layouts/mainLayout";
import { Sugar } from "../layouts/sugarLayout";
import Head from "next/head";
import { About } from "../components/About/About";
import PageTitle from "../components/common/PageTitle";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>О нашей компании</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper about-page">
        <MainLayout>
          <Sugar
            sugar={[
              { title: "Главная", href: "/" },
              { title: "О нас", href: "" },
            ]}
          />
          <PageTitle title={"О нашей компании"} />
          <About />
        </MainLayout>
      </div>
    </>
  );
}
