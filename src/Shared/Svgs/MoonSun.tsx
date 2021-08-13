import React from "react";

const MoonSun : React.FC<{isNight: boolean, className:string}> = ({isNight,className}) => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width="35"
    height="35"
    fill="none"
    viewBox="0 0 389 390"
    className={className}
  >
    <circle cx="193.489" cy="193.489" r="192.511"
    //cerchio sole grande
    className={isNight ? "majorMoonSunCircleNM" : "majorMoonSunCircle"}></circle>
    <g filter="url(#filter0_d)">
      <circle cx="193.489" cy="193.489" r="115.506"
      //cerchio sole piccolo
    className={isNight ? "minorMoonSunCircleNM" :  "minorMoonSunCircle"}
      fill="#FFC350"></circle>
    </g>
    <g filter="url(#filter1_d)">
      <path
        className={isNight ? "moonNM" :  "moon"}
        fill="#F0D85A"
        d="M385 195.025c0 104.015-64.083 170.435-174.329 186.689-3.348.494-17.612.38-26.907-.595-237.599-46.156 83.418 9.449 75.107-190.561C244.693 6.926 86.771 3.474 189.929 0 296.584 0 385 87.852 385 195.025z"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_d"
        width="279.013"
        height="279.013"
        x="53.983"
        y="53.983"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feMorphology
          in="SourceAlpha"
          operator="dilate"
          radius="15"
          result="effect1_dropShadow"
        ></feMorphology>
        <feOffset></feOffset>
        <feGaussianBlur stdDeviation="4.5"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0.995833 0 0 0 0 0.74403 0 0 0 0 0.261406 0 0 0 1 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        ></feBlend>
      </filter>
      <filter
        id="filter1_d"
        width="297"
        height="390"
        x="92"
        y="0"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
  );
}

export default MoonSun;
