import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import MainMenuWhiteSection from '../sections/MainMenuWhiteSection'


const NotFound = () => {
  window.top.document.title = 'Not Found | Fixxo.'
  return (
    <>
      <MainMenuWhiteSection />
      <div className="container d-flex justify-content-center align-items-center" style={{ height: "500px" }}>
        <h1>404 - Page Not Found</h1>
      </div>
      <div style={{ position: "fixed", bottom:"0"}}>
        <FooterSection />
      </div>
    </>
  )
}

export default NotFound