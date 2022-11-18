import { MainLayout } from "../../../layouts/mainLayout";
import { Sugar } from "../../../layouts/sugarLayout";
import Head from "next/head";
import { GetServerSideProps } from "next";
import PageTitle from "../../../components/common/PageTitle";
import { IPackage } from "../../../Interfaces/IPackage";
import Package from "../../../components/Packages/Package";
import { FunctionComponent } from "react";
interface OwnProps {
  packageItem: IPackage;
}

type Props = OwnProps;
const PackagePage: FunctionComponent<Props> = ({ packageItem }) => {
  return (
    <>
      <Head>
        <title>{packageItem.name_of_package}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="wrapper actions-page">
        <MainLayout>
          <Sugar
            sugar={[
              { title: "Главная", href: "/" },
              { title: "Пакеты анализов", href: "/researches/packages" },
              { title: packageItem.name_of_package, href: "" },
            ]}
          />
          <PageTitle title={packageItem.name_of_package} />
          <Package packageItem={packageItem} />
        </MainLayout>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { link } = query;
  const responsePackage = await fetch(
    `${process.env.API_HOST}/api/front/package/${link}`
  );
  const packageItem: IPackage = (await responsePackage.json()) ?? {};
  return { props: { packageItem } };
};

export default PackagePage;
