import React from 'react'
import BreadcrumbSection from '../sections/BreadcrumbSection'
import ContactFormSection from '../sections/ContactFormSection'
import FooterSection from '../sections/FooterSection'
import MainMenuSection from '../sections/MainMenuSection'
import MapSection from '../sections/MapSection'
import MainMenuWhiteSection from '../sections/MainMenuWhiteSection'


const ContactsView = () => {
window.top.document.title = 'Contacts | Fixxo.'
  return (
    <>
      <MainMenuWhiteSection />
      <BreadcrumbSection currentPage="Contacts" />
      <MapSection />
      <ContactFormSection />
      <FooterSection />
    </>
  )
}

export default ContactsView