"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 6913:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/01.c7d2f7ce.png","height":1160,"width":1072,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAICAYAAAA1BOUGAAAA20lEQVR42mMQ7//HxAAFuz5+h7ERQKT1nxFH278lMl3/H+u0fmoFCzb/Z2awnPHPymLKv/+O0//9l+v5/58h+/47BgYGFrACx7n/9TTm/P1hu/TfX4b2/z8rpt/5f+bU4TIGGFh26NORdSe//L906+2v1y/u/z987OwDBqv1vGDJ9+/fzfr+9dP/9x8//161982f2hmX/j949HA2w8f3r6uv3n37aPb+b/9dFv3/y1D5/49s/rX/yXVbpzG8e/ch5/PH1+trln75Ljzz/3/zyf//sBQ9+V/dt+swAL96eWLB1DNIAAAAAElFTkSuQmCC"});

/***/ }),

/***/ 1400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/02.3b38ca07.png","height":940,"width":1132,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA1ElEQVR42mNABlevXmOGscVn/Yewnzx5InXv3r3Ky5cv64P4t27eYmFg+M4IYofN/efG8OHDhyNv3rz5f+vWrV/Hjx83gpmQtPRfbuiKf/8Z3r17d/HLly//X79+DVR0+/OvZ6vFzGf+j0tc9/9/yOr/vxkeP36s+fbt2w9fv379/+TJ0/9XL59rX7Lj7gafxb//C3T9+s8AAkDd5i9fvnx15cqVr2fOnnt3/cqZHwu3P/3FUHh7N8iRYNf29/dzPX36NPzmzZv3gPj/m5f33BkYGBgADjd/tK5sWLkAAAAASUVORK5CYII="});

/***/ }),

/***/ 4087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "g": () => (/* binding */ Catalog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./components/Index/Select.tsx


class Select extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.state = {
            open: true,
            height: 0
        };
        this.clickHandler = this.clickHandler.bind(this);
        this.selectHandler = this.selectHandler.bind(this);
    }
    wrapper = /*#__PURE__*/ external_react_default().createRef();
    head = /*#__PURE__*/ external_react_default().createRef();
    componentDidMount() {
        const height = this.wrapper.current?.getBoundingClientRect().height;
        this.setState((state)=>{
            return state.height = height;
        });
        this.wrapper.current?.setAttribute("style", `max-height:0px;`);
    }
    clickHandler(event) {
        this.setState((state)=>{
            return {
                open: !state.open
            };
        });
        if (this.wrapper.current && this.state.open) {
            this.wrapper.current.setAttribute("style", `max-height:${this.state.height}px;`);
        } else if (this.wrapper.current && !this.state.open) {
            this.wrapper.current.setAttribute("style", `max-height:0px;`);
        }
        this.head.current.classList.toggle("open");
    }
    selectHandler(event) {
        if (this.wrapper.current && this.head.current) {
            this.setState((state)=>{
                return {
                    open: !state.open
                };
            });
            this.wrapper.current.setAttribute("style", `max-height:0px;`);
            this.head.current.innerText = event.target.innerText;
            this.props.callback(event);
        }
    }
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "select" + " " + this.props.className,
            id: "select-" + this.props.name + "-" + this.props.key,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    ref: this.head,
                    onClick: this.clickHandler,
                    className: "select__head",
                    children: this.props.title
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    ref: this.wrapper,
                    className: "select__list",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            onClick: this.selectHandler,
                            "data-name": this.props.name,
                            "data-value": "all",
                            className: "select__option",
                            children: this.props.title
                        }),
                        this.props.items.map((item)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                onClick: this.selectHandler,
                                "data-name": this.props.name,
                                "data-value": item,
                                className: "select__option",
                                children: item
                            });
                        })
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const Index_Select = (Select);

;// CONCATENATED MODULE: ./components/Index/Analysis/Filter.tsx




class Filter extends (external_react_default()).Component {
    constructor(props){
        super(props);
        this.state = {};
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount() {}
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked ? target.value : null : target.value || target.dataset.value;
        const name = target.name || target.dataset.name;
    }
    selects = [
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
            className: "filter-form__input-box"
        },
        {
            key: 1,
            name: "bio",
            items: [
                "Кровь",
                "Моча",
                "Кал"
            ],
            title: "Любой биоматериал",
            callback: this.handleInputChange.bind(this)
        }, 
    ];
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "analysis__filter-box analysis-filter",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "analysis-filter__form filter-form",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "filter-form__input-box",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                width: "24",
                                height: "24",
                                viewBox: "0 0 24 24",
                                fill: "none",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                    d: "M21.7099 20.2904L17.9999 16.6104C19.44 14.8148 20.1374 12.5357 19.9487 10.2417C19.76 7.94769 18.6996 5.81318 16.9854 4.27704C15.2713 2.7409 13.0337 1.9199 10.7328 1.98286C8.43194 2.04582 6.24263 2.98795 4.61505 4.61553C2.98747 6.24311 2.04534 8.43243 1.98237 10.7333C1.91941 13.0342 2.74041 15.2718 4.27655 16.9859C5.81269 18.7001 7.94721 19.7605 10.2412 19.9492C12.5352 20.1379 14.8143 19.4405 16.6099 18.0004L20.2899 21.6804C20.3829 21.7741 20.4935 21.8485 20.6153 21.8993C20.7372 21.9501 20.8679 21.9762 20.9999 21.9762C21.1319 21.9762 21.2626 21.9501 21.3845 21.8993C21.5063 21.8485 21.6169 21.7741 21.7099 21.6804C21.8901 21.4939 21.9909 21.2447 21.9909 20.9854C21.9909 20.7261 21.8901 20.4769 21.7099 20.2904ZM10.9999 18.0004C9.61544 18.0004 8.26206 17.5899 7.11091 16.8207C5.95977 16.0515 5.06256 14.9583 4.53275 13.6792C4.00293 12.4001 3.86431 10.9926 4.13441 9.63476C4.4045 8.27689 5.07119 7.02961 6.05016 6.05065C7.02912 5.07168 8.27641 4.40499 9.63427 4.1349C10.9921 3.8648 12.3996 4.00342 13.6787 4.53324C14.9578 5.06305 16.051 5.96026 16.8202 7.1114C17.5894 8.26255 17.9999 9.61592 17.9999 11.0004C17.9999 12.8569 17.2624 14.6374 15.9497 15.9501C14.6369 17.2629 12.8564 18.0004 10.9999 18.0004Z",
                                    fill: "#1A4DCA"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                name: "search",
                                placeholder: "Поиск исследования",
                                className: "filter-form__input",
                                onInput: this.handleInputChange
                            })
                        ]
                    }),
                    this.selects.map((select, id)=>{
                        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "filter-form__input-box ",
                            children: /*#__PURE__*/ (0,external_react_.createElement)(Index_Select, {
                                ...select,
                                key: id
                            })
                        });
                    })
                ]
            })
        });
    }
}
/* harmony default export */ const Analysis_Filter = (Filter);

// EXTERNAL MODULE: ./components/common/ResearchCard.tsx
var ResearchCard = __webpack_require__(7524);
;// CONCATENATED MODULE: ./components/Index/Catalog.tsx




function Catalog(props) {
    const { 0: number , 1: setNumber  } = (0,external_react_.useState)(props.analysis.length);
    const callback = (data)=>{
    // запрос на бэк
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "page__catalog catalog",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "catalog__container",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                    className: "catalog__title",
                    children: "Каталог анализов"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx(Analysis_Filter, {
                    callback: callback,
                    number: number
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "catalog__box",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "catalog__grid",
                        children: props.analysis.map((research, id)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx(ResearchCard/* ResearchCard */.Q, {
                                research: research,
                                id: id
                            });
                        })
                    })
                })
            ]
        })
    });
}


/***/ }),

/***/ 9935:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Index_FirstScreen)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: ./src/img/first-screen/bg.png
/* harmony default export */ const bg = ({"src":"/_next/static/media/bg.5a6efdeb.png","height":457,"width":687,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAsElEQVR4nAGlAFr/ASBY5RgIAwQwFhYRM25PBTHe5v80tcv6H9bi8gDt5c3/AUFy6BwDAgI15PYGMzIYBy0oIggwwsz1HuDb3ADc38j/ASxNmSkaGhw+Cw8WNAIGFSgWExklp8v2FzQF5ADq5cL/ASVUuiMuHgFBCAkLO+76FCz09xMiDf/9Eh4P6QCYpJn/ATVx/xkUB+w3+vn2PfDzADLN4AMqrHkaFtHW6gCDbX8Aw39CqJSZABUAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./components/Index/FirstScreen.tsx



class FirstScreen extends (external_react_default()).Component {
    render() {
        return /*#__PURE__*/ jsx_runtime_.jsx("section", {
            className: "page__fscreen fscreen",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "fscreen__container",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "fscreen__box",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "fscreen__main",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "fscreen__text",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "fscreen__title",
                                            children: "Медицинские анализы качественно и в срок"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "fscreen__subtitle",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                children: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                                            })
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "fscreen__info-items",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "fscreen__info-item fscreen-item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "fscreen-item__name",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "Анализы"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fscreen-item__border",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "fscreen-item__image",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "100%",
                                                        viewBox: "0 0 90 90",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            "fill-rule": "evenodd",
                                                            "clip-rule": "evenodd",
                                                            d: "M35.7215 1.02171C32.2135 3.06471 34.2925 7.94171 38.6715 7.94171C40.6175 7.94171 40.9715 8.46171 40.9715 11.3167C40.9715 14.3027 40.6085 14.7647 37.8205 15.3217C36.0875 15.6687 32.7195 16.9257 30.3365 18.1157C26.2045 20.1797 25.9135 20.1997 24.0765 18.5367C22.2505 16.8847 22.2365 16.6407 23.8105 13.8867C25.0845 11.6567 25.2135 10.5677 24.3645 9.21071C22.3825 6.04371 20.1025 6.70471 14.4005 12.0977C7.5685 18.5587 6.5475 20.2807 7.9715 22.9417C9.2385 25.3087 11.7195 25.5067 14.6225 23.4737C16.5075 22.1537 16.8945 22.1997 18.4575 23.9257C20.1125 25.7547 20.0955 26.0547 18.1035 30.1687C16.9535 32.5447 15.7215 35.9417 15.3665 37.7157C14.7925 40.5857 14.3495 40.9417 11.3465 40.9417C8.4915 40.9417 7.9715 40.5877 7.9715 38.6417C7.9715 34.1497 2.9895 32.1707 1.0065 35.8757C-0.3355 38.3827 -0.3355 51.5007 1.0065 54.0077C2.9895 57.7127 7.9715 55.7337 7.9715 51.2417C7.9715 49.2957 8.4915 48.9417 11.3465 48.9417C14.3325 48.9417 14.7945 49.3047 15.3515 52.0927C15.6985 53.8257 16.9555 57.1937 18.1455 59.5767C20.2095 63.7087 20.2295 63.9997 18.5665 65.8367C16.9145 67.6627 16.6705 67.6767 13.9165 66.1027C11.6865 64.8287 10.5975 64.6997 9.2405 65.5487C6.0735 67.5307 6.7345 69.8107 12.1275 75.5127C18.5885 82.3447 20.3105 83.3657 22.9715 81.9417C25.3385 80.6747 25.5365 78.1937 23.5035 75.2907C22.1835 73.4057 22.2295 73.0187 23.9555 71.4557C25.7845 69.8007 26.0845 69.8177 30.1985 71.8097C32.5745 72.9597 35.9715 74.1917 37.7455 74.5467C40.6155 75.1207 40.9715 75.5637 40.9715 78.5667C40.9715 81.4217 40.6175 81.9417 38.6715 81.9417C34.1795 81.9417 32.2005 86.9237 35.9055 88.9067C38.4125 90.2487 51.5305 90.2487 54.0375 88.9067C57.7425 86.9237 55.7635 81.9417 51.2715 81.9417C49.3255 81.9417 48.9715 81.4217 48.9715 78.5667C48.9715 75.5807 49.3345 75.1187 52.1225 74.5617C53.8555 74.2147 57.2235 72.9577 59.6065 71.7677C63.7385 69.7037 64.0295 69.6837 65.8665 71.3467C67.6925 72.9987 67.7065 73.2427 66.1325 75.9967C64.8585 78.2267 64.7295 79.3157 65.5785 80.6727C67.5605 83.8397 69.8405 83.1787 75.5425 77.7857C82.3745 71.3247 83.3955 69.6027 81.9715 66.9417C80.7045 64.5747 78.2235 64.3767 75.3205 66.4097C73.4355 67.7297 73.0485 67.6837 71.4855 65.9577C69.8305 64.1287 69.8475 63.8287 71.8395 59.7147C72.9895 57.3387 74.2215 53.9417 74.5765 52.1677C75.1505 49.2977 75.5935 48.9417 78.5965 48.9417C81.4515 48.9417 81.9715 49.2957 81.9715 51.2417C81.9715 55.7337 86.9535 57.7127 88.9365 54.0077C90.2785 51.5007 90.2785 38.3827 88.9365 35.8757C86.9535 32.1707 81.9715 34.1497 81.9715 38.6417C81.9715 40.5877 81.4515 40.9417 78.5965 40.9417C75.6105 40.9417 75.1485 40.5787 74.5915 37.7907C74.2445 36.0577 72.9875 32.6897 71.7975 30.3067C69.7335 26.1747 69.7135 25.8837 71.3765 24.0467C73.0285 22.2207 73.2725 22.2067 76.0265 23.7807C78.2565 25.0547 79.3455 25.1837 80.7025 24.3347C83.8695 22.3527 83.2085 20.0727 77.8155 14.3707C71.3545 7.53871 69.6325 6.51771 66.9715 7.94171C64.6045 9.20871 64.4065 11.6897 66.4395 14.5927C67.7595 16.4777 67.7135 16.8647 65.9875 18.4277C64.1585 20.0827 63.8585 20.0657 59.7445 18.0737C57.3685 16.9237 53.9715 15.6917 52.1975 15.3367C49.3275 14.7627 48.9715 14.3197 48.9715 11.3167C48.9715 8.46171 49.3255 7.94171 51.2715 7.94171C55.7635 7.94171 57.7425 2.95971 54.0375 0.976714C51.5585 -0.349286 38.0185 -0.316286 35.7215 1.02171ZM39.3365 33.0147C45.0495 37.5077 41.2765 47.9417 33.9405 47.9417C30.2475 47.9417 24.9715 43.2517 24.9715 39.9687C24.9715 37.3077 27.5095 32.2917 29.2005 31.6107C32.1545 30.4227 36.8725 31.0757 39.3365 33.0147ZM56.4275 50.2857C58.7545 51.9867 57.8515 56.5277 55.0065 57.4307C52.2085 58.3187 48.9715 56.2677 48.9715 53.6067C48.9715 49.3237 52.7875 47.6247 56.4275 50.2857Z",
                                                            fill: "black"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "fscreen__info-item fscreen-item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "fscreen-item__name",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "пакеты анализов"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fscreen-item__border",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "fscreen-item__image",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        width: "100%",
                                                        viewBox: "0 0 512 512",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            "fill-rule": "evenodd",
                                                            "clip-rule": "evenodd",
                                                            d: "M329.606 1.2031C325.783 2.4241 322.827 4.6441 316.106 11.3441C309.914 17.5161 305.677 20.7921 301 23.0221C294.634 26.0571 294.119 26.1321 276 26.6471C246.853 27.4761 247.009 27.3001 247.004 59.3711L247 81.6211H338.5H430V60.4371C430 41.3721 429.802 38.8431 428.021 35.1651C424.554 28.0021 422.189 27.2671 400.5 26.6081C382.198 26.0531 381.28 25.9261 375.5 23.1521C371.434 21.2001 367.083 17.7971 362 12.5941C357.875 8.3721 352.508 3.9001 350.072 2.6581C344.394 -0.238899 335.992 -0.835899 329.606 1.2031ZM349.589 20.6051C358.889 24.6111 365.228 34.4831 365.289 45.0531C365.428 69.4071 336.248 81.7151 319.077 64.5441C314.274 59.7421 311.022 52.2271 311.01 45.9091C310.972 25.7621 331.028 12.6071 349.589 20.6051ZM332.323 38.8711C329.358 42.1651 328.806 44.5041 330.082 48.3701C331.367 52.2641 336.613 55.1741 340.323 54.0501C347.063 52.0101 349.354 43.8841 344.545 39.0761C341.251 35.7811 335.196 35.6791 332.323 38.8711ZM166.2 46.8211C165.307 47.7141 165 58.1991 165 87.8211V127.621H174H183V98.6771V69.7331L185.411 66.9271L187.823 64.1211L208.411 63.8141L229 63.5071V54.5641V45.6211H198.2C175.578 45.6211 167.081 45.9401 166.2 46.8211ZM448 54.6211V63.6211H467.05C488.353 63.6211 490.975 64.2421 492.892 69.7401C493.688 72.0241 494 126.947 494 264.802C494 470.766 494.217 461.829 489.15 464.541C487.738 465.297 452.437 465.621 371.566 465.621H256V475.121V484.621H381.777C493.997 484.621 507.795 484.453 509.777 483.064L512 481.508V264.764C512 97.5201 511.726 47.7471 510.8 46.8211C509.919 45.9401 501.422 45.6211 478.8 45.6211H448V54.6211ZM201 104.593V127.621L215.25 127.643C231.288 127.668 234.947 128.69 240.707 134.753C245.279 139.564 247 145.307 247 155.747V164.621L255.25 164.625C264.668 164.629 268.642 166.345 272.005 171.862C273.887 174.947 273.993 176.959 273.996 209.637C274 241.332 273.848 244.437 272.146 247.637C269.943 251.777 263.785 255.582 259.25 255.605L256 255.621V351.621V447.621H365.5H475V264.621V81.6211H461.5H448V87.0741C448 90.0731 447.518 93.5851 446.929 94.8781C444.427 100.37 449.636 100.097 341 100.412C285.725 100.572 239.07 100.446 237.321 100.13C231.399 99.0621 229.558 96.5911 229 88.9601L228.5 82.1211L214.75 81.8431L201 81.5651V104.593ZM351.792 120.196C377.373 125.425 397.824 143.66 406.661 169.121C409.201 176.439 409.438 178.356 409.438 191.621C409.438 204.886 409.201 206.803 406.661 214.121C395.93 245.037 368.528 264.621 336 264.621C324.399 264.621 313.845 262.241 304.214 257.453C294.9 252.821 284.625 243.758 283.813 239.455C283.174 236.074 285.233 231.102 287.853 229.7C292.134 227.409 295.651 228.418 301.634 233.653C310.469 241.385 317.745 244.526 329.739 245.786C342.016 247.076 351.387 245.513 361.744 240.449C369.812 236.504 381.13 225.678 385.272 217.946C388.827 211.308 392 198.893 392 191.621C392 184.349 388.827 171.934 385.272 165.296C381.13 157.564 369.812 146.738 361.744 142.793C351.387 137.729 342.016 136.166 329.739 137.456C317.745 138.716 310.469 141.857 301.634 149.589C295.651 154.824 292.134 155.833 287.853 153.542C285.233 152.14 283.174 147.168 283.813 143.787C284.617 139.528 294.898 130.429 304.214 125.73C317.708 118.924 335.463 116.859 351.792 120.196ZM29 146.599C27.863 147.316 27.5 149.554 27.5 155.833V164.121H128H228.5V155.833C228.5 149.554 228.137 147.316 227 146.599C226.083 146.019 187.632 145.652 128 145.652C68.368 145.652 29.917 146.019 29 146.599ZM345.192 158.347C346.017 159.337 346.685 164.018 347 171.019L347.5 182.121L358.602 182.621C370.491 183.156 371.978 183.738 374.014 188.654C374.986 191 374.986 192.242 374.014 194.588C371.978 199.504 370.491 200.086 358.602 200.621L347.5 201.121L347 212.121C346.725 218.171 346.108 223.728 345.63 224.47C344.348 226.456 339.178 228.378 336.495 227.865C335.209 227.619 333.11 226.304 331.829 224.942C329.738 222.718 329.465 221.351 329.162 211.543L328.823 200.621H318.488C308.829 200.621 307.952 200.452 305.077 198.032C302.629 195.973 302 194.661 302 191.621C302 188.581 302.629 187.269 305.077 185.21C307.952 182.79 308.829 182.621 318.488 182.621H328.823L329.162 171.699C329.467 161.828 329.729 160.534 331.874 158.252C333.18 156.864 335.205 155.573 336.374 155.385C339.198 154.929 343.568 156.397 345.192 158.347ZM0 210.121V237.621H128H256V210.121V182.621H128H0V210.121ZM18 264.518V273.416L38.25 273.86C51.534 274.152 59.704 274.758 62 275.621C70.55 278.838 77.55 285.892 80.556 294.319C82.558 299.931 82.558 467.311 80.556 472.923C77.55 481.35 70.55 488.404 62 491.621C59.704 492.484 51.534 493.09 38.25 493.382L18 493.826V500.789C18 512.988 4.118 511.621 128 511.621C251.907 511.621 238 512.997 238 500.736V493.72L185.75 493.397C144.186 493.139 132.784 492.79 130 491.689C121.289 488.242 114.436 481.312 111.444 472.923C109.442 467.311 109.442 299.931 111.444 294.319C114.436 285.93 121.289 279 130 275.553C132.784 274.452 144.186 274.103 185.75 273.845L238 273.522V264.571V255.621H128H18V264.518ZM18 383.621V474.621H37.035C58.252 474.621 60.044 474.154 62.636 467.949C64.653 463.121 64.653 304.121 62.636 299.293C60.044 293.088 58.252 292.621 37.035 292.621H18V383.621ZM132.782 294.876C131.286 296.111 129.599 298.388 129.032 299.936C128.354 301.784 128 330.572 128 383.718C128 471.25 127.887 469.351 133.328 472.917C135.693 474.466 140.564 474.621 186.965 474.621H238V461.121V447.621H195.95C149.628 447.621 149.224 447.571 147.131 441.566C145.823 437.815 147.676 432.4 150.85 430.701C152.205 429.976 166.866 429.621 195.472 429.621H238.075L237.788 420.371L237.5 411.121L194.354 410.621C154.533 410.16 151.054 409.982 149.209 408.311C144.709 404.237 146.474 395.697 152.23 393.691C154.217 392.998 169.867 392.621 196.649 392.621H238V383.621V374.621H196.649C169.867 374.621 154.217 374.244 152.23 373.551C146.816 371.664 146 368.234 146 347.369C146 336.445 146.452 327.622 147.108 325.74C149.228 319.661 149.547 319.621 195.95 319.621H238V306.121V292.621L186.75 292.626L135.5 292.631L132.782 294.876ZM344.545 295.076C347.996 298.526 347.938 304.391 344.421 307.697L341.842 310.121L313.171 310.434C294.8 310.635 283.193 310.363 280.861 309.677C274.206 307.72 272.375 298.831 277.756 294.598C280.137 292.725 281.901 292.621 311.18 292.621H342.091L344.545 295.076ZM165 347.133V356.646L201.25 356.383L237.5 356.121L237.788 346.871L238.075 337.621H201.538H165V347.133ZM408.587 340.927C413.521 346.663 410.485 354.711 402.862 356.102C401.013 356.439 372.622 356.582 339.772 356.418L280.044 356.121L277.322 353.398C272.645 348.72 274.265 341.151 280.5 338.551C281.6 338.092 310.327 337.808 344.337 337.919L406.174 338.121L408.587 340.927ZM445.005 386.181C446.137 387.314 447.33 389.88 447.655 391.884C448.164 395.021 447.823 395.952 445.2 398.575L442.154 401.621H361.511C305.657 401.621 280.248 401.289 278.85 400.541C275.68 398.844 273.823 393.427 275.128 389.683C277.315 383.41 273.547 383.66 362.223 383.901C442.247 384.119 442.963 384.139 445.005 386.181Z",
                                                            fill: "black"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "fscreen__info-item fscreen-item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "fscreen-item__name",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "акции"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fscreen-item__border",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "fscreen-item__image",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "100%",
                                                        viewBox: "0 0 510 512",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            "fill-rule": "evenodd",
                                                            "clip-rule": "evenodd",
                                                            d: "M435.077 2.589C432.754 4.543 432 6.01 432 8.57C432 11.371 433.131 13.161 438.489 18.842L444.979 25.721L438.239 30.221C424.723 39.247 410.039 51.899 388.952 72.687L367.405 93.93L352.452 78.897C336.401 62.759 333.313 60.454 329.147 61.499C326.153 62.251 301.637 85.969 299.354 90.323C297.333 94.176 298.375 98.002 302.546 102.045C304.446 103.886 306 105.86 306 106.431C306 107.002 300.72 112.764 294.266 119.235L282.531 131L294.501 143.001L306.47 155.001L318.737 142.763L331.005 130.525L337.24 136.76L343.475 142.995L331.237 155.262L318.999 167.529L331.25 179.716L343.5 191.902L354.833 179.951C361.065 173.378 366.706 168 367.367 168C368.778 168 379 178.12 379 179.516C379 180.041 373.717 185.767 367.26 192.24L355.521 204.011L367.755 216.245L379.989 228.479L391.975 216.525L403.961 204.57L407.231 207.724C411.883 212.212 415.322 213.319 419.298 211.61C423.18 209.941 447.461 185.44 448.466 182.178C449.886 177.565 447.788 174.54 432.297 158.857L416.727 143.095L436.74 122.298C462.265 95.771 469.821 86.865 480.491 70.733L484.305 64.967L491.055 71.483C496.668 76.902 498.37 77.995 501.153 77.968C502.994 77.951 505.27 77.352 506.211 76.637C508.522 74.881 510.13 70.367 509.434 67.593C509.121 66.345 494.142 50.626 476.147 32.662C440.527 -2.897 441.099 -2.479 435.077 2.589ZM466.123 61.741C456.359 75.997 440.621 94.118 421.612 112.992L403.994 130.484L391.801 118.291L379.608 106.098L399.054 86.792C420.376 65.623 433.499 54.254 447.974 44.409L457.448 37.965L464.855 45.371L472.262 52.778L466.123 61.741ZM379.748 131.07L427.923 179.639L421.946 185.553L415.97 191.467L367.251 142.749L318.533 94.03L324.493 88.007C327.771 84.695 330.705 82.1 331.014 82.242C331.322 82.384 353.253 104.356 379.748 131.07ZM261.263 152.223L252.04 161.447L274.52 184.064C294.141 203.804 297 207.076 297 209.785C297 214.45 293.143 218.4 288.588 218.4C285.136 218.4 283.576 217.06 262.457 195.957L239.997 173.513L227.766 185.745L215.535 197.976L237.767 220.289C259.366 241.965 260 242.717 260 246.627C260 251.862 256.881 255 251.678 255C248.185 255 246.779 253.775 225.802 232.455L203.619 209.91L191.325 222.174L179.032 234.438L201.516 257.06C225.171 280.859 225.8 281.752 222.837 287.316C220.332 292.019 216.185 293.182 211.168 290.587C209.665 289.81 199.06 279.627 187.601 267.959L166.767 246.744L154.66 258.85L142.554 270.956L164.638 293.228C179.533 308.251 186.879 316.368 187.206 318.166C188.401 324.74 182.279 330.169 176.213 327.913C174.721 327.358 163.695 317.139 151.711 305.202L129.923 283.5L118.941 294.686C106.661 307.194 104.055 311.625 104.022 320.054C103.991 327.776 107.292 333.867 116.413 342.92L123.889 350.339L116.595 358.093C112.583 362.357 108.474 367.568 107.464 369.673C105.181 374.427 104.437 383.301 105.881 388.532L106.973 392.485L54.112 445.492C17.689 482.017 1.047 499.37 0.594 501.299C-0.776 507.135 4.82 512.941 10.569 511.648C12.712 511.167 27.661 496.69 66.164 457.811L118.828 404.632L122.78 405.816C133.314 408.972 141.84 405.946 153.427 394.939L161.056 387.693L169.778 396.19C180.038 406.186 184.967 408.593 193.396 407.723C196.354 407.418 200.063 406.484 201.637 405.648C203.212 404.812 241.145 367.453 285.934 322.628L367.369 241.127L319.062 192.063C292.494 165.078 270.695 143 270.621 143C270.547 143 266.336 147.15 261.263 152.223ZM141.282 382.201C134.965 388.518 133.633 389.4 130.412 389.4C127.645 389.4 126.157 388.721 124.37 386.644C120.177 381.769 121.076 378.74 129.204 370.357L136.408 362.928L142.445 368.965L148.481 375.001L141.282 382.201Z",
                                                            fill: "black"
                                                        })
                                                    })
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "fscreen__info-item fscreen-item",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "fscreen-item__name",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                        children: "о нас"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                    className: "fscreen-item__border",
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {}),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                                    ]
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                    className: "fscreen-item__image",
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        width: "100%",
                                                        viewBox: "0 0 494 512",
                                                        fill: "none",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                            "fill-rule": "evenodd",
                                                            "clip-rule": "evenodd",
                                                            d: "M57.8839 0.687579C42.5139 3.94358 31.6679 9.76758 20.7249 20.6436C13.5949 27.7306 11.3479 30.7826 7.45188 38.6726C1.30888 51.1156 -0.545122 59.9796 0.131878 73.6696C1.01288 91.4636 6.30788 104.141 18.7609 118.271C23.0739 123.165 42.5379 143.056 62.0129 162.471L97.4219 197.773L100.42 191.971C113.025 167.575 128.978 147.197 149.809 128.88C159.222 120.604 182.135 105.035 191.049 100.859C194.205 99.3796 196.793 97.8716 196.799 97.5076C196.818 96.2526 115.791 16.3056 111.055 12.9076C99.4669 4.59258 87.8339 0.710579 72.8089 0.145579C67.0339 -0.0714212 60.3179 0.172579 57.8839 0.687579ZM411.172 0.696579C403.991 1.98858 393.863 5.80758 387.067 9.78658C382.996 12.1706 368.776 25.6086 338.526 55.6596C299.023 94.9026 295.918 98.2316 298.026 99.0826C323.711 109.454 353.863 134.267 374.543 162.051C382.607 172.885 391.808 188.046 393.885 193.92C394.614 195.982 395.484 197.67 395.819 197.67C397.478 197.67 478.866 114.464 482.203 109.356C489.767 97.7766 493.774 84.2056 493.774 70.1696C493.774 58.7826 491.553 49.5866 486.165 38.6726C482.269 30.7816 480.024 27.7316 472.893 20.6436C463.541 11.3496 455.56 6.50458 443.309 2.68358C435.344 0.199579 419.407 -0.785421 411.172 0.696579ZM202.006 115.65C180.32 123.453 147.366 151.609 128.447 178.5C122.901 186.383 115.105 201.482 113.734 206.996C112.7 211.153 112.755 212.045 114.132 213.421C115.596 214.886 116.257 214.874 122.02 213.28C145.343 206.826 183.158 174.468 202.423 144.478C210.823 131.401 215.461 120.405 214.385 116.117C213.612 113.038 209.679 112.889 202.006 115.65ZM279.541 114.926C277.96 119.045 284.129 134.032 292.42 146.214C313.386 177.02 348.756 206.959 371.678 213.302C377.717 214.973 378.113 214.974 379.314 213.332C380.969 211.069 379.728 205.336 375.705 196.67C362.288 167.766 324.905 130.563 296.2 117.548C288.199 113.92 280.398 112.692 279.541 114.926ZM251.729 178.954C244.146 182.154 239.52 185.878 235.509 192.01C231.484 198.165 230.892 199.641 229.829 206.17C227.398 221.1 235.655 236.517 249.802 243.465C254.549 245.797 256.552 246.17 264.309 246.17C271.973 246.17 274.155 245.774 279.005 243.5C300.934 233.221 306.386 205.27 289.942 187.431C283.594 180.543 276.256 177.34 265.9 176.935C258.64 176.651 256.444 176.964 251.729 178.954ZM196.894 238.884C184.881 241.52 176.609 252.099 176.609 264.826C176.609 283.637 196.326 296.255 213.309 288.312C222.976 283.79 227.955 276.387 228.616 265.552C229.28 254.667 224.162 245.871 214.513 241.315C208.213 238.341 202.784 237.592 196.894 238.884ZM269.539 276.041C259.524 280.245 254.015 285.553 249.625 295.225C246.256 302.646 246.408 315.175 249.956 322.67C253.808 330.806 258.936 336.115 266.58 339.878C272.644 342.863 274.108 343.17 282.288 343.17C289.918 343.17 292.157 342.77 296.809 340.576C323.654 327.913 323.654 289.364 296.809 276.788C288.782 273.028 277.455 272.717 269.539 276.041ZM189.611 329.002C175.806 334.823 167.809 346.805 167.809 361.67C167.809 375.065 175.265 387.027 187.468 393.21C192.654 395.838 194.319 396.17 202.309 396.17C209.944 396.17 212.162 395.77 216.929 393.535C224.834 389.828 230.256 384.54 234.049 376.833C236.956 370.929 237.309 369.289 237.309 361.691C237.309 354.412 236.889 352.261 234.429 346.936C231.092 339.709 224.65 333.207 217.323 329.67C209.823 326.049 197.327 325.748 189.611 329.002ZM273.309 380.877C270.12 381.991 264.17 386.071 262.004 388.629C261.287 389.477 259.604 392.42 258.264 395.17C253.622 404.699 255.901 416.608 263.896 424.603C273.961 434.668 291.752 434.116 301.398 423.44C306.373 417.933 308.133 413.31 308.18 405.621C308.271 390.916 296.941 379.59 282.309 379.759C279.009 379.797 274.959 380.3 273.309 380.877ZM214.459 441.747C202.819 443.633 191.951 452.464 187.729 463.468C184.359 472.25 184.665 482.646 188.535 490.838C203.362 522.226 248.614 516.141 254.942 481.909C259.193 458.915 238.036 437.926 214.459 441.747Z",
                                                            fill: "black"
                                                        })
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fscreen__image",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: bg.src,
                                alt: ""
                            })
                        })
                    ]
                })
            })
        });
    }
}
/* harmony default export */ const Index_FirstScreen = (FirstScreen);


/***/ }),

/***/ 3376:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ZP": () => (/* binding */ Index_Info)
});

// UNUSED EXPORTS: Info, getServerSideProps

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/img/microscope.png
/* harmony default export */ const microscope = ({"src":"/_next/static/media/microscope.70f6bf15.png","height":2308,"width":2201,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAA+klEQVR42mNwsnaVTIhMkI8Pj7diAIJZU+aJMiADJxvnYjNDi3uGOiaPIkNiJnk4+WwCCgvOYWDQS00MVQIr0lTVnCbAK/RfUUHj/9LZC87dP7tl4ZezR/9v0GHoQTKL23PNkpWPbl+99//N2V0X321ZdGO2JkMpg72ausKE5lrr/y+XcTSUlzdN7J/+6e61B7PPbt1lDtZ3aO3MwPWLZ5UDmZV1peULDu45tu7iyQtvvrz7lg1W8HGTc8GnXSnX9yxoOF2Wm/lfR8vyf0FWwcvYiLibQGk5hqM1DIJPpzKo/P9bI1aQEj0RKPijsaru5+bVG7cxMDCwAwCGUGi1hIVk9gAAAABJRU5ErkJggg=="});
;// CONCATENATED MODULE: ./components/Index/Info.tsx



function Info(props) {
    function clickHandler(event) {
        const buttonId = event.currentTarget.dataset.buttonId;
        const tabsBox = event.currentTarget.closest(".info__main");
        if (tabsBox) {
            const actives = tabsBox.querySelectorAll(".active");
            if (actives.length) {
                actives.forEach((active)=>{
                    active.classList.remove("active");
                });
            }
            const activeCurrent = tabsBox.querySelector(`.info__text[data-content-id="${buttonId}"]`);
            if (activeCurrent) {
                activeCurrent.classList.add("active");
            }
        }
        event.currentTarget.classList.add("active");
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "page__info info",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "info__container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "info__box",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "info__main",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "info__tabs-buttons",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "info__tabs-button active",
                                        onClick: clickHandler,
                                        "data-button-id": "0",
                                        children: "Удобство"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        "data-button-id": "1",
                                        className: "info__tabs-button",
                                        onClick: clickHandler,
                                        children: "Качество"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        "data-button-id": "2",
                                        className: "info__tabs-button",
                                        onClick: clickHandler,
                                        children: "Надежность"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                "data-content-id": "0",
                                className: "info__text active",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "info__text-title",
                                        children: "Лучшее оборудования для проверки"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "info__text-subtitle",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "info__text-footer",
                                        children: "Работаем с 1988 года"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "info__name",
                                        children: [
                                            "Удобство",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                "data-content-id": "1",
                                className: "info__text",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "info__text-title",
                                        children: "Лучшее оборудования для проверки"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "info__text-subtitle",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.",
                                                " ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " Amet minim mollit non deewgwegewt sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "info__text-footer",
                                        children: "Работаем с 1988 года"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "info__name",
                                        children: [
                                            "Качество",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                "data-content-id": "2",
                                className: "info__text",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "info__text-title",
                                        children: "Лучшее оборудования для проверки"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "info__text-subtitle",
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            children: [
                                                "w4gwegewrgewrgerunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. ",
                                                /*#__PURE__*/ jsx_runtime_.jsx("br", {}),
                                                " Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "info__text-footer",
                                        children: "Работаем с 1988 года"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "info__name",
                                        children: [
                                            "Надежность",
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "info__image active",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                            src: microscope.src,
                            alt: ""
                        })
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const Index_Info = (Info);
const getServerSideProps = async ()=>{
    try {
        return {
            props: {}
        };
    } catch (e) {
        console.log(e.message);
    }
    return {
        props: {}
    };
};


/***/ }),

/***/ 1218:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Map(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "page__map map",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "map__container",
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "map__item",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
                    src: props.mapSrc,
                    allowFullScreen: true,
                    style: {
                        position: "relative"
                    }
                })
            })
        })
    });
}


/***/ }),

/***/ 2339:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Packages)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3877);
/* harmony import */ var _common_ResearchPackageCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5541);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_2__]);
swiper__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Packages(props) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        new swiper__WEBPACK_IMPORTED_MODULE_2__["default"](".popular-analises__slider.popular-analises-swiper.packages", {
            modules: [
                swiper__WEBPACK_IMPORTED_MODULE_2__.Navigation,
                swiper__WEBPACK_IMPORTED_MODULE_2__.Autoplay
            ],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 20,
            autoHeight: true,
            speed: 800,
            // Эффекты
            effect: "fade",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            // Кнопки "влево/вправо"
            navigation: {
                prevEl: `.popular-analises__slider.popular-analises-swiper.packages .swiper-button-prev`,
                nextEl: `.popular-analises__slider.popular-analises-swiper.packages .swiper-button-next`
            },
            breakpoints: {
                320: {
                    slidesPerView: 2.2,
                    spaceBetween: 11
                },
                770: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            },
            // События
            on: {}
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "page__popular-analises popular-analises packages",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "popular-analises__container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "popular-analises__box",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "popular-analises__header",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "popular-analises__title section-title",
                                children: "Пакеты анализов"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "",
                                className: "popular-analises__show-all-pc show-all-pc",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "смотреть все анализы"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "28",
                                        height: "29",
                                        viewBox: "0 0 28 29",
                                        fill: "none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M22.3145 14.1455C22.3145 13.873 22.2002 13.6094 21.998 13.416L16.2236 7.6416C15.9951 7.42188 15.7578 7.3252 15.5117 7.3252C14.9492 7.3252 14.5449 7.7207 14.5449 8.25684C14.5449 8.53809 14.6592 8.77539 14.835 8.95117L16.8125 10.9551L19.3613 13.2842L17.3223 13.1611H6.66992C6.08105 13.1611 5.67676 13.5654 5.67676 14.1455C5.67676 14.7168 6.08105 15.1211 6.66992 15.1211H17.3223L19.3613 14.998L16.8125 17.3271L14.835 19.3311C14.6592 19.5068 14.5449 19.7441 14.5449 20.0254C14.5449 20.5615 14.9492 20.957 15.5117 20.957C15.7578 20.957 15.9951 20.8604 16.2061 20.6582L21.998 14.8662C22.2002 14.6729 22.3145 14.4092 22.3145 14.1455Z",
                                            fill: "#337FF9"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "popular-analises__slider popular-analises-swiper",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "popular-analises__wrapper swiper-wrapper",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "popular-analises__slide swiper-slide",
                                children: props.packages?.map((packageItem)=>{
                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ResearchPackageCard__WEBPACK_IMPORTED_MODULE_3__/* .ResearchPackageCard */ .q, {
                                        id: 1,
                                        package: packageItem
                                    });
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "",
                        className: "popular-analises__show-all show-all",
                        children: "смотреть все пакеты анализов"
                    })
                ]
            })
        })
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 976:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export Popular */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_ResearchCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7524);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_3__]);
swiper__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Popular(props) {
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        new swiper__WEBPACK_IMPORTED_MODULE_3__["default"](".popular-analises__slider.popular-analises-swiper", {
            // Указываем скласс нужного слайдера
            // Подключаем модули слайдера
            // для конкретного случая
            modules: [
                swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation,
                swiper__WEBPACK_IMPORTED_MODULE_3__.Autoplay
            ],
            observer: true,
            observeParents: true,
            slidesPerView: 4,
            spaceBetween: 20,
            autoHeight: true,
            speed: 800,
            // Эффекты
            effect: "fade",
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            // Кнопки "влево/вправо"
            navigation: {
                prevEl: `.popular-analises__slider.popular-analises-swiper .swiper-button-prev`,
                nextEl: `.popular-analises__slider.popular-analises-swiper .swiper-button-next`
            },
            breakpoints: {
                320: {
                    slidesPerView: 1.2,
                    spaceBetween: 11
                },
                770: {
                    slidesPerView: 3,
                    spaceBetween: 15
                },
                1280: {
                    slidesPerView: 4,
                    spaceBetween: 20
                },
                1920: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            },
            // События
            on: {}
        });
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "page__popular-analises popular-analises",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "popular-analises__container",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "popular-analises__box",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "popular-analises__header",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                                className: "popular-analises__title section-title",
                                children: "Популярные анализы"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                                href: "",
                                className: "popular-analises__show-all-pc show-all-pc",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        children: "смотреть все анализы"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "28",
                                        height: "29",
                                        viewBox: "0 0 28 29",
                                        fill: "none",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                            d: "M22.3145 14.1455C22.3145 13.873 22.2002 13.6094 21.998 13.416L16.2236 7.6416C15.9951 7.42188 15.7578 7.3252 15.5117 7.3252C14.9492 7.3252 14.5449 7.7207 14.5449 8.25684C14.5449 8.53809 14.6592 8.77539 14.835 8.95117L16.8125 10.9551L19.3613 13.2842L17.3223 13.1611H6.66992C6.08105 13.1611 5.67676 13.5654 5.67676 14.1455C5.67676 14.7168 6.08105 15.1211 6.66992 15.1211H17.3223L19.3613 14.998L16.8125 17.3271L14.835 19.3311C14.6592 19.5068 14.5449 19.7441 14.5449 20.0254C14.5449 20.5615 14.9492 20.957 15.5117 20.957C15.7578 20.957 15.9951 20.8604 16.2061 20.6582L21.998 14.8662C22.2002 14.6729 22.3145 14.4092 22.3145 14.1455Z",
                                            fill: "#337FF9"
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "popular-analises__slider popular-analises-swiper",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "popular-analises__wrapper swiper-wrapper",
                            children: props.analysis.map((research, id)=>{
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "popular-analises__slide swiper-slide",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_common_ResearchCard__WEBPACK_IMPORTED_MODULE_2__/* .ResearchCard */ .Q, {
                                        research: research,
                                        id: id
                                    })
                                });
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                        href: "",
                        className: "popular-analises__show-all show-all",
                        children: "смотреть все анализы"
                    })
                ]
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popular);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Index_Promotion)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./components/common/PromotionCard.tsx


const PromotionCard = (props)=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
        className: "promotion-card",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "promotion-card__image",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: "",
                    alt: ""
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                className: "promotion-card__title",
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "",
                    children: "Клинический анализ крови: общий анализ, лейкоформула, СОЭ (с микроскопией мазка крови при наличии патологических сдвигов)"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "",
                className: "promotion-card__more more-card",
                children: "Подробнее"
            })
        ]
    });
};
/* harmony default export */ const common_PromotionCard = (PromotionCard);

;// CONCATENATED MODULE: ./components/Index/Promotion.tsx



const Promotion = (props)=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "page__promotion promotion",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "promotion__container promotion__container_grid",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(common_PromotionCard, {}),
                /*#__PURE__*/ jsx_runtime_.jsx(common_PromotionCard, {})
            ]
        })
    });
};
/* harmony default export */ const Index_Promotion = (Promotion);


/***/ }),

/***/ 7524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ ResearchCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context_HeaderContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1680);




function ResearchCard(props) {
    const { basket , add  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_context_HeaderContext__WEBPACK_IMPORTED_MODULE_3__/* .HeaderContext */ .p);
    function addToBasketHandler(event) {
        add(props.research);
        animateAdd(event.target.parentElement);
    }
    const animateAdd = (product)=>{
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
        cloneProduct.style.transform = `translate3d(${basketPosition.x - cloneProductPosition.x - cloneProductPosition.width / 1.2}px, ${basketPosition.y - cloneProductPosition.y}px, 0px) scale(0)`;
        cloneProduct.style.opacity = `0`;
        console.log(Math.abs(basketPosition.x - cloneProductPosition.x));
        setTimeout(()=>{
            cloneProduct.remove();
        }, 1000 + Math.abs(basketPosition.x - cloneProductPosition.x));
    };
    const getPosition = (element)=>{
        return element.getClientRects()[0];
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            "data-item-id": props.research.research_id,
            className: "analysis__item analysis-item",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                    className: "analysis-item__title",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                        href: `/analysis/[id]`,
                        as: `/analysis/${props.research.link}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            children: props.research.title
                        })
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "analysis-item__info-box",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "analysis-item__info _icon-clock",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M15 11H13V7C13 6.73478 12.8946 6.48043 12.7071 6.29289C12.5196 6.10536 12.2652 6 12 6C11.7348 6 11.4804 6.10536 11.2929 6.29289C11.1054 6.48043 11 6.73478 11 7V12C11 12.2652 11.1054 12.5196 11.2929 12.7071C11.4804 12.8946 11.7348 13 12 13H15C15.2652 13 15.5196 12.8946 15.7071 12.7071C15.8946 12.5196 16 12.2652 16 12C16 11.7348 15.8946 11.4804 15.7071 11.2929C15.5196 11.1054 15.2652 11 15 11ZM12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C10.4178 20 8.87104 19.5308 7.55544 18.6518C6.23985 17.7727 5.21447 16.5233 4.60897 15.0615C4.00347 13.5997 3.84504 11.9911 4.15372 10.4393C4.4624 8.88743 5.22433 7.46197 6.34315 6.34315C7.46197 5.22433 8.88743 4.4624 10.4393 4.15372C11.9911 3.84504 13.5997 4.00346 15.0615 4.60896C16.5233 5.21447 17.7727 6.23984 18.6518 7.55544C19.5308 8.87103 20 10.4177 20 12C20 14.1217 19.1572 16.1566 17.6569 17.6569C16.1566 19.1571 14.1217 20 12 20Z"
                                    })
                                }),
                                props.research.terms_of_analyzes.title
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "analysis-item__info _icon-blood",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                                    width: "24",
                                    height: "24",
                                    viewBox: "0 0 24 24",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("path", {
                                        d: "M12 22C9.87827 22 7.84344 21.1571 6.34315 19.6569C4.84285 18.1566 4 16.1217 4 14C4 10.498 6.71 7.697 9.093 5.13L12 2L14.907 5.13C17.29 7.698 20 10.499 20 14C20 16.1217 19.1571 18.1566 17.6569 19.6569C16.1566 21.1571 14.1217 22 12 22V22Z",
                                        "stroke-width": "2",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round"
                                    })
                                }),
                                props.research.biomaterial.title
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "analysis-item__price-box",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "analysis-item__price-id",
                            children: props.research.research_id
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "analysis-item__price-value",
                            children: [
                                props.research.price,
                                " ₸"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    onClick: addToBasketHandler,
                    className: "analysis-item__add"
                })
            ]
        })
    });
}


/***/ }),

/***/ 5541:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ ResearchPackageCard)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function ResearchPackageCard(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
            "data-item-id": props.package.id,
            className: "analysis-package__item analysis-package",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "analysis-package__image",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: "",
                        alt: ""
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "analysis-package__number",
                    children: [
                        "Анализов: ",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                            children: props.package.package.length
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                    href: "",
                    className: "analysis-package__title",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                        children: props.package.name_of_package
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "analysis-package__date",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        children: "2 — 4 дня"
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "analysis-package__actions",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "analysis-package__price",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                children: [
                                    props.package.price_of_package,
                                    " тг"
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                            href: "",
                            className: "analysis-package__more more-card",
                            children: "Подробнее"
                        })
                    ]
                })
            ]
        })
    });
}


/***/ }),

/***/ 5075:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Index),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Index_FirstScreen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9935);
/* harmony import */ var _components_Index_Popular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(976);
/* harmony import */ var _components_Index_Catalog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4087);
/* harmony import */ var _components_Index_Reviews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(75);
/* harmony import */ var _components_Index_News__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5197);
/* harmony import */ var _components_Index_Info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3376);
/* harmony import */ var _components_Index_Map__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1218);
/* harmony import */ var _src_img_baners_01_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6913);
/* harmony import */ var _src_img_baners_02_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1400);
/* harmony import */ var _layouts_mainLayout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(49);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_Index_Packages__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(2339);
/* harmony import */ var _components_Index_Promotion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8657);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_Index_Popular__WEBPACK_IMPORTED_MODULE_2__, _components_Index_Reviews__WEBPACK_IMPORTED_MODULE_4__, _components_Index_News__WEBPACK_IMPORTED_MODULE_5__, _components_Index_Packages__WEBPACK_IMPORTED_MODULE_12__]);
([_components_Index_Popular__WEBPACK_IMPORTED_MODULE_2__, _components_Index_Reviews__WEBPACK_IMPORTED_MODULE_4__, _components_Index_News__WEBPACK_IMPORTED_MODULE_5__, _components_Index_Packages__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














const banners = {
    banners: [
        {
            banner: {
                title: "Проверка симптомов Covid - 18",
                text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." + " Velit officia consequat duis enim velit mollit.",
                src: _src_img_baners_01_png__WEBPACK_IMPORTED_MODULE_8__/* ["default"].src */ .Z.src,
                href: "",
                key: 0
            }
        },
        {
            banner: {
                title: "Назначения правильного лечения",
                text: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint." + " Velit officia consequat duis enim velit mollit.",
                src: _src_img_baners_02_png__WEBPACK_IMPORTED_MODULE_9__/* ["default"].src */ .Z.src,
                href: "",
                key: 1
            }
        }, 
    ]
};
function Index({ news , reviews , analysis , packages  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_11___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Главная"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        charSet: "utf-8"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "initial-scale=1.0, width=device-width"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "wrapper",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_layouts_mainLayout__WEBPACK_IMPORTED_MODULE_10__/* .MainLayout */ .Z, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Index_FirstScreen__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Index_Promotion__WEBPACK_IMPORTED_MODULE_13__/* ["default"] */ .Z, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Index_Packages__WEBPACK_IMPORTED_MODULE_12__/* ["default"] */ .Z, {
                            packages: packages
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Index_Popular__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                            analysis: analysis
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Index_Catalog__WEBPACK_IMPORTED_MODULE_3__/* .Catalog */ .g, {
                            analysis: analysis
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Index_Reviews__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                            reviews: reviews
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Index_News__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                            news: news
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Index_Info__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .ZP, {}),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_Index_Map__WEBPACK_IMPORTED_MODULE_7__/* .Map */ .D, {
                            mapSrc: "https://yandex.kz/map-widget/v1/-/CCURqDxLOA"
                        })
                    ]
                })
            })
        ]
    });
};
const getServerSideProps = async ()=>{
    try {
        const response = await fetch("http://195.49.215.130/api/front/news/allNews");
        const news = (await response.json())?.results ?? [];
        const responseReviews = await fetch("http://195.49.215.130/api/front/review/allReviews");
        const reviews = (await responseReviews.json())?.results ?? [];
        const responseAnalysis = await fetch("http://195.49.215.130/api/front/analyse/allAnalyse");
        const analysis = (await responseAnalysis.json())?.results ?? [];
        const responsePackages = await fetch("http://195.49.215.130/api/front/package/allPackages");
        const packages = (await responsePackages.json())?.results ?? [];
        return {
            props: {
                news,
                analysis,
                reviews,
                packages
            }
        };
    } catch (e) {
        console.log(e.message);
    }
    return {
        props: {
            news: [],
            reviews: [],
            analysis: []
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6419:
/***/ ((module) => {

module.exports = require("react-rating");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,49,75,971], () => (__webpack_exec__(5075)));
module.exports = __webpack_exports__;

})();