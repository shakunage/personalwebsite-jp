import React from 'react';
import { Box, Card, CardActionArea } from '@mui/material';
import { useMediaQuery } from 'react-responsive'
import blogpostdata from '../data/BlogpostData';

const Blog = () => {

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
          
        <h1>blog</h1>
        {blogpostdata.map((blog, index)=> (
          <Card sx={{marginBottom: 5}} key={index}>
            <CardActionArea href={`/blogs/${blog.id}`}>
            <div style={{margin: 5}}>
            <span style={{float: "right"}}>
              {new Date(blog.date).toLocaleString('en-CA', 
                {month: 'short',
                  day: 'numeric',
                  year: 'numeric'}
                )}
            </span>
            <br></br>
            <h2>{blog.title}</h2>
           {blog.shortdesc} 
            </div>
            </CardActionArea>
          </Card>
          ))}
        <br></br>  
      </Box>
    </>
    
  )
  
}

export default Blog;