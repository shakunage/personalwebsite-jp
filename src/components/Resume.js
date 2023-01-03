import React from 'react';
import { Box, Button } from '@mui/material/';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import resumefile from "../assets/pdfs/resume.pdf"

const Resume = () => {

  return (
    <>
      <Box sx={{
        margin: "auto",
        flexDirection: 'column',
        justifyContent: "start",
        height:"100vh",
        width: "60%"}}>
        <h1>resume</h1>
        <Button style={{justifyContent: "flex-start"}}><a style={{color: "inherit", textDecoration: "inherit"}} href={resumefile} download>download resume</a></Button>
        <Document file={resumefile}>
        <Page height={650} pageNumber={1} />
        </Document>
      </Box>
    </>
    
  )
  
}

export default Resume;