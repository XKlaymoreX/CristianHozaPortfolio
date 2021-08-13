import './Home.css';
import BackgroundDetail from './Components/BackgroundDetail';
import { useEffect } from 'react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react';
gsap.registerPlugin(ScrollTrigger)

const App = () => {

  useEffect(() => {

    gsap.fromTo('.landingSection' , {
      opacity:0
    }, {opacity:1, duration:.8})



  }, [])


  return (
    <div className="Home">
      <div className="landingSection">

        {/* IMAGE THUMBNAIL */}
        <div className="profileImageThumbnail centered">
          <div className="profileImage"></div>
          <div className="profileImageFlag">🇨🇭</div>
        </div>
        <p>HI THERE 👋🏻 I'M</p>
        <span>Cristian Hoza</span>
        <div className="myProfession">full stack developer & <br /> web design enthusiast</div>
        <div className="myProfessionDetailed">I’m a specialist Full Stack Developer<br/>
          with growing UI/UX Skills,<br/>
          based in Switzerland.
        </div>
        <div className="callToAction centered">check my work</div>
      </div>
    </div>
  );
}

export default App;
