import { Link, useLocation } from "react-router-dom";
import { Stack, Box, Icon } from "@mui/material";
import { Telegram, LinkedIn, GitHub } from '@mui/icons-material/';
import { useMediaQuery } from 'react-responsive'
import lineicon from "../assets/lineicon/lineicon.svg"
import headshot from "../assets/photos/profilephoto/img_web1.jpg"

const Sidebar = () => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  const location = useLocation();

  const routerLinkStyle = {
    padding: "0.8rem",
    color: "inherit",
    textDecoration: "inherit",
    fontSize: isDesktop ? 20 : 16
  };

  if ((location.pathname !== "/") && !isDesktop) {
    return null
  } else { return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#e3e3e3',
        flexGrow: "0",
        height: "100vh",
        alignItems: "center",
        width: isDesktop ? "20%" : "45%"
        }}>

      <img 
        src={headshot}  
        style={{
          width: isDesktop ? "11.25rem" : "6rem", 
          height: isDesktop ? "15rem" : "8rem", 
          borderRadius: isDesktop ? "10rem" : "5.25rem", 
          padding: isDesktop ? "1rem" : "0.525rem"}}
        alt="headshot" 
      />

      <center style={{fontSize: isDesktop ? 30 : 24}}>
        Veikka Sakari
        <br></br> 
        Junttila
      </center>

      <br></br>

      <Link style={routerLinkStyle} to="/">
        <span style={{display: isDesktop ? "block" : "none"}}>
          トップページ
        </span>
      </Link>

      <Link style={routerLinkStyle} to="/about">
        私について
      </Link>

      <Link style={routerLinkStyle} to="/resume">
        履歴
      </Link>

      <Link style={routerLinkStyle} to="/contact">
          連絡申込
      </Link>
      
      <br></br>

      <Stack
      direction="row" spacing={isDesktop ? "1rem" : "0.5rem"}>
        <a style={{color: "inherit"}} href="https://github.com/shakunage" target="_blank" rel="noreferrer noopener"><GitHub /></a>
        <a style={{color: "inherit"}} href="https://www.linkedin.com/in/veikka-sakari-junttila/" target="_blank" rel="noreferrer noopener">< LinkedIn/></a>
        <a style={{color: "inherit"}} href="https://t.me/veikkasj" target="_blank" rel="noreferrer noopener"><Telegram /></a>
        <a style={{color: "inherit"}} href="https://line.me/ti/p/R_4xAMO1jU" target="_blank" rel="noreferrer noopener"><Icon><img style={{ display:'flex',height:'inherit',width:'inherit',}} alt="line icon" src={lineicon} /></Icon></a>
      </Stack>
      <p></p>
      <a style={routerLinkStyle} href="https://www.veikkasakarijunttila.com/">English</a>
    </Box>
  ); }
};

export default Sidebar;