import * as React from "react";
import Spoiler from "../Spoiler";
import FAQ_img from "../../src/img/faq/faq.png";
import { INews } from "../../Interfaces/INews";
import { IAnalys } from "../../Interfaces/IAnalys";
import { IFAQ } from "../../Interfaces/IFAQ";
interface Props {
  faq: IFAQ[];
}

export function FAQ(props: Props) {
  return (
    <section className="page__faq faq">
      <div className="faq__container">
        <div className="faq__spoilers">
          {props.faq?.map((faq) => {
            return (
              <Spoiler
                className={"faq__spoiler"}
                title={faq.title}
                content={faq.answer}
              />
            );
          })}
        </div>
        <div className="faq__image">
          <img src={FAQ_img.src} alt="" />
        </div>
      </div>
    </section>
  );
}
