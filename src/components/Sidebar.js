import { Link } from "react-router-dom";
import { Stack, Box, Typography, Icon } from "@mui/material";
import { Telegram, LinkedIn, GitHub } from '@mui/icons-material/';
import lineicon from "../assets/lineicon/lineicon.svg"
import headshot from "../assets/photos/profilephoto/img_web1.jpg"

const Sidebar = () => {

  const routerLinkStyle = {
    padding: 10,
    color: "inherit",
    textDecoration: "inherit",
  };

  const nameSpacing = {
    marginLeft: 20,
    marginRight: 20,
  };

  return (
    <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        bgcolor: '#e3e3e3',
        flexGrow: "0",
        height: "100vh",
        m: "5",
        alignItems: "center",
        width: "20%"
        }}>

      <img 
        src={headshot}  
        style={{width: 135, height: 180, borderRadius: 200/2, padding: 10}}
        alt="headshot" 
      />

      <Typography style={nameSpacing} variant="name">Veikka Sakari </Typography>
      <Typography style={nameSpacing} variant="name">Junttila</Typography>

      <br></br>

      <Link style={routerLinkStyle} to="/">
        <Typography variant="link">home</Typography>
      </Link>

      <Link style={routerLinkStyle} to="/about">
      <Typography variant="link">about me</Typography>
      </Link>

      <Link style={routerLinkStyle} to="/resume">
      <Typography variant="link">resume</Typography>
      </Link>
      
      <Link style={routerLinkStyle} to="/portfolio">
      <Typography variant="link">portfolio</Typography>
      </Link>

      <Link style={routerLinkStyle} to="/blog">
      <Typography variant="link">blog</Typography>
      </Link>

      <Link style={routerLinkStyle} to="/gallery">
      <Typography variant="link">gallery</Typography>
      </Link>

      <Link style={routerLinkStyle} to="/contact">
      <Typography variant="link">contact</Typography>
      </Link>
      
      <br></br>

      <Stack
      direction="row" spacing={2}>
        <a style={{color: "inherit"}} href="https://github.com/shakunage" target="_blank" rel="noreferrer noopener"><GitHub /></a>
        <a style={{color: "inherit"}} href="https://www.linkedin.com/in/veikka-sakari-junttila/" target="_blank" rel="noreferrer noopener">< LinkedIn/></a>
        <a style={{color: "inherit"}} href="https://t.me/veikkasj" target="_blank" rel="noreferrer noopener"><Telegram /></a>
        <a style={{color: "inherit"}} href="https://line.me/ti/p/R_4xAMO1jU" target="_blank" rel="noreferrer noopener"><Icon><img style={{ display:'flex',height:'inherit',width:'inherit',}} alt="line icon" src={lineicon} /></Icon></a>
      </Stack>

    </Box>
  );
};

export default Sidebar;