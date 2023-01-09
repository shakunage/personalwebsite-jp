import React from 'react';
import Box from '@mui/material/Box';
import { useMediaQuery } from 'react-responsive'

const About = () => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

  return (
    <>
      <Box sx={{
          margin: "auto",
          flexDirection: 'column',
          height:"100vh",
          justifyContent: "start",
          width: isDesktop ? "60%" : "90%"}}>
        <h1>私について</h1>
        <p></p>
          どうも. 👋
        <p>
          Veikka Sakari Junttila（ベイッカ・サカリ・ユンテラ）と申します。普通はミドルネームのサカリと名乗ります。現在はビジネスアナリストとしての活躍を目指しています。
        </p>
          現在は日本在住で、外国語青年招致事業の関係で島根県の自治体の教育委員会で働いております。日本語・英語・フィンランド語３ヶ国語流暢です。
        <p>
          ビジネスやITに興味を持ち、大学で国際ビジネスを専攻し卒業して、大学院の情報システム研究科に入学して、現在リモートで学業を進めて、今年卒業予定です。
        </p>
        <p>
          左側のサイドバーにGitHubポートフォリオのリンクが貼っており、RやPythonなどのプログラミング言語を使ったプロジェクトが紹介されています。SNSのリンクまたはメールの連絡申込をご自由にお使いください。
        </p>
        <p>
          どうぞ、よろしくお願いします。
        </p>
    </Box>
  </>
  )
  
}

export default About;