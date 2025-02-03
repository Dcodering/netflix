import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/page'
import heroBanner from '../../assets/hero_banner.jpg'
import heroTitle from '../../assets/hero_title.png'
import Play from '../../assets/play_icon.png'
import Info from '../../assets/info_icon.png'
import TitleCards from '../../components/TitleCards/TitleCards'
import Footer from '../../components/footer/Footer'
function Home() {
  return (
    <div className='home'>
      <Navbar />
      <div className="hero">
        <img src={heroBanner} alt="" className='bannerImg' />
        <div className="heroCaption">
          <img src={heroTitle} alt="" className='captionImg' />
          <p>Discovering his ties to a secret ancient order, a
            young man living in modern Instanbul embarks on a
            quest to save the city from an immortal enemy</p>
          <div className="heroBtn">
            <button className='btn'><img src={Play} alt="" />Play</button>
            <button className='btn darkBtn'><img src={Info} alt="" />More Info</button>
          </div>
          <TitleCards className='titleCards'/>
        </div>
      </div>
      <div className="moreCards">
          <TitleCards title={'Blockbuster Movies'} category={'upcoming'}/>
          <TitleCards title={'Only on Netflix'} category={'top_rated'}/>
          <TitleCards title={'Upcoming'} category={'upcoming'}/>
          <TitleCards title={'Top Picks for You'} category={'popular'}/>
      </div>
      <Footer />
    </div>
  )
}

export default Home