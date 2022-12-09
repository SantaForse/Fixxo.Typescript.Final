import React from 'react'
import { NavLink } from 'react-router-dom'
import ProductDetails from '../sections/ProductDetails'
import { useShoppingCart } from '../contexts/ShoppingCartContext'
import { currencyFormatter } from '../utilities/currencyFormatter'
import { ProductItem } from '../models/ProductModels'


interface ProductCardType {
    product: ProductItem
}

const ProductCard: React.FC<ProductCardType> = ({product}) => {
    const { incrementQuantity } = useShoppingCart()


  return (
    <div className="card">
        <div className="card-box">
            <img src={product.imageName} alt={product.name} />
            <div className="card-interaction">
                    <button  className="card-balls"><i className="fa-regular fa-heart"></i></button>
                    <button  className="card-balls"><i className="fa-regular fa-code-compare"></i></button>
                    <button onClick={() => incrementQuantity ({articleNumber: product.articleNumber, product: product})}  className="card-balls"><i className="fa-regular fa-bag-shopping"></i></button>
                    <NavLink to={`/products/${product.name.toLowerCase().replace( / /gi, "-")}`}><button className="card-balls last-ball"><i className="fa-solid fa-eye"></i></button></NavLink>
            </div>

            <NavLink to={`/products/${product.articleNumber}`} className="card-quick-view">
                <button className="btn-theme-red">
                    <div className="line-button-l-1"></div>
                    <div className="line-button-l-2"></div>
                        <p>QUICK VIEW</p> 
                    <div className="line-button-r-1"></div>
                    <div className="line-button-r-2"></div>
                </button>
            </NavLink>
        </div>

        <div className="card-text">
            <p>{product.articleNumber}</p>
            <h1 className="h1title">{product.name}</h1>
            <div className="card-stars">
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
                <i className="fa-sharp fa-solid fa-star"></i>
            </div>
            <h2 className="h2title"><span>{product.initialprice}</span> {currencyFormatter(product.price)}</h2>
        </div>

    </div>
  )
}

export default ProductCard