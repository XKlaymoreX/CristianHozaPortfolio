//@ts-nocheck
import React from "react";
import { v4 as uuid } from 'uuid'
import gsap from 'gsap'



const Icon: React.FC<{ classNameOne: string, classNameTwo: string, classNameThree: string }> = ({ classNameOne, classNameTwo, classNameThree }) => {

    /* */

    React.useEffect(() => {

        let myTimeline = gsap.timeline()
        

        myTimeline.to(".firstCodeParagraph", {
            duration: 1,
            text: {
                value: "&lt;<font color='#108bc1'>!</font><font color='#108bc1'>D</font><font color='#108bc1'>O</font><font color='#108bc1'>C</font><font color='#108bc1'>T</font><font color='#108bc1'>Y</font><font color='#108bc1'>P</font><font color='#108bc1'>E</font> <font color='#108bc1'>h</font><font color='#108bc1'>t</font><font color='#108bc1'>m</font><font color='#108bc1'>l</font>&gt;"
            }
        })

        myTimeline.to(".secondCodeParagraph", {
            duration: 1,
            text: {
                value: "&lt;<font color='#108bc1'>h</font><font color='#108bc1'>t</font><font color='#108bc1'>m</font><font color='#108bc1'>l</font>&gt;"
            }
        })

        myTimeline.to(".seventhCodeParagraph", {
            duration: 0,
            text: {
                value: "&lt;/<font color='#108bc1'>h</font><font color='#108bc1'>t</font><font color='#108bc1'>m</font><font color='#108bc1'>l</font>&gt;"
            }
        },1.8)
        myTimeline.to(".thirdCodeParagraph", {
            duration: 1,
            text: {
                value: "&lt;<font color='#108bc1'>h</font><font color='#108bc1'>e</font><font color='#108bc1'>a</font><font color='#108bc1'>d</font>&gt;"
            }
        })
        myTimeline.to(".sixthCodeParagraph", {
            duration: 0,
            text: {
                value: "&lt;/<font color='#108bc1'>h</font><font color='#108bc1'>e</font><font color='#108bc1'>a</font><font color='#108bc1'>d</font>&gt;"
            }
        },2.8)

        myTimeline.to(".fourthCodeParagraph", {
            duration: 1,
            text: {
                value: "&lt;<font color='#108bc1'>b</font><font color='#108bc1'>o</font><font color='#108bc1'>d</font><font color='#108bc1'>y</font>&gt;"
            }
        })
        myTimeline.to(".fifthCodeParagraph", {
            duration: 0,
            text: {
                value: "&lt;/<font color='#108bc1'>b</font><font color='#108bc1'>o</font><font color='#108bc1'>d</font><font color='#108bc1'>y</font>&gt;"
            }
        },3.8)

        myTimeline.to(".codeGreeting",{
            duration:1,
            text:{
                value:"Hi There! 👋"
            }
        })

        return () =>{
            myTimeline.kill(myTimeline)
        }

    }, [])


    return (
        <div className={classNameOne}>
            <div className={classNameTwo}>
                <div className={classNameThree}>

                    <p className="firstCodeParagraph"></p>
                    <p className="secondCodeParagraph" style={{marginLeft:"5px"}}></p>
                    
                    <p className="thirdCodeParagraph" style={{marginLeft:"10px"}}>  </p>
                    <p className="fourthCodeParagraph" style={{marginLeft:"15px"}}></p>
                    <p className="codeGreeting" style={{marginLeft:"25px"}}>

                    </p>
                    <p className="fifthCodeParagraph" style={{marginLeft:"15px"}}></p>
                    <p className="sixthCodeParagraph" style={{marginLeft:"10px"}}></p>
                    <p className="seventhCodeParagraph" style={{marginLeft:"5px"}}></p>


                    <div className="vsCodeIconCircleOne">
                    </div>
                    <div className="vsCodeIconCircleTwo">
                    </div>
                    <div className="vsCodeIconCircleThree">
                    </div>
                </div>
            </div>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="shape-fill"></path>
            </svg>
        </div>
    );
}

export default Icon;
