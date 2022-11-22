import React, { useEffect, useRef, useState } from "react";
import Swiper, { Autoplay } from "swiper";
import { IAnalys } from "../../Interfaces/IAnalys";

interface OwnProps {
  research: IAnalys;
}

type Props = OwnProps;

export default function ResearchMain(props: Props) {
  const [isPatient, setIsPatient] = useState(true);
  return (
    <div className="research__main research-main">
      <div data-item-id={1} className="research-main__aside research-aside">
        <div className="research-aside__header">
          <h2 className="research-aside__title">{props.research.long_title}</h2>
          <div className="research-aside__subtitile">
            <p>{props.research.title}</p>
          </div>
        </div>
        <div className="research-aside__content">
          <div className="research-aside__info-items">
            <div className="research-aside__info-item">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.1101 17.49L15.0001 8.73V4H16.0001C16.2654 4 16.5197 3.89464 16.7073 3.70711C16.8948 3.51957 17.0001 3.26522 17.0001 3C17.0001 2.73478 16.8948 2.48043 16.7073 2.29289C16.5197 2.10536 16.2654 2 16.0001 2H8.00015C7.73493 2 7.48058 2.10536 7.29304 2.29289C7.1055 2.48043 7.00015 2.73478 7.00015 3C7.00015 3.26522 7.1055 3.51957 7.29304 3.70711C7.48058 3.89464 7.73493 4 8.00015 4H9.00015V8.73L3.89015 17.49C3.62469 17.9457 3.48406 18.4634 3.48244 18.9908C3.48081 19.5182 3.61825 20.0367 3.88089 20.494C4.14354 20.9514 4.52211 21.3314 4.97844 21.5958C5.43478 21.8602 5.95275 21.9996 6.48015 22H17.4801C18.0075 21.9996 18.5255 21.8602 18.9818 21.5958C19.4382 21.3314 19.8168 20.9514 20.0794 20.494C20.342 20.0367 20.4795 19.5182 20.4779 18.9908C20.4762 18.4634 20.3356 17.9457 20.0701 17.49H20.1101ZM10.8601 9.49C10.9483 9.3415 10.9966 9.17268 11.0001 9V4H13.0001V9C13.002 9.17609 13.0503 9.34857 13.1401 9.5L14.0001 11H10.0001L10.8601 9.49ZM18.3801 19.49C18.2929 19.6411 18.1676 19.7668 18.0167 19.8545C17.8659 19.9422 17.6947 19.9889 17.5201 19.99H6.52015C6.34563 19.9889 6.17443 19.9422 6.02356 19.8545C5.87269 19.7668 5.7474 19.6411 5.66015 19.49C5.57238 19.338 5.52617 19.1655 5.52617 18.99C5.52617 18.8145 5.57238 18.642 5.66015 18.49L8.83015 13H15.1801L18.3801 18.5C18.4679 18.652 18.5141 18.8245 18.5141 19C18.5141 19.1755 18.4679 19.348 18.3801 19.5V19.49ZM10.0001 15C9.80236 15 9.60902 15.0586 9.44457 15.1685C9.28013 15.2784 9.15195 15.4346 9.07627 15.6173C9.00058 15.8 8.98077 16.0011 9.01936 16.1951C9.05795 16.3891 9.15319 16.5673 9.29304 16.7071C9.43289 16.847 9.61107 16.9422 9.80506 16.9808C9.99904 17.0194 10.2001 16.9996 10.3828 16.9239C10.5656 16.8482 10.7217 16.72 10.8316 16.5556C10.9415 16.3911 11.0001 16.1978 11.0001 16C11.0001 15.7348 10.8948 15.4804 10.7073 15.2929C10.5197 15.1054 10.2654 15 10.0001 15ZM14.0001 16C13.8024 16 13.609 16.0586 13.4446 16.1685C13.2801 16.2784 13.152 16.4346 13.0763 16.6173C13.0006 16.8 12.9808 17.0011 13.0194 17.1951C13.0579 17.3891 13.1532 17.5673 13.293 17.7071C13.4329 17.847 13.6111 17.9422 13.8051 17.9808C13.999 18.0194 14.2001 17.9996 14.3828 17.9239C14.5656 17.8482 14.7217 17.72 14.8316 17.5556C14.9415 17.3911 15.0001 17.1978 15.0001 17C15.0001 16.7348 14.8948 16.4804 14.7073 16.2929C14.5197 16.1054 14.2654 16 14.0001 16Z"
                    fill="#DCEEF9"
                  />
                </svg>
              </span>
              исследование: <span>{props.research.research_id}</span>
            </div>
            <div className="research-aside__info-item">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                    fill="#DCEEF9"
                  />
                </svg>
              </span>
              срок исследования:{" "}
              <span>{props.research.terms_of_analyzes.title}</span>
            </div>
            <div className="research-aside__info-item">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 22C9.87827 22 7.84344 21.1571 6.34315 19.6569C4.84285 18.1566 4 16.1217 4 14C4 10.498 6.71 7.697 9.093 5.13L12 2L14.907 5.13C17.29 7.698 20 10.499 20 14C20 16.1217 19.1571 18.1566 17.6569 19.6569C16.1566 21.1571 14.1217 22 12 22V22Z"
                    stroke="#DCEEF9"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              биоматериал: <span>{props.research.biomaterial.title}</span>
            </div>
          </div>
          <a
            href={props.research.document_img}
            target="_blank"
            className="research-aside__info-scalable-img"
          >
            <img src={props.research.document_img} alt="" />
          </a>
        </div>
        <div className="research-aside__footer">
          <div className="research-aside__price">
            <p>стоимость:</p>
            <span>{props.research.price} тг</span>
          </div>
          <button className="research-aside__add">Добавить в корзину</button>
        </div>
      </div>
      <div className="research-main__content-box">
        <div className="research-main__content-header">
          <button
            onClick={() => {
              setIsPatient(true);
            }}
            className={
              "research-main__content-header-action _icon-lab " +
              (isPatient ? "active" : "") +
              (props.research.is_unique ? " unique" : "")
            }
          >
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.2535 16.2498C15.1063 10.8875 12.5999 9.47415 12.5999 6.7998V3.6498H13.1249C13.2642 3.6498 13.3977 3.59449 13.4962 3.49604C13.5946 3.39758 13.6499 3.26404 13.6499 3.1248V2.0748C13.6499 1.93557 13.5946 1.80203 13.4962 1.70357C13.3977 1.60512 13.2642 1.5498 13.1249 1.5498H7.87495C7.73571 1.5498 7.60217 1.60512 7.50372 1.70357C7.40526 1.80203 7.34995 1.93557 7.34995 2.0748V3.1248C7.34995 3.26404 7.40526 3.39758 7.50372 3.49604C7.60217 3.59449 7.73571 3.6498 7.87495 3.6498H8.39995V6.7998C8.39995 9.47415 5.8936 10.8875 3.74635 16.2498C3.0628 17.9561 1.3072 20.4498 10.4999 20.4498C19.6927 20.4498 17.9371 17.9561 17.2535 16.2498ZM15.5557 18.0884C14.8186 18.3089 13.3517 18.5598 10.4999 18.5598C7.64815 18.5598 6.1813 18.3089 5.4442 18.0884C5.18275 18.0107 5.0809 17.7072 5.1733 17.429C5.4043 16.7255 5.84005 15.5096 6.65485 14.1519C8.64565 10.835 10.711 14.6738 12.4298 14.6738C14.1487 14.6738 13.6772 13.0347 14.345 14.1519C14.9596 15.1856 15.4565 16.2848 15.8266 17.429C15.919 17.7072 15.8171 18.0096 15.5557 18.0884Z"
                fill="white"
              />
            </svg>
            Для пациентов
          </button>
          {props.research.is_unique ? (
            <button
              onClick={() => {
                setIsPatient(false);
              }}
              className={
                "research-main__content-header-action _icon-lab " +
                (!isPatient ? "active" : "")
              }
            >
              Для врачей
            </button>
          ) : (
            ""
          )}
        </div>
        <div className="research-main__content-main">
          <div className="research-main__content-main-item">
            <h2 className="research-main__content-main-title">Описание:</h2>
            <div className="research-main__content-main-description">
              <p>
                {isPatient
                  ? props.research.description_patient
                  : props.research.description_doctor}
              </p>
            </div>
          </div>
          <div className="research-main__content-main-item">
            <h2 className="research-main__content-main-title">
              Подготовка к анализу:
            </h2>
            <div className="research-main__content-main-description">
              <p>
                {isPatient
                  ? props.research.preparation_patient
                  : props.research.preparation_doctor}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
