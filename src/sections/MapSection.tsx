import React from 'react'

const MapSection: React.FC = () => {
  return (
    
        <iframe
        className="google-map"
        title="google-map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d32562.072187141563!2d18.081016787890626!3d59.33079155020855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssv!2sse!4v1667317301888!5m2!1ssv!2sse" 
        allowFullScreen={true} 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade">


        </iframe>
    
  )
}

export default MapSection