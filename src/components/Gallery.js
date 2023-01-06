import React from 'react';
import { Box } from '@mui/material';
import { Slide } from 'react-slideshow-image';
import { useMediaQuery } from 'react-responsive'
import "react-slideshow-image/dist/styles.css";
import styles from "../Slider.module.css";
import imagedata from "../data/ImageData"

const Gallery = () => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  
  return (
    <>
      <Box sx={{
        margin: "auto",
        flexDirection: 'column',
        justifyContent: "start",
        height:"100vh",
        width: isDesktop ? "60%" : "50%"}}>
          
        <h1>gallery</h1>

        <div className="slide-container">
        <Slide
          autoplay={false}
          indicators
          >
         {imagedata.map((slideImage, index)=> (
            <div className={styles.image} key={index}>
              <div style={{'backgroundImage': `url(${slideImage.img})`}}>
                <span>{slideImage.caption}</span>
              </div>
              <center>{slideImage.alt}</center>
              <center>Taken {new Date(slideImage.date).toLocaleString('en-CA', 
                {month: 'short',
                  day: 'numeric',
                  year: 'numeric'}
                )}
              </center>
            </div>
          ))} 
          
        </Slide>
      </div>

      </Box>
    </>
    
  )
  
}

export default Gallery;