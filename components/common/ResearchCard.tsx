import React, { useContext } from "react";
import Link from "next/link";
import { IAnalys } from "../../Interfaces/IAnalys";
import { HeaderContext } from "../../context/HeaderContext";

interface Props {
  research: IAnalys;
}

export function ResearchCard(props: Props) {
  const { basket, add } = useContext(HeaderContext);

  function addToBasketHandler(event) {
    add(props.research);
    animateAdd(event.target.parentElement);
  }
  const animateAdd = (product: any) => {
    const cloneProduct = product.cloneNode(true);
    cloneProduct.style.position = "fixed";
    cloneProduct.style.pointerEvents = "none";
    const productPosition = getPosition(product);

    cloneProduct.style.top = `${productPosition.top}px`;
    cloneProduct.style.left = `${productPosition.left}px`;
    cloneProduct.style.transition = "transform 0.8s ease, opacity 1s ease";
    cloneProduct.style.transform = `translate3d(0px, 0px, 0px) scale(1)`;
    cloneProduct.style.height = `auto`;
    cloneProduct.style.zIndex = `1000001`;
    product.parentElement.insertAdjacentElement("beforeend", cloneProduct);
    const basketPosition = getPosition(basket.current);
    const cloneProductPosition = getPosition(cloneProduct);
    cloneProduct.style.transformOrigin = "top right";
    cloneProduct.style.transform = `translate3d(${
      basketPosition.x -
      cloneProductPosition.x -
      cloneProductPosition.width / 1.2
    }px, ${basketPosition.y - cloneProductPosition.y}px, 0px) scale(0)`;
    cloneProduct.style.opacity = `0`;
    setTimeout(() => {
      cloneProduct.remove();
    }, 1000 + Math.abs(basketPosition.x - cloneProductPosition.x));
  };
  const getPosition = (element: any) => {
    return element.getClientRects()[0];
  };
  return (
    <>
      <div
        data-item-id={props.research.research_id}
        className="analysis__item analysis-item"
      >
        <h3 className="analysis-item__title">
          <Link
            href={`/researches/[link]`}
            as={`/researches/${props.research.link}`}
          >
            <a>{props.research.title}</a>
          </Link>
        </h3>
        <div className="analysis-item__info-box">
          <div className="analysis-item__info _icon-clock">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path d="M15 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z" />
            </svg>
            {props.research.terms_of_analyzes.title}
          </div>
          <div className="analysis-item__info _icon-blood">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C9.87827 22 7.84344 21.1571 6.34315 19.6569C4.84285 18.1566 4 16.1217 4 14C4 10.498 6.71 7.697 9.093 5.13L12 2L14.907 5.13C17.29 7.698 20 10.499 20 14C20 16.1217 19.1571 18.1566 17.6569 19.6569C16.1566 21.1571 14.1217 22 12 22V22Z"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {props.research.biomaterial.title}
          </div>
        </div>
        <div className="analysis-item__price-box">
          <div className="analysis-item__price-id">
            {props.research.research_id}
          </div>
          <div className="analysis-item__price-value">
            {props.research.price} ₸
          </div>
        </div>
        <button
          onClick={addToBasketHandler}
          className="analysis-item__add"
        ></button>
      </div>
    </>
  );
}
