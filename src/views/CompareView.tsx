import React, { useState } from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import BreadcrumbSection from '../sections/BreadcrumbSection'



const CompareView: React.FC = () => {
  window.parent.document.title = 'Compare | Fixxo.'
  return (
    <>
      <div className="whiteMainMenu">
        <MainMenuSection />
      </div>
      <BreadcrumbSection currentPage="Compare" />
      <FooterSection />
    </>
  )
}

export default CompareView