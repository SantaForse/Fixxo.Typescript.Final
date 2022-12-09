import {Link} from 'react-router-dom'
import leftImg from "../assets/images/showcase-img-left.png";
import rightImg from "../assets/images/showcase-img-right.png";

interface showcaseType {
  title1: string
  title2: string
  title3: string
}


const ShowcaseSection: React.FC<showcaseType> = ({title1, title2, title3}) => {
  return (
    <div className="wideShowcase">
        <section className="__showcase container">
            <img src={leftImg} className="__img-left" alt="showcase-img-left" /> 
            <div className="__showcase-body">
                <h1>{title1}</h1>
                <h1>{title2}</h1>
                <h3>{title3}</h3> 
                <Link to="/products" className="btn-theme-red">
                    <div className="line-button-l-1"></div>
                    <div className="line-button-l-2"></div>
                    <p>SHOP NOW</p>
                    <div className="line-button-r-1"></div>
                    <div className="line-button-r-2"></div>
                </Link>
            </div>
            <img src={rightImg} className="__img-right" alt="showcase-img-right" />  
        </section>
    </div>
  )
}

export default ShowcaseSection