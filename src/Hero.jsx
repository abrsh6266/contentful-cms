import React from 'react'
import heroImg  from './assets/hero2.svg'
const Hero = () => {
  return (
    <section className='hero'>
        <div className="hero-center">
            <div className="hero-title">
                <h1>Contentful CMS</h1>
                <p>
                Hoodie solarpunk gastropub cred occupy food truck cloud bread succulents jianbing Brooklyn fam cold-pressed waistcoat. Cornhole 3 wolf moon aesthetic freegan polaroid cred godard you probably haven't heard of them etsy. Schlitz waistcoat tumeric quinoa raw denim. Fam disrupt readymade snackwave squid godard yuccie 8-bit next level kale chips.
                </p>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and browser" className='img'/>
            </div>
        </div>
    </section>
  )
}

export default Hero