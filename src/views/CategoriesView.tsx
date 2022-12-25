import React, {useEffect} from 'react'
import FooterSection from '../sections/FooterSection'
import ProductGridSection from '../sections/ProductGridSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MainMenuSection from '../sections/MainMenuSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'


const CategoriesView: React.FC = () => {
  const {featured, getFeatured} = useProductContext() as ProductContextType
  const {flash, getFlash} = useProductContext() as ProductContextType
  const {best, getBest} = useProductContext() as ProductContextType
  window.parent.document.title = 'Categories | Fixxo.'

  useEffect (() => {
    getFeatured(8)
    getFlash(4)
    getBest(4)
  }, [])

  
  return (
    <>
      <div className="whiteMainMenu">
        <MainMenuSection />
      </div>
      <BreadcrumbSection currentPage="Categories" />
      <ProductGridSection title="Featured" items={featured}  />
      <ProductGridSection title="Flash" items={flash}  />
      <ProductGridSection title="Best reviews" items={best}  />
      <FooterSection />
    </>
  )
}

export default CategoriesView