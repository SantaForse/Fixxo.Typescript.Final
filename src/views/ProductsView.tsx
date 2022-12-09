import React, {useEffect} from 'react'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'
import MainMenuWhiteSection from '../sections/MainMenuWhiteSection'


const ProductsView:React.FC = () => {
  const {products, getProducts} = useProductContext() as ProductContextType
  window.parent.document.title = 'Products | Fixxo.'

  useEffect (() => {
    getProducts()
  }, [])

  return (
    <>
      <MainMenuWhiteSection />
      <BreadcrumbSection currentPage="Products" />
      <ProductGridSection  title="All Products" items={products} />
      <FooterSection />
    </>
  )
}

export default ProductsView