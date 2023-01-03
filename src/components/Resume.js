import React from 'react';
import { Box, Button } from '@mui/material/';
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
        <div>
        <embed style={{height: "100vh", width: "100%"}} src={resumefile} type="application/pdf"/>
        </div>
      </Box>
    </>
    
  )
  
}

export default Resume;