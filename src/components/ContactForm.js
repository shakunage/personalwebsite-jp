import React, { useState } from "react";
import { Input, Button, TextField, Box } from '@mui/material'
import { useMediaQuery } from 'react-responsive'



const FORM_ENDPOINT = process.env.REACT_APP_HEROTOFU_KEY

const ContactForm = () => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <span style={{position: "center"}}>
        <h2>Thank you!</h2>
        <br></br>
        I'll be in touch with you soon.
      </span>
    );
  }

  return (
    <>
    <Box sx={{
      margin: "auto",
      flexDirection: 'column',
      justifyContent: "start",
      height:"100vh",
      width: isDesktop ? "60%" : "50%"}}>
      <h1>contact form</h1>
      <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <Input fullWidth type="text" placeholder="Your name" name="name" required />
      </div>
      <div>
        <Input fullWidth type="email" placeholder="Email" name="email" required />
      </div>
      <div>
        <TextField fullWidth multiline placeholder="Your message" name="message" required />
      </div>
      <div>
        <Button fullWidth type="submit"> Send a message </Button>
      </div>
    </form>
    </Box>
    </>
  );
};

export default ContactForm;