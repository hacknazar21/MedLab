import React, {createContext, useContext, useState} from "react"
import {Header} from "../components/Index/Header";
import Footer from "../components/Index/Footer";
import {HeaderContext} from "../context/HeaderContext";
import {useStorage} from "../hooks/hooks.storage";
export function MainLayout(props){
    const [basket, setBasket] = useState(null)
    const {add, get, removeById, storageLength} = useStorage('basket')
        return (
            <HeaderContext.Provider value={{basket: basket, add, get, removeById, storageLength }}>
                <Header basket={setBasket}/>
                    {props.children}
                <Footer />
            </HeaderContext.Provider>
        )
}