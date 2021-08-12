import React from 'react'
import '../Home.css'
import { CSSProperties } from 'react'
import { random } from 'gsap/src/all'
const BackgroundDetail : React.FC<{color:string,className:string}> = (props) => {

    const DetailStyle : CSSProperties = {
        width:'25px',
        height:'25px',
        opacity:'25%',
        backgroundColor: props.color,
        position:'relative',
        left:random(0 , window.innerWidth-25),
        top:random(0 , 700),
        zIndex:1

    }

    return (
        <div style={DetailStyle} className={props.className}></div>
    )
}
export default BackgroundDetail
 