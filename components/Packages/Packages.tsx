import React, { FunctionComponent } from "react";
import { IPackage } from "../../Interfaces/IPackage";
import { ResearchPackageCard } from "../common/ResearchPackageCard";

interface OwnProps {
  packages: IPackage[];
}

type Props = OwnProps;

const Packages: FunctionComponent<Props> = ({ packages }) => {
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
          <div className="promotions__pagination single-page-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Packages;
