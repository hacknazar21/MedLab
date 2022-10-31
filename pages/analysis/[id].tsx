import React from "react";
import { IAnalys } from "../../Interfaces/IAnalys";
import Head from "next/head";
import { Sugar } from "../../layouts/sugarLayout";
import { MainLayout } from "../../layouts/mainLayout";
import ResearchSlider from "../../components/Research/ResearchSlider";
import ResearchMain from "../../components/Research/ResearchMain";
import ResearchPopular from "../../components/Research/ResearchPopular";

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
              { title: "Обычные анализы", href: "/catalog" },
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

export async function getServerSideProps(context) {
  const link = context.query.id;
  let oneAnalysis = {};
  try {
    const responseOneAnalysis = await fetch(
      `http://195.49.215.130/api/front/analyse/${link}`
    );
    oneAnalysis = await responseOneAnalysis.json();
    console.log(oneAnalysis);
  } catch (e) {
    console.log(e.message);
  }
  return { props: { oneAnalysis } };
}
