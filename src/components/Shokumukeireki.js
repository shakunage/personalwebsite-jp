import React from 'react';
import { Box, Button } from '@mui/material/';
import { useMediaQuery } from 'react-responsive'
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import shokumukeireki from "../assets/pdfs/shokumukeireki.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js';

const Shokumukeireki = () => {

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
        <h1>職務経歴</h1>
        <Button style={{justifyContent: "flex-start"}}><a style={{color: "inherit", textDecoration: "inherit"}} href={shokumukeireki} download>職務経歴書をダウンロードする</a></Button>
        <Document file={shokumukeireki}>
        <Page width={isDesktop ? 550 : 350} pageNumber={1} />
        <br></br>
        </Document>
      </Box>
    </>
    
  )
  
}

export default Shokumukeireki;