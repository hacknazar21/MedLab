import React, { useContext, useEffect, useState } from "react";
import { IAnalys } from "../../Interfaces/IAnalys";
import { Analys } from "./Analysis/Analys";
import Filter from "./Analysis/Filter";
import { HeaderContext } from "../../context/HeaderContext";
interface OwnProps {
  analysis: IAnalys[];
}

type Props = OwnProps;

export function Analysis(props: Props) {
  const [analysis, setAnalysis] = useState(props.analysis);
  const [number, setNumber] = useState(props.analysis.length);
  const { basket, add } = useContext(HeaderContext);

  const handleButtonClick = (event: any) => {
    const analysisId = event.target.parentElement.dataset.itemId;

    for (const analysisItem of analysis) {
      if (analysisItem.research_id == analysisId) {
        add(analysisItem);
      }
    }
    animateAdd(event.target.parentElement);
  };
  const animateAdd = (product: any) => {
    const cloneProduct = product.cloneNode(true);
    cloneProduct.style.position = "fixed";
    cloneProduct.style.pointerEvents = "none";
    const productPosition = getPosition(product);

    cloneProduct.style.top = `${productPosition.top}px`;
    cloneProduct.style.left = `${productPosition.left}px`;
    cloneProduct.style.transition = "transform 0.8s ease, opacity 0.8s ease";
    cloneProduct.style.transform = `translate3d(0px, 0px, 0px) scale(1)`;
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
    }, 500);
  };
  const getPosition = (element: any) => {
    return element.getClientRects()[0];
  };

  useEffect(() => {
    let counter = 0;
    analysis.forEach((analysisItem: IAnalys) => {
      if (!analysisItem.hidden) {
        counter++;
      }
    });
    setNumber(counter);
  }, [analysis]);

  const callback = (data: any) => {
    const tagsFilter: any = [];
    for (const dataKey in data) {
      if (tagsFilter.indexOf(data[dataKey]) === -1)
        tagsFilter.push(data[dataKey]);
    }
    setAnalysis((state: any) => {
      return state.map((analysisItem: IAnalys) => {
        if (!tagsFilter) {
          // условие #1
          analysisItem.hidden = true;
          return analysisItem;
        }

        for (let i = 0; i < tagsFilter.length; i++) {
          for (let j = 0; j < analysisItem.tags.split(",").length; j++) {
            if (
              analysisItem.tags
                .split(",")
                [j].toLowerCase()
                .split(/\s+/)
                .join("")
                .indexOf(
                  tagsFilter[i] != undefined
                    ? tagsFilter[i].toLowerCase().split(/\s+/).join("")
                    : ""
                ) !== -1
            ) {
              break;
            }
            if (j === analysisItem.tags.split(",").length - 1) {
              analysisItem.hidden = true;
              return analysisItem;
            }
          }
        }
        analysisItem.hidden = false;
        return analysisItem;
      });
    });
  };

  return (
    <section className="page__analysis analysis">
      <div className="analysis__container">
        <div className="analysis__box">
          <Filter callback={callback} number={number} />
          <div className="analysis__grid">
            {analysis.map((analys: IAnalys, id) => {
              return (
                <Analys
                  id={id}
                  research={analys}
                  key={id}
                  buttonClick={handleButtonClick}
                />
              );
            })}
            {number === 0 && "По вашему запросу ничего не нашлось"}
          </div>
        </div>
      </div>
    </section>
  );
}
