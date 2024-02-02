import React from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import slide1 from "../assets/quiz1.jpeg";
import slide2 from "../assets/quiz2.jpg";
import slide3 from "../assets/quiz3.jpeg";
import slide4 from "../assets/quiz4.png";
import slide5 from "../assets/images-removebg-preview.png";
export const ImgSlider = () => {
    const sliderImages =[
        {url:slide1}, {url:slide2}, {url:slide3}, {url:slide4}, {url:slide5}
    ];
  return (
    <div>
         <SimpleImageSlider
            width={"99%"}
            height={600}
            images={sliderImages}
            showNavs={true}
            autoPlay={true}
         />
    </div>
  )
}