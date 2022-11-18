import React, { FunctionComponent } from "react";
import { IPackage } from "../../Interfaces/IPackage";
import { ResearchPackageCard } from "../common/ResearchPackageCard";
import Pagination from "../common/Pagination";

interface OwnProps {
  packages: IPackage[];
  pageCount: number;
  setter: Function;
}

type Props = OwnProps;

const Packages: FunctionComponent<Props> = ({
  packages,
  pageCount,
  setter,
}) => {
  return (
    <section className="page__packages packages single-page">
      <div className="packages__container">
        <div className="packages__box single-page-box">
          <div className="packages__items single-page-items single-page-items_number_4">
            {packages?.map((packageItem: IPackage) => {
              return (
                <ResearchPackageCard
                  key={packageItem.id}
                  package={packageItem}
                />
              );
            })}
          </div>
          <Pagination
            pageCount={Math.ceil(pageCount) / 8}
            setter={(data) => {
              setter([...data]);
            }}
            link={"/api/front/package/allPackages?page="}
          />
        </div>
      </div>
    </section>
  );
};

export default Packages;
