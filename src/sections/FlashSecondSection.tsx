import React, {useEffect} from 'react'
import ProductGridSection from '../sections/ProductGridSection'
import { ProductContextType, useProductContext } from '../contexts/ProductContext'


interface FlashSecondType {
    flashTitle2: string
}

const FlashFirstSection: React.FC<FlashSecondType> = ({flashTitle2}) => {
    const {best, getBest} = useProductContext() as ProductContextType

    useEffect (() => {
        getBest(4)
      }, [])

  return (
    <>
        <section className="__flash-sale-right container">
            <div className="flashSmallScreenSecond">
                <h1>{flashTitle2}</h1>
                <a href="#" className="btn-theme-white">
                    <div className="line-button-l-1"></div>
                    <div className="line-button-l-2"></div>
                    <p>FLASH SALE</p>
                    <div className="line-button-r-1"></div>
                    <div className="line-button-r-2"></div>
                    </a>
            </div>
            <div className="__two-for-left"> 
                <div className="__two-for-left-grid">
                    <ProductGridSection items={best} />
                </div>
            </div>
            <div className="__two-for-right">
                <div className="flashBigScreenSecond container">
                    <div className="__two-for-right-box">
                        <h1>{flashTitle2}</h1>
                        <a href="#" className="btn-theme-white">
                        <div className="line-button-l-1"></div>
                        <div className="line-button-l-2"></div>
                        <p>FLASH SALE</p>
                        <div className="line-button-r-1"></div>
                        <div className="line-button-r-2"></div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </>
    
  )
}

export default FlashFirstSection