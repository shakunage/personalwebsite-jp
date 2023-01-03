import React from 'react';
import { Box, Card, CardActionArea } from '@mui/material';
import blogpostdata from '../data/BlogpostData';

const Blog = () => {
  
  return (
    <>
      <Box sx={{
        margin: "auto",
        flexDirection: 'column',
        justifyContent: "start",
        height:"100vh",
        width: "60%"}}>
          
        <h1>blog</h1>
        {blogpostdata.map((blog, index)=> (
          <Card sx={{marginBottom: 5}} key={index}>
            <CardActionArea href={`/blogs/${blog.id}`}>
            <div style={{margin: 5}}>
            <h2>{blog.title}</h2>
            <span style={{float: "right"}}>
              <br></br>
              {new Date(blog.date).toLocaleString('en-CA', 
                {month: 'short',
                  day: 'numeric',
                  year: 'numeric'}
                )}
            </span>
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