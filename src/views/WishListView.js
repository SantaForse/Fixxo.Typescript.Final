import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MainMenuWhiteSection from '../sections/MainMenuWhiteSection'


const WishListView = () => {
  window.top.document.title = 'Wish List | Fixxo.'
  return (
    <>
      <MainMenuWhiteSection />
      <BreadcrumbSection currentPage="Wish List" />
      <FooterSection />
    </>
  )
}

export default WishListView