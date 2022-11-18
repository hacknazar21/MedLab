import React from "react";
import { IAnalys } from "../../Interfaces/IAnalys";
import Head from "next/head";
import { Sugar } from "../../layouts/sugarLayout";
import { MainLayout } from "../../layouts/mainLayout";
import ResearchSlider from "../../components/Research/ResearchSlider";
import ResearchMain from "../../components/Research/ResearchMain";
import ResearchPopular from "../../components/Research/ResearchPopular";
import { GetServerSideProps } from "next";

interface Props {
  oneAnalysis: IAnalys;
}
export default function AnalysisOne(props: Props) {
  return (
    <>
      <Head>
        <title>{props.oneAnalysis.long_title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper another">
        <MainLayout>
          <Sugar
            sugar={[
              { title: "Главная", href: "/" },
              { title: "Каталог", href: "/researches" },
              { title: props.oneAnalysis.long_title, href: "" },
            ]}
          />
          <main className="page research">
            {props.oneAnalysis.is_unique && (
              <section className="research__section">
                <div className="research__container">
                  <ResearchSlider
                    banner_images={props.oneAnalysis.banner_images}
                    long_title={props.oneAnalysis.long_title}
                  />
                </div>
              </section>
            )}
            <section className="research__section">
              <div className="research__container">
                <ResearchMain research={props.oneAnalysis} />
              </div>
            </section>
            <section className="research__section">
              <div className="research__container">
                <ResearchPopular />
              </div>
            </section>
          </main>
        </MainLayout>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { link } = query;
  try {
    const responseOneAnalysis = await fetch(
      `${process.env.API_HOST}/api/front/analyse/${link}`
    );
    const oneAnalysis = await responseOneAnalysis.json();
    return { props: { oneAnalysis } };
  } catch (e) {
    console.log(e.message);
    return { props: { oneAnalysis: {} } };
  }
};
