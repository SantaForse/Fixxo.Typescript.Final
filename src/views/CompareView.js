import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import MainMenuWhiteSection from '../sections/MainMenuWhiteSection'



const CompareView = () => {
  window.top.document.title = 'Compare | Fixxo.'
  return (
    <>
      <MainMenuWhiteSection />
      <BreadcrumbSection currentPage="Compare" />
      <FooterSection />
    </>
  )
}

export default CompareView