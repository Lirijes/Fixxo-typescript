import React from 'react'
import PamelasTopPicks from '../assets/images/img-top-picks.svg';
import Conscious from '../assets/images/conscious.svg';

const ConsciousSection: React.FC = () => {
  return (
    <section className="topPicksConscious">
        <div className="container">
            <article className="top-picks">
                <img className="pamelas-top-picks" src={PamelasTopPicks} alt="PamelasTopPicks" />
                <h1>Pamela Reif's Top Picks</h1>
                <button type="button" className="btn btn-red">SHOP NOW</button>
            </article>
            <article className="conscious">
                <img className="conscious-img" src={Conscious} alt="Conscious" />
                <h1>Let's Be Conscious</h1>
                <button type="button" className="btn btn-red">FLASH SALE</button>
            </article>
        </div>
    </section>
  )
}

export default ConsciousSection