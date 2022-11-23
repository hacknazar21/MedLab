import { useContext, useEffect, useState } from "react";
import { HeaderContext } from "../../context/HeaderContext";
import { IAnalys } from "../../Interfaces/IAnalys";

export default function CheckoutInfo() {
  const { get, removeById, storageLength } = useContext(HeaderContext);
  const [products, setProducts] = useState([]);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    const productsGet = get();
    if (productsGet) {
      setProducts([...productsGet]);
      setPrice(0);
      for (const productsGetElement of productsGet) {
        setPrice(
          (prevState) =>
            prevState +
            (productsGetElement.price || productsGetElement.price_of_package) *
              productsGetElement.count
        );
      }
    }
  }, [storageLength]);
  return (
    <>
      <div className="checkout__info checkout-info">
        <div className="checkout-info__header">
          <h2 className="form-title checkout-info__title">Сумма оплаты</h2>
          <div className="checkout-info__count">
            Всего анализов - {storageLength}
          </div>
        </div>
        <div className="checkout-info__products">
          {products.map((product: IAnalys) => {
            return (
              <article className="checkout-info__product checkout-product">
                <button
                  onClick={() => {
                    removeById(product.id);
                  }}
                  className="checkout-product__delete"
                >
                  <span />
                  <span />
                </button>
                <div className="checkout-product__sku">
                  {product.vendor_code || "Пакет анализов"}
                </div>
                <h3 className="checkout-product__title">
                  {product.title || product.name_of_package} x {product.count}
                </h3>
                <div className="checkout-product__text">
                  <p>
                    {product.description_patient ||
                      product.package
                        .map((packageItem: IAnalys) => packageItem.title)
                        .join(", ")}
                  </p>
                </div>
                <div className="checkout-product__price">
                  {(product.price || product.price_of_package) * product.count}{" "}
                  ₸
                </div>
              </article>
            );
          })}
        </div>
        <div className="checkout-info__price-box">
          <h2 className="checkout-info__price-title">Общая стоимость:</h2>
          <div className="checkout-info__price">{price} тг</div>
        </div>
      </div>
    </>
  );
}
