import React from 'react'
import ProductCard from '../components/ProductCard'


const ProductGridSection = ({title, items = []}) => {
  
  return (
    <section className="product-grid">
        <div className="container">
          <h1>{title}</h1>
            <div className="grid">
                {
                  items.map( product => <ProductCard key={product.articleNumber} product={product} />)
                } 
            </div>
        </div>
    </section>
  )
}

export default ProductGridSection