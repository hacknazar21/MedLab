import * as React from 'react';
// @ts-ignore
import Link from "next/link";
import {useContext, useEffect, useState} from "react";
import {HeaderContext} from "../context/HeaderContext";

interface Props {

}

export function Basket(props: Props) {
    const [products, setProducts] = useState([])
    const [totalPrice, setTotalPrice] = useState('0')
    const {get, removeById, storageLength} = useContext(HeaderContext)
    useEffect(()=>{
        const prods = get()
        setProducts(prods)
    }, [])
    useEffect(() => {
        if(products !== null){
            let newPrice = 0
            for (const product of products) {
                newPrice += product.price * product.count
            }
            setTotalPrice(newPrice.toLocaleString('en').replaceAll(',', ' '))
        }
    }, [products]);
    useEffect(()=>{
        const prods = get()
        // @ts-ignore
        setProducts(prods)
    }, [storageLength])
    const closeClickHandler:React.MouseEventHandler<HTMLButtonElement> = (event) =>{
        setProducts(prev=>{
            // @ts-ignore
           return prev.filter((prevProduct, index) => index != event.target.dataset.productId)
        })
        // @ts-ignore
        removeById(event.target.dataset.productId)
    }
    return (
        <div className='basket basket-window'>
            <div className="basket__header">
                <div className="basket__logo">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                            stroke="#E87C24" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"/>
                        <path
                            d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                            stroke="#E87C24" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round"/>
                        <path d="M3 6H21" stroke="#E87C24" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="basket__title">Корзина</div>
            </div>
            <div className="basket__items">
                {products && products.map((product, index)=>{
                    return (
                        <div key={index} className="basket__item basket-item">
                            <div className="basket-item__text">
                                <div className="basket-item__id">{product.code}</div>
                                <div className="basket-item__title">{product.short_title} - {product.price.toLocaleString('en').replace(',', ' ')} тг x {product.count}</div>
                            </div>
                            <button data-product-id={index} onClick={closeClickHandler} className="basket-item__remove">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.4099 11.9999L17.7099 7.70994C17.8982 7.52164 18.004 7.26624 18.004 6.99994C18.004 6.73364 17.8982 6.47825 17.7099 6.28994C17.5216 6.10164 17.2662 5.99585 16.9999 5.99585C16.7336 5.99585 16.4782 6.10164 16.2899 6.28994L11.9999 10.5899L7.70994 6.28994C7.52164 6.10164 7.26624 5.99585 6.99994 5.99585C6.73364 5.99585 6.47824 6.10164 6.28994 6.28994C6.10164 6.47825 5.99585 6.73364 5.99585 6.99994C5.99585 7.26624 6.10164 7.52164 6.28994 7.70994L10.5899 11.9999L6.28994 16.2899C6.19621 16.3829 6.12182 16.4935 6.07105 16.6154C6.02028 16.7372 5.99414 16.8679 5.99414 16.9999C5.99414 17.132 6.02028 17.2627 6.07105 17.3845C6.12182 17.5064 6.19621 17.617 6.28994 17.7099C6.3829 17.8037 6.4935 17.8781 6.61536 17.9288C6.73722 17.9796 6.86793 18.0057 6.99994 18.0057C7.13195 18.0057 7.26266 17.9796 7.38452 17.9288C7.50638 17.8781 7.61698 17.8037 7.70994 17.7099L11.9999 13.4099L16.2899 17.7099C16.3829 17.8037 16.4935 17.8781 16.6154 17.9288C16.7372 17.9796 16.8679 18.0057 16.9999 18.0057C17.132 18.0057 17.2627 17.9796 17.3845 17.9288C17.5064 17.8781 17.617 17.8037 17.7099 17.7099C17.8037 17.617 17.8781 17.5064 17.9288 17.3845C17.9796 17.2627 18.0057 17.132 18.0057 16.9999C18.0057 16.8679 17.9796 16.7372 17.9288 16.6154C17.8781 16.4935 17.8037 16.3829 17.7099 16.2899L13.4099 11.9999Z" fill="#717C97"/>
                                </svg>
                            </button>
                        </div>
                    )
                })}
                {!products.length && <p className='basket__empty'>Товаров в корзине пока нет</p>}
            </div>
            <div className="basket__sum">
                Итого: {totalPrice} тг
            </div>
            <Link href=""><a className='basket__checkout'>Оплатить анализ</a></Link>
        </div>
    );
}
