import React from "react";
// @ts-ignore
import { ISelect } from "../../Interfaces/ISelect";
import Select from "../Select";

interface OwnProps {
  callback: (data: any) => void;
  number: number | string;
}

type Props = OwnProps;

class Filter extends React.Component<Props, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  componentDidMount() {}

  handleInputChange(event: any) {
    const target = event.target;
    const value =
      target.type === "checkbox"
        ? target.checked
          ? target.value
          : null
        : target.value || target.dataset.value;
    const name = target.name || target.dataset.name;
  }
  selects: ISelect[] = [
    {
      key: 0,
      name: "category",
      items: [
        "Артрит",
        "Генетические расстройства",
        "Гипертония",
        "Беременность",
      ],
      title: "Все категории",
      callback: this.handleInputChange.bind(this),
      className: "filter-form__input-box",
    },
    {
      key: 1,
      name: "bio",
      items: ["Кровь", "Моча", "Кал"],
      title: "Любой биоматериал",
      callback: this.handleInputChange.bind(this),
    },
  ];
  render() {
    return (
      <div className="analysis__filter-box analysis-filter">
        <div className="analysis-filter__header">
          <h2 className="analysis-filter__title">Поиск исследований</h2>
          <div className="analysis-filter__value">
            Найдено: <span>{this.props.number}</span>
          </div>
        </div>
        <div className="analysis-filter__form filter-form">
          <div className="filter-form__input-box">
            <input
              type="text"
              name="search"
              placeholder="Поиск исследования"
              className="filter-form__input"
              onInput={this.handleInputChange}
            />
          </div>
          {this.selects.map((select) => {
            return (
              <div className="filter-form__input-box ">
                <Select {...select} />
              </div>
            );
          })}
          <div className="filter-form__input-box">
            <div className="filter-form__input-checkboxes">
              <div className="filter-form__input-checkbox">
                <input
                  name="adult"
                  type="checkbox"
                  id="amateur"
                  value="Взрослым"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="amateur" className="filter-form__input">
                  Взрослым
                </label>
              </div>
              <div className="filter-form__input-checkbox">
                <input
                  name="child"
                  type="checkbox"
                  id="child"
                  value="Детям"
                  onChange={this.handleInputChange}
                />
                <label htmlFor="child" className="filter-form__input">
                  Детям
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
