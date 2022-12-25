import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'



const WishListView: React.FC = () => {
  window.parent.document.title = 'Wish List | Fixxo.'
  return (
    <>
      <div className="whiteMainMenu">
        <MainMenuSection />
      </div>
      <BreadcrumbSection currentPage="Wish List" />
      <FooterSection />
    </>
  )
}

export default WishListView