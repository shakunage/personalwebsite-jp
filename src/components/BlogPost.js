import React, { useState, useEffect } from 'react'
import { useMediaQuery } from 'react-responsive'
import Box from '@mui/material/Box';
import ReactMarkdown from 'react-markdown'
import remarkGfm from "remark-gfm"
import imgstyle from "../blog-img-styles.css"

const BlogPost = ({ blog }) => {

	const [blogText, setBlogText] = useState('')

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  useEffect(() => {
		fetch(blog.post).then(res => res.text()).then(text => setBlogText(text))
	})

  return (
    <>
      <Box sx={{
          margin: "auto",
          flexDirection: 'column',
          height:"100vh",
          justifyContent: "start",
          width: isDesktop ? "60%" : "90%"}}>
        <br></br>
        <span style={{float: "right"}}>Posted on {new Date(blog.date).toLocaleString('en-CA', 
                  {month: 'long',
                    day: 'numeric',
                    year: 'numeric'}
                  )}
        </span>

          <div className={imgstyle}>
          <ReactMarkdown linkTarget="_blank" children={blogText} remarkPlugins={[remarkGfm]} />
          </div>

          <br></br>
          
        </Box>
    </>
  )
  
}

export default BlogPost;