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
        <h2>ご連絡ありがとうございます。</h2>
        <br></br>
        近日中にお返事させていただきます。
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
      width: isDesktop ? "60%" : "90%"}}>
      <h1>連絡申込</h1>
      <form
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div>
        <Input fullWidth type="text" placeholder="お名前" name="name" required />
      </div>
      <div>
        <Input fullWidth type="email" placeholder="メールアドレス" name="email" required />
      </div>
      <div>
        <TextField fullWidth multiline placeholder="メッセージ" name="message" required />
      </div>
      <div>
        <Button fullWidth type="submit">送信</Button>
      </div>
    </form>
    </Box>
    </>
  );
};

export default ContactForm;