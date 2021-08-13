import './Home.css';
import { useEffect,useState } from 'react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react';
import MoonSun from './Shared/Svgs/MoonSun'
gsap.registerPlugin(ScrollTrigger)

const App = () => {


  const [isNightModeOn, setNightMode] = useState(false)

  useEffect(() => {
    gsap.fromTo('.landingSection' , {
      opacity:0
    }, {opacity:1, duration:.8})
  }, [])


  const lightModeSwitchAnimationTrigger = () => {
    
    setNightMode(!isNightModeOn);
    gsap.fromTo('.landingSection' , {
      opacity:0
    }, {opacity:1, duration:.8})

    if(isNightModeOn){
      gsap.to(".moonSun",{
        translateX:parseFloat(gsap.getProperty(".moonSun","x").toString()) -25
      })
    }else{
      gsap.to(".moonSun",{
        translateX: parseFloat(gsap.getProperty(".moonSun","x").toString()) +25
      })
    }
    
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
        <div className={`centered ${isNightModeOn ? "callToActionNM" : "callToAction"}`}>check my skills</div>
        <div className={isNightModeOn ? "lightModeSwitchNM" : "lightModeSwitch"} onClick={() => lightModeSwitchAnimationTrigger()}>
        <MoonSun isNight={isNightModeOn} className={"moonSun"}/>
        </div>
      </div>
    </div>
  );
}

export default App;
