import React from 'react';
import { Box, Button } from '@mui/material/';
import { useMediaQuery } from 'react-responsive'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import resumefile from "../assets/pdfs/rirekisho.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const Resume = () => {

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
        width: isDesktop ? "60%" : "90%"}}>
        <h1>履歴</h1>
        <Button style={{justifyContent: "flex-start"}}><a style={{color: "inherit", textDecoration: "inherit"}} href={resumefile} download>履歴書をダウンロードする</a></Button>
        <Document file={resumefile}>
        <Page width={isDesktop ? 550 : 350} pageNumber={1} />
        <br></br>
        <Page width={isDesktop ? 550 : 350} pageNumber={2} />
        </Document>
      </Box>
    </>
    
  )
  
}

export default Resume;