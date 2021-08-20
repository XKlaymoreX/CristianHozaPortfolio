import './Home.css';
import { useEffect, useState } from 'react';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import React from 'react';
import MoonSun from './Shared/Svgs/MoonSun'
import WebProgramming from './Shared/Svgs/WebProgramming'
import { v4 as uuid } from 'uuid'
import SkillComponent from './Components/SkillComponent'
import Circuit from './Shared/Svgs/Circuit'
import Link from './Shared/Svgs/Link'
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const [isNightModeOn, setNightMode] = useState(false)
  useEffect(() => {
    gsap.fromTo('.landingSection', {
      opacity: 0
    }, { opacity: 1, duration: .8 })


    if (isNightModeOn) {
    } else {
      gsap.fromTo('.circuitSvg', {
        rotateZ: '45deg'
      }, {
        scrollTrigger: {
          trigger: '.landingSection',
          scrub: 2,
          start: 'top top',
          end: 'bottom top',
        },
        rotateZ: '-180deg'
      })
    }

  }, [])

  const lightModeSwitchAnimationTrigger = () => {
    setNightMode(!isNightModeOn);
    gsap.fromTo('.section', {
      opacity: 0
    }, { opacity: 1, duration: .8 })

    if (isNightModeOn) {
      gsap.to(".moonSun", {
        translateX: parseFloat(gsap.getProperty(".moonSun", "x").toString()) - 25
      })
    } else {
      gsap.to(".moonSun", {
        translateX: parseFloat(gsap.getProperty(".moonSun", "x").toString()) + 25
      })
    }

  }
  const nightModeClass = (className: string) => {
    if (isNightModeOn) {
      return className.concat("NM")
    } else {
      return className
    }
  }

  const workSkills = ["C#","PowerBi", "MSQL", "React","Typescript","Azure"]
  const frontendSkills = ["React", "Typescript", "Javascript", "HTML5", "CSS3", "Bootstrap", "Sass", "Webpack", "GSAP"]
  const backEndSkills = [".NET", "C#", "Azure", "EFCore", "Node.JS", "Express.JS", "LINQ"]
  const frameworksAndOtherSkills = ["MERN Stack", "ASP.NET MVC", "SAP", "PowerBi", "Premiere Pro", "Figma", "After Effects", "Photoshop", "SQL"]
  return (
    <div className="Home">
      <div className={nightModeClass("landingSection").concat(" section")}>
        {/* IMAGE THUMBNAIL */}
        <div className="profileImageThumbnail centered">
          <div className={nightModeClass("profileImage")}></div>
          <div className="profileImageFlag">🇨🇭</div>
        </div>
        <p>HI THERE 👋🏻 I'M</p>
        <span>Cristian Hoza</span>
        <div className={nightModeClass("myProfession")}>full stack developer & <br /> web design enthusiast</div>
        <div className={nightModeClass("myProfessionDetailed")}>I’m a 20 y.o specialist Full Stack Developer<br />
          with growing UI/UX Skills,<br />
          based in Switzerland.
        </div>
        <div className={nightModeClass("callToAction").concat(" centered")}>check my skills</div>
        <div className={nightModeClass("lightModeSwitch")} onClick={() => lightModeSwitchAnimationTrigger()}>
          <MoonSun isNight={isNightModeOn} className={"moonSun"} />
        </div>
      </div>







      <div className={nightModeClass("myWorkSection").concat(" section")}>
        <div className={nightModeClass("sectionTitle")}>
          <WebProgramming isNight={isNightModeOn} />
          <p>My<br />Work</p>
        </div>
        <div className={nightModeClass("upperCaption").concat(" upperCaptionOne")}>
          currently having fun as
        </div>
        <p className={nightModeClass("workDetail").concat(" workDetailOne")}>Specialist Technical <br/> Consultant</p>
        <div className={nightModeClass("upperCaption").concat(" upperCaptionTwo")}>
          with..
        </div>
        <p className={nightModeClass("workDetail").concat(" workDetailTwo")} > <Link className={nightModeClass("linkSvg")} />Aubay Italy</p>
        <div className={nightModeClass("upperCaption").concat(" upperCaptionThree")}>
          using..
        </div>
        <div className={"workSkillsGrid"}>
          {workSkills.map(item => {
            return <SkillComponent key={uuid()} skill={item} className={nightModeClass("skillItem")} />
          })}
        </div>
      </div>










      <div className={nightModeClass("skillsSection").concat(" section")}>
        <div className={nightModeClass("sectionTitle")}>
          <WebProgramming isNight={isNightModeOn} />
          <p>My<br />Skills</p>
        </div>

        <div className={nightModeClass("skillsSectionContent")}>
          <p>Frontend</p>
          <div className="skillContainer">
            {frontendSkills.map(item => {
              return (
                <SkillComponent key={uuid()} skill={item} className={nightModeClass("skillItem")} />
              )
            })}
          </div>
          <p>Backend</p>
          <div className="skillContainer">
            {backEndSkills.map(item => {
              return (
                <SkillComponent key={uuid()} skill={item} className={nightModeClass("skillItem")} />
              )
            })}
          </div>
          <p>Framweworks & Others</p>
          <div className="skillContainer">
            {frameworksAndOtherSkills.map(item => {
              return (
                <SkillComponent key={uuid()} skill={item} className={nightModeClass("skillItem")} />
              )
            })}
          </div>
        </div>
      </div>
      <Circuit className={nightModeClass("circuitSvg")} />

    </div>
  );
}

export default App;
