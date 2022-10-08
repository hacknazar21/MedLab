"use strict";
exports.id = 528;
exports.ids = [528];
exports.modules = {

/***/ 5528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "u": () => (/* binding */ Analysis)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Index/Analysis/Analys.tsx



function Analys(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: !props.research.hidden && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            "data-item-id": props.research.id,
            className: "analysis__item analysis-item",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                    href: `/analysis/[id]`,
                    as: `/analysis/${props.research.id}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            className: "analysis-item__title",
                            children: props.research.short_title
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "analysis-item__info-box",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "analysis-item__info _icon-clock",
                            children: props.research.research_time
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "analysis-item__info _icon-blood",
                            children: props.research.biomaterial
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "analysis-item__price-box",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "analysis-item__price-id",
                            children: props.research.research_id
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "analysis-item__price-value",
                            children: [
                                props.research.price.toLocaleString("en").replaceAll(",", " "),
                                " ₸"
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    onClick: props.buttonClick,
                    className: "analysis-item__add"
                })
            ]
        })
    });
}
/* harmony default export */ const Analysis_Analys = ((/* unused pure expression or super */ null && (Analys)));

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
        this.setState((state)=>{
            return {
                [name]: value
            };
        }, ()=>{
            this.props.callback(this.state);
        });
    }
    selects = [
        {
            key: 0,
            name: "category",
            items: [
                "Артрит",
                "Генетические расстройства",
                "Гипертония",
                "Беременность"
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
        }
    ];
    render() {
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "analysis__filter-box analysis-filter",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "analysis-filter__header",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "analysis-filter__title",
                            children: "Поиск исследований"
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "analysis-filter__value",
                            children: [
                                "Найдено: ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: this.props.number
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "analysis-filter__form filter-form",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "filter-form__input-box",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                type: "text",
                                name: "search",
                                placeholder: "Поиск исследования",
                                className: "filter-form__input",
                                onInput: this.handleInputChange
                            })
                        }),
                        this.selects.map((select)=>{
                            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "filter-form__input-box ",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(Index_Select, {
                                    ...select
                                })
                            });
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "filter-form__input-box",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "filter-form__input-checkboxes",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "filter-form__input-checkbox",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                name: "adult",
                                                type: "checkbox",
                                                id: "amateur",
                                                value: "Взрослым",
                                                onChange: this.handleInputChange
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "amateur",
                                                className: "filter-form__input",
                                                children: "Взрослым"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "filter-form__input-checkbox",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                name: "child",
                                                type: "checkbox",
                                                id: "child",
                                                value: "Детям",
                                                onChange: this.handleInputChange
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                htmlFor: "child",
                                                className: "filter-form__input",
                                                children: "Детям"
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        });
    }
}
/* harmony default export */ const Analysis_Filter = (Filter);

// EXTERNAL MODULE: ./context/HeaderContext.ts
var HeaderContext = __webpack_require__(1680);
;// CONCATENATED MODULE: ./components/Index/Analysis.tsx





function Analysis(props) {
    const { 0: analysis , 1: setAnalysis  } = (0,external_react_.useState)(props.analysis);
    const { 0: number , 1: setNumber  } = (0,external_react_.useState)(props.analysis.length);
    const { basket , add  } = (0,external_react_.useContext)(HeaderContext/* HeaderContext */.p);
    const handleButtonClick = (event)=>{
        const analysisId = event.target.parentElement.dataset.itemId;
        for (const analysisItem of analysis){
            if (analysisItem.id == analysisId) {
                add(analysisItem);
            }
        }
        animateAdd(event.target.parentElement);
    };
    const animateAdd = (product)=>{
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
        cloneProduct.style.transform = `translate3d(${basketPosition.x - cloneProductPosition.x - cloneProductPosition.width / 1.2}px, ${basketPosition.y - cloneProductPosition.y}px, 0px) scale(0)`;
        cloneProduct.style.opacity = `0`;
        setTimeout(()=>{
            cloneProduct.remove();
        }, 500);
    };
    const getPosition = (element)=>{
        return element.getClientRects()[0];
    };
    (0,external_react_.useEffect)(()=>{
        let counter = 0;
        analysis.forEach((analysisItem)=>{
            if (!analysisItem.hidden) {
                counter++;
            }
        });
        setNumber(counter);
    }, [
        analysis
    ]);
    const callback = (data)=>{
        const tagsFilter = [];
        for(const dataKey in data){
            if (tagsFilter.indexOf(data[dataKey]) === -1) tagsFilter.push(data[dataKey]);
        }
        setAnalysis((state)=>{
            return state.map((analysisItem)=>{
                if (!tagsFilter) {
                    analysisItem.hidden = true;
                    return analysisItem;
                }
                for(let i = 0; i < tagsFilter.length; i++){
                    for(let j = 0; j < analysisItem.tags.split(",").length; j++){
                        if (analysisItem.tags.split(",")[j].toLowerCase().split(/\s+/).join("").indexOf(tagsFilter[i] != undefined ? tagsFilter[i].toLowerCase().split(/\s+/).join("") : "") !== -1) {
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
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        className: "page__analysis analysis",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "analysis__container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "analysis__box",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Analysis_Filter, {
                        callback: callback,
                        number: number
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "analysis__grid",
                        children: [
                            analysis.map((analys)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx(Analys, {
                                    research: analys,
                                    buttonClick: handleButtonClick
                                }, analys.id);
                            }),
                            number === 0 && "По вашему запросу ничего не нашлось"
                        ]
                    })
                ]
            })
        })
    });
}


/***/ })

};
;