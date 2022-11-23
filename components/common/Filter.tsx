import Select from "./Select/Select";
import React, { useEffect, useState } from "react";
import useHttp from "../../hooks/hooks.http";
import { ICategories } from "../../Interfaces/ICategories";
import { Loading } from "../Loading";

interface OwnProps {
  setter: Function;
  setFilterUrl: Function;
}

type Props = OwnProps;
export default function Filter(props: Props) {
  const { request, loading } = useHttp();
  const [categories, setCategories] = useState([]);
  const [bios, setBios] = useState([]);
  const [childCategories, setChildCategories] = useState([]);
  const [filterLabels, setFilterLabels] = useState({});
  function handleInputChange(e) {
    try {
      if (e.target.name === "category") {
        if (e.target.value !== "all") {
          const childCats = categories.filter(
            (category) => category.id === e.target.value
          );
          if (
            childCats &&
            childCats.length &&
            childCats[0] &&
            childCats[0].child_categories
          )
            setChildCategories([...childCats[0]?.child_categories]);
          else {
            setChildCategories([]);
          }
        } else setChildCategories([]);
      }
    } catch (e) {
      console.log(e);
    }
    if (e.target.value !== "all") {
      setFilterLabels((prevState) => ({
        ...prevState,
        ...{
          [e.target.name === "subcategory" ? "category" : e.target.name]:
            e.target.value,
        },
      }));
    } else {
      setFilterLabels((prevState) => {
        for (const prevStateKey in prevState) {
          if (prevStateKey === e.target.name) {
            delete prevState[prevStateKey];
            break;
          }
        }
        return { ...prevState };
      });
    }
  }
  useEffect(() => {
    let filterUrl = "/api/front/analyse/allAnalyse?";
    for (const filterLabelsItem in filterLabels) {
      filterUrl +=
        `${filterLabelsItem}=${filterLabels[filterLabelsItem]}` + "&";
    }
    (async () => {
      try {
        const data = await request(filterUrl);
        console.log(data);
        props.setter({ ...data });
      } catch (e) {}
    })();
    props.setFilterUrl(filterUrl);
  }, [JSON.stringify(filterLabels)]);
  useEffect(() => {
    (async () => {
      try {
        const data: ICategories = await request(
          "/api/front/category/allCategories",
          "GET",
          null,
          {
            accept: "application/json",
          }
        );
        const dataBio = await request(
          "/api/front/biomaterial/allBiomaterials",
          "GET",
          null,
          {
            accept: "application/json",
          }
        );
        setCategories([...data.results]);
        setBios([...dataBio.results]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <div className="analysis__filter-box analysis-filter">
      {loading && <Loading />}
      <div className="analysis-filter__form filter-form">
        <div className="filter-form__input-box">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.7099 20.2904L17.9999 16.6104C19.44 14.8148 20.1374 12.5357 19.9487 10.2417C19.76 7.94769 18.6996 5.81318 16.9854 4.27704C15.2713 2.7409 13.0337 1.9199 10.7328 1.98286C8.43194 2.04582 6.24263 2.98795 4.61505 4.61553C2.98747 6.24311 2.04534 8.43243 1.98237 10.7333C1.91941 13.0342 2.74041 15.2718 4.27655 16.9859C5.81269 18.7001 7.94721 19.7605 10.2412 19.9492C12.5352 20.1379 14.8143 19.4405 16.6099 18.0004L20.2899 21.6804C20.3829 21.7741 20.4935 21.8485 20.6153 21.8993C20.7372 21.9501 20.8679 21.9762 20.9999 21.9762C21.1319 21.9762 21.2626 21.9501 21.3845 21.8993C21.5063 21.8485 21.6169 21.7741 21.7099 21.6804C21.8901 21.4939 21.9909 21.2447 21.9909 20.9854C21.9909 20.7261 21.8901 20.4769 21.7099 20.2904ZM10.9999 18.0004C9.61544 18.0004 8.26206 17.5899 7.11091 16.8207C5.95977 16.0515 5.06256 14.9583 4.53275 13.6792C4.00293 12.4001 3.86431 10.9926 4.13441 9.63476C4.4045 8.27689 5.07119 7.02961 6.05016 6.05065C7.02912 5.07168 8.27641 4.40499 9.63427 4.1349C10.9921 3.8648 12.3996 4.00342 13.6787 4.53324C14.9578 5.06305 16.051 5.96026 16.8202 7.1114C17.5894 8.26255 17.9999 9.61592 17.9999 11.0004C17.9999 12.8569 17.2624 14.6374 15.9497 15.9501C14.6369 17.2629 12.8564 18.0004 10.9999 18.0004Z"
              fill="#1A4DCA"
            />
          </svg>
          <input
            type="text"
            name="search"
            placeholder="Поиск исследования"
            className="filter-form__input"
            onInput={handleInputChange}
          />
        </div>
        <div className="filter-form__input-box ">
          <Select
            onSelect={handleInputChange}
            title={"Выбрать категорию"}
            name={"category"}
            selectClass={""} // Set custom class name for select...
            items={[
              {
                name: "Все категории",
                value: "all",
              },
              ...categories.map((category) => ({
                name: category.title || "Без значения",
                value: category.id,
              })),
            ]}
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2ZM11 20H4V13H11V20ZM11 11H4V4H11V11ZM20 20H13V13H20V20ZM20 11H13V4H20V11Z"
                  fill="#1A4DCA"
                />
              </svg>
            }
          />
        </div>
        {childCategories.length > 0 && (
          <div className="filter-form__input-box ">
            <Select
              onSelect={handleInputChange}
              title={"Выбрать подкатегорию"}
              name={"subcategory"}
              selectClass={""} // Set custom class name for select...
              items={[
                {
                  name: "Все подкатегории",
                  value: "all",
                },
                ...childCategories.map((category) => ({
                  name: category.title || "Без значения",
                  value: category.id,
                })),
              ]}
              icon={
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 2H3C2.73478 2 2.48043 2.10536 2.29289 2.29289C2.10536 2.48043 2 2.73478 2 3V21C2 21.2652 2.10536 21.5196 2.29289 21.7071C2.48043 21.8946 2.73478 22 3 22H21C21.2652 22 21.5196 21.8946 21.7071 21.7071C21.8946 21.5196 22 21.2652 22 21V3C22 2.73478 21.8946 2.48043 21.7071 2.29289C21.5196 2.10536 21.2652 2 21 2ZM11 20H4V13H11V20ZM11 11H4V4H11V11ZM20 20H13V13H20V20ZM20 11H13V4H20V11Z"
                    fill="#1A4DCA"
                  />
                </svg>
              }
            />
          </div>
        )}
        <div className="filter-form__input-box ">
          <Select
            onSelect={handleInputChange}
            title={"Выбрать биоматериал"}
            name={"biomaterial"}
            selectClass={""} // Set custom class name for select...
            items={[
              {
                name: "Любой биоматериал",
                value: "all",
              },
              ...bios.map((bio) => ({
                name: bio.title || "Без значения",
                value: bio.id,
              })),
            ]}
            icon={
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1101 17.49L15.0001 8.73V4H16.0001C16.2654 4 16.5197 3.89464 16.7073 3.70711C16.8948 3.51957 17.0001 3.26522 17.0001 3C17.0001 2.73478 16.8948 2.48043 16.7073 2.29289C16.5197 2.10536 16.2654 2 16.0001 2H8.00015C7.73493 2 7.48058 2.10536 7.29304 2.29289C7.1055 2.48043 7.00015 2.73478 7.00015 3C7.00015 3.26522 7.1055 3.51957 7.29304 3.70711C7.48058 3.89464 7.73493 4 8.00015 4H9.00015V8.73L3.89015 17.49C3.62469 17.9457 3.48406 18.4634 3.48244 18.9908C3.48081 19.5182 3.61825 20.0367 3.88089 20.494C4.14354 20.9514 4.52211 21.3314 4.97844 21.5958C5.43478 21.8602 5.95275 21.9996 6.48015 22H17.4801C18.0075 21.9996 18.5255 21.8602 18.9818 21.5958C19.4382 21.3314 19.8168 20.9514 20.0794 20.494C20.342 20.0367 20.4795 19.5182 20.4779 18.9908C20.4762 18.4634 20.3356 17.9457 20.0701 17.49H20.1101ZM10.8601 9.49C10.9483 9.3415 10.9966 9.17268 11.0001 9V4H13.0001V9C13.002 9.17609 13.0503 9.34857 13.1401 9.5L14.0001 11H10.0001L10.8601 9.49ZM18.3801 19.49C18.2929 19.6411 18.1676 19.7668 18.0167 19.8545C17.8659 19.9422 17.6947 19.9889 17.5201 19.99H6.52015C6.34563 19.9889 6.17443 19.9422 6.02356 19.8545C5.87269 19.7668 5.7474 19.6411 5.66015 19.49C5.57238 19.338 5.52617 19.1655 5.52617 18.99C5.52617 18.8145 5.57238 18.642 5.66015 18.49L8.83015 13H15.1801L18.3801 18.5C18.4679 18.652 18.5141 18.8245 18.5141 19C18.5141 19.1755 18.4679 19.348 18.3801 19.5V19.49ZM10.0001 15C9.80236 15 9.60902 15.0586 9.44457 15.1685C9.28013 15.2784 9.15195 15.4346 9.07627 15.6173C9.00058 15.8 8.98077 16.0011 9.01936 16.1951C9.05795 16.3891 9.15319 16.5673 9.29304 16.7071C9.43289 16.847 9.61107 16.9422 9.80506 16.9808C9.99904 17.0194 10.2001 16.9996 10.3828 16.9239C10.5656 16.8482 10.7217 16.72 10.8316 16.5556C10.9415 16.3911 11.0001 16.1978 11.0001 16C11.0001 15.7348 10.8948 15.4804 10.7073 15.2929C10.5197 15.1054 10.2654 15 10.0001 15ZM14.0001 16C13.8024 16 13.609 16.0586 13.4446 16.1685C13.2801 16.2784 13.152 16.4346 13.0763 16.6173C13.0006 16.8 12.9808 17.0011 13.0194 17.1951C13.0579 17.3891 13.1532 17.5673 13.293 17.7071C13.4329 17.847 13.6111 17.9422 13.8051 17.9808C13.999 18.0194 14.2001 17.9996 14.3828 17.9239C14.5656 17.8482 14.7217 17.72 14.8316 17.5556C14.9415 17.3911 15.0001 17.1978 15.0001 17C15.0001 16.7348 14.8948 16.4804 14.7073 16.2929C14.5197 16.1054 14.2654 16 14.0001 16Z"
                  fill="#1A4DCA"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
}
