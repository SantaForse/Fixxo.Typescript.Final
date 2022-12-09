import React from 'react'
import bannerRightImg from "../assets/images/banner-right.svg";
import bannerLeftImg from "../assets/images/banner-left.svg";

interface TwobannerType {
    titleLeft1: string
    titleLeft2: string
    titleRight1: string
    titleRight2: string
}

const TwoBannersSection:React.FC<TwobannerType> = ({titleLeft1, titleLeft2, titleRight1, titleRight2}) => {
  return (
    <div>
        <section className="__banners container">
        <div className="__banner-img-left">
            <img src={bannerLeftImg}  alt="banner-img-left" /> 
            <div className="__banner-text">
                <h1>{titleLeft1}</h1>
                <h1>{titleLeft2}</h1>
                <a href="#" className="btn-theme-dark">
                    <div className="line-button-l-1"></div>
                    <div className="line-button-l-2"></div>
                    <p>SHOP NOW</p>
                    <div className="line-button-r-1"></div>
                    <div className="line-button-r-2"></div>
                </a>
            </div>
        </div>
        <div className="__banner-img-right">
            <img src={bannerRightImg}  alt="banner-img-left" /> 
            <div className="__banner-text">
                <h1>{titleRight1}</h1>
                <h1>{titleRight2}</h1>
                <a href="#" className="btn-theme-white">
                    <div className="line-button-l-1"></div>
                    <div className="line-button-l-2"></div>
                    <p>FLASH SALE</p>
                    <div className="line-button-r-1"></div>
                    <div className="line-button-r-2"></div>
                </a>
            </div>
        </div>
    </section>

    </div>
  )
}

export default TwoBannersSection