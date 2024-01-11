import React from 'react'
//import ReactPlayer from "react-player";
import Video from 'next-video';
import AnimationLogoEZ from'../../videos/LogoEZ.mp4';
import ReactPlayerAsVideo  from './player';

const AnimationLogo = () => {
  return (
    <div>
    <div className="">

      
    <Video as={ReactPlayerAsVideo} src={ AnimationLogoEZ} muted={true} play={true} loop={true}/>;                                                
        
    </div>

  </div>
  )   
}

export default AnimationLogo






















































