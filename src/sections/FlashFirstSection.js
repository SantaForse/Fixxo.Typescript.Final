import React, {useEffect} from 'react'
import ProductGridSection from '../sections/ProductGridSection'
import { useProductContext } from '../contexts/ProductContext'

const FlashFirstSection = ({flashTitle}) => {
    const {flash, getFlash} = useProductContext()

    useEffect (() => {
        getFlash(4)
      }, [])

  return (
    <div>
        <section className="__flash-sale-left container">
            <div className="__two-for-left"> 
                <div className="__two-for-left-box">
                    <h1>{flashTitle}</h1>
                    <a href="#" className="btn-theme-white">
                        <div className="line-button-l-1"></div>
                        <div className="line-button-l-2"></div>
                        <p>FLASH SALE</p>
                        <div className="line-button-r-1"></div>
                        <div className="line-button-r-2"></div>
                    </a>
                </div>
            </div>
            <div className="__two-for-right">
                <div className="__two-for-right-grid">
                <ProductGridSection items={flash} />
                </div>
            </div>
        </section>
    </div>
    
  )
}

export default FlashFirstSection