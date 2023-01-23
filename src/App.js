import { Routes, Route, useMatch } from "react-router-dom";
import React, { useEffect } from 'react';
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import theme from './theme';
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Home from "./components/Home";
import About from "./components/About";
import Resume from "./components/Resume";
import Shokumukeireki from "./components/Shokumukeireki";
import ContactForm from "./components/ContactForm";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";

const App = () => {

  /* const match = useMatch('/blogs/:id')

   const blog = match 
    ? blogpostdata.find(blog => blog.id === match.params.id)
    : null */

  useEffect(() => {
    document.title = "Veikka Sakari Junttila"
 }, []);

  return (
      <ThemeProvider theme={theme}>
      <CssBaseline/>
      <TopBar/>
      <Box sx={{display: "flex", flexDirection: "row"}}>
      <Sidebar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/shokumukeireki" element={<Shokumukeireki />} />
          <Route path="/contact" element={<ContactForm />} />
      </Routes>
      </Box>
      </ThemeProvider>
  )
  };

export default App;