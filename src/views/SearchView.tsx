import React from 'react'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'


const SearchView: React.FC = () => {
  window.parent.document.title = 'Search | Fixxo.'

  return (
    <>
      <div className="whiteMainMenu">
        <MainMenuSection />
      </div>
      <FooterSection />
    </>
  )
}

export default SearchView