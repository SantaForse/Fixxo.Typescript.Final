import React, { useEffect ,useState } from 'react'
import { useParams } from 'react-router-dom'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ProductDetails from '../sections/ProductDetails'
import MainMenuWhiteSection from '../sections/MainMenuWhiteSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'

const ProductDetailsView: React.FC = () => {
  const {id} = useParams()
  const productContext = useProductContext() as ProductContextType

  useEffect(() => {
      productContext.get(id)
  }, [])

  return (
  <>
      <MainMenuWhiteSection />
      <BreadcrumbSection currentPage={productContext.product.name} />
      <ProductDetails product={product} />
      <FooterSection />
  </>
)
}

export default ProductDetailsView