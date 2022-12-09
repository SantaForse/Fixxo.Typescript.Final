import React from 'react'

interface SupportType {
    firstH1: string
    secondH1: string
    thirdH1: string
    fourthH1: string

    smallTitle1: string
    smallTitle2: string
    smallTitle3: string
    smallTitle4: string

    underTitle1: string
    underTitle2: string
    underTitle3: string
    underTitle4: string

}
const SupportSection: React.FC<SupportType> = ({firstH1, secondH1, thirdH1, fourthH1, 
                        smallTitle1, smallTitle2, smallTitle3, smallTitle4,
                        underTitle1, underTitle2, underTitle3, underTitle4 }) => {
  return (
    <div>
        <section className="__destination-buttons">
            <div className="container">
                <div className="__support-buttons">
                    <a className="white-ball" href="#"><i className="fa-regular fa-phone"></i></a>
                    <h1>{firstH1}</h1>
                    <p>{smallTitle1}</p>
                    <p>{underTitle1}</p>
                </div>
                <div className="__support-buttons">
                    <a className="white-ball" href="#"><i className="fa-regular fa-credit-card"></i></a>
                    <h1>{secondH1}</h1>
                    <p>{smallTitle2}</p>
                    <p>{underTitle2}</p>
                </div>
                <div className="__support-buttons">
                    <a className="white-ball" href="#"><i className="fa-regular fa-truck"></i></a>
                    <h1>{thirdH1}</h1>
                    <p>{smallTitle3}</p>
                    <p>{underTitle3}</p>
                </div>
                <div className="__support-buttons">
                    <a className="white-ball" href="#"><i className="fa-regular fa-truck"></i></a>
                    <h1>{fourthH1}</h1>
                    <p>{smallTitle4}</p>
                    <p>{underTitle4}</p>
                </div>
            </div>
        </section>
    </div>
  )
}

export default SupportSection