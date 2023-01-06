import React from 'react';
import { Box, Card, Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { useMediaQuery } from 'react-responsive'
import portfoliodata from "../data/PortofolioData"


const Portfolio = () => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })
  
  return (
    <>
      <Box 
        sx={{
        margin: "auto",
        flexDirection: 'columnm',
        justifyContent: "start",
        height:"100vh",
        width: isDesktop ? "60%" : "50%"}}>
          
        <h1>portfolio</h1>
        Some of my data and software projects. All of these projects demonstrate the skills I've gained during my Master's studies in Business Analytics.
        <p></p>
        {portfoliodata.map((project, index)=> (
          <Card sx={{marginBottom: 5}} key={index}>
            <div style={{margin: 5}}>
            <h2>{project.title}</h2>
            {project.shortdesc}
            <p></p>
            {project.tech}
            <p></p>
            <a href={project.link} target="_blank" rel="noreferrer noopener">GitHub</a>
            <Accordion>
              <AccordionSummary>details <ExpandMore /></AccordionSummary>
              <AccordionDetails>{project.longdesc}</AccordionDetails>
            </Accordion>
            </div>
          </Card>
          ))}
        <br></br>             
      </Box>
    </>
    
  )
  
}

export default Portfolio;