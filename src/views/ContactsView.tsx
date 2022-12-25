import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ContactFormSection from '../sections/ContactFormSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import MapSection from '../sections/MapSection'
import MainMenuWhiteSection from '../sections/MainMenuSection'


const ContactsView: React.FC = () => {
window.parent.document.title = 'Contacts | Fixxo.'
  return (
    <>
      <div className="whiteMainMenu">
        <MainMenuSection />
      </div>
      <BreadcrumbSection currentPage="Contacts" />
      <MapSection />
      <ContactFormSection />
      <FooterSection />
    </>
  )
}

export default ContactsView