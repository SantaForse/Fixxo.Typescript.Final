import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import MainMenuWhiteSection from '../sections/MainMenuWhiteSection'

const SearchView = () => {
  window.top.document.title = 'Search | Fixxo.'

  return (
    <>
      <MainMenuWhiteSection />
      <FooterSection />
    </>
  )
}

export default SearchView