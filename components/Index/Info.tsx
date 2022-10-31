import React from "react";
import { IInfo } from "../../Interfaces/IInfo";
import Image from "../../src/img/microscope.png";
import { GetServerSideProps } from "next";

interface Props {
  info: IInfo;
}
export function Info(props: Props) {
  function clickHandler(event: React.SyntheticEvent<HTMLButtonElement>) {
    const buttonId = event.currentTarget.dataset.buttonId;
    const tabsBox = event.currentTarget.closest(".info__main");
    if (tabsBox) {
      const actives = tabsBox.querySelectorAll(".active");
      if (actives.length) {
        actives.forEach((active) => {
          active.classList.remove("active");
        });
      }
      const activeCurrent = tabsBox.querySelector(
        `.info__text[data-content-id="${buttonId}"]`
      );
      if (activeCurrent) {
        activeCurrent.classList.add("active");
      }
    }
    event.currentTarget.classList.add("active");
  }
  return (
    <section className="page__info info">
      <div className="info__container">
        <div className="info__box">
          <div className="info__main">
            <div className="info__tabs-buttons">
              <button
                className={"info__tabs-button active"}
                onClick={clickHandler}
                data-button-id="0"
              >
                Удобство
              </button>
              <button
                data-button-id="1"
                className={"info__tabs-button"}
                onClick={clickHandler}
              >
                Качество
              </button>
              <button
                data-button-id="2"
                className={"info__tabs-button"}
                onClick={clickHandler}
              >
                Надежность
              </button>
            </div>
            <div data-content-id="0" className="info__text active">
              <div className="info__text-title">
                Лучшее оборудования для проверки
              </div>
              <div className="info__text-subtitle">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.{" "}
                  <br /> Amet minim mollit non deserunt ullamco est sit aliqua
                  dolor do amet sint. Velit officia consequat duis enim velit
                  mollit. Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="info__text-footer">Работаем с 1988 года</div>
              <div className="info__name">
                Удобство
                <span></span>
              </div>
            </div>
            <div data-content-id="1" className="info__text">
              <div className="info__text-title">
                Лучшее оборудования для проверки
              </div>
              <div className="info__text-subtitle">
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.{" "}
                  <br /> Amet minim mollit non deewgwegewt sit aliqua dolor do
                  amet sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="info__text-footer">Работаем с 1988 года</div>
              <div className="info__name">
                Качество
                <span></span>
              </div>
            </div>
            <div data-content-id="2" className="info__text">
              <div className="info__text-title">
                Лучшее оборудования для проверки
              </div>
              <div className="info__text-subtitle">
                <p>
                  w4gwegewrgewrgerunt ullamco est sit aliqua dolor do amet sint.
                  Velit officia consequat duis enim velit mollit. <br /> Amet
                  minim mollit non deserunt ullamco est sit aliqua dolor do amet
                  sint. Velit officia consequat duis enim velit mollit.
                  Exercitation veniam consequat sunt nostrud amet.
                </p>
              </div>
              <div className="info__text-footer">Работаем с 1988 года</div>
              <div className="info__name">
                Надежность
                <span></span>
              </div>
            </div>
          </div>
          <div className="info__image active">
            <img src={Image.src} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
export const getServerSideProps: GetServerSideProps = async () => {
  try {
    return {
      props: {},
    };
  } catch (e) {
    console.log(e.message);
  }
  return { props: {} };
};
