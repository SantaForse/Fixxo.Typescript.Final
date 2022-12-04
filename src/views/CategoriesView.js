import React, {useEffect} from 'react'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MainMenuWhiteSection from '../sections/MainMenuWhiteSection'
import { useProductContext } from '../contexts/ProductContext'


const CategoriesView = () => {
  const {featured, getFeatured} = useProductContext()
  const {flash, getFlash} = useProductContext()
  window.top.document.title = 'Categories | Fixxo.'

  useEffect (() => {
    getFeatured(8)
    getFlash(8)
  }, [])

  
  return (
    <>
      <MainMenuWhiteSection />
      <BreadcrumbSection currentPage="Categories" />
      <ProductGridSection title="Clothes" items={featured}  />
      <ProductGridSection title="Shoes" items={flash}  />
      <FooterSection />
    </>
  )
}

export default CategoriesView