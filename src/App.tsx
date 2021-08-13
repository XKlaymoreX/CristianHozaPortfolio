import './Home.css';
import { useEffect,useState } from 'react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react';
gsap.registerPlugin(ScrollTrigger)

const App = () => {


  const [isNightModeOn, setNightMode] = useState(false)

  useEffect(() => {
    gsap.fromTo('.landingSection' , {
      opacity:0
    }, {opacity:1, duration:.8})
  }, [])


  const lightModeSwitchAnimationTrigger = () => {
    gsap.fromTo('.landingSection' , {
      opacity:0
    }, {opacity:1, duration:.8})
  }

  

  return (
    <div className={isNightModeOn ? "HomeNM" : "Home"}>
      <div className="landingSection">

        {/* IMAGE THUMBNAIL */}
        <div className="profileImageThumbnail centered">
          <div className={isNightModeOn ? "profileImageNM" : "profileImage"}></div>
          <div className="profileImageFlag">🇨🇭</div>
        </div>
        <p>HI THERE 👋🏻 I'M</p>
        <span>Cristian Hoza</span>
        <div className={isNightModeOn ? "myProfessionNM" : "myProfession"}>full stack developer & <br /> web design enthusiast</div>
        <div className={isNightModeOn ? "myProfessionDetailedNM" : "myProfessionDetailed"}>I’m a specialist Full Stack Developer<br/>
          with growing UI/UX Skills,<br/>
          based in Switzerland.
        </div>
        <div className={`centered ${isNightModeOn ? "callToActionNM" : "callToAction"}`}>check my work</div>

        <input type="checkbox" style={{cursor:'pointer'}} onClick={() => {setNightMode(!isNightModeOn); lightModeSwitchAnimationTrigger()}}></input>
        {isNightModeOn ? <div>Night Mode On</div> : <div>Night Mode Off</div>}
      </div>
    </div>
  );
}

export default App;
