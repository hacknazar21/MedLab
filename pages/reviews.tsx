import { GetServerSideProps } from "next";
import { MainLayout } from "../layouts/mainLayout";
import { Sugar } from "../layouts/sugarLayout";
import Head from "next/head";
import { IReview } from "../Interfaces/IReview";
import PageTitle from "../components/common/PageTitle";
import Reviews from "../components/Reviews/Reviews";
import { useState } from "react";

export default function ReviewsPage({ reviews }) {
  const [objects, setObjects] = useState([...reviews.results]);
  return (
    <>
      <Head>
        <title>Отзывы</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper reviews-page">
        <MainLayout>
          <Sugar
            sugar={[
              { title: "Главная", href: "/" },
              { title: "Отзывы", href: "" },
            ]}
          />
          <PageTitle title={"Отзывы"} />
          <Reviews
            pageCount={reviews.count}
            setter={setObjects}
            reviews={objects}
          />
        </MainLayout>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const responseReviews = await fetch(
    `${process.env.API_HOST}/api/front/review/allReviews`
  );
  const reviews: IReview[] = (await responseReviews.json()) || [];

  return { props: { reviews } };
};
