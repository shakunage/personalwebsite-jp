import { useMediaQuery } from 'react-responsive'
import background from "../assets/photos/slideshow/image2.jpeg"
import mobilebackground from "../assets/photos/slideshow/image2.jpeg"

const Home = () => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

    return ( 
    <div style={{
            alignItems: "center",
            width: isDesktop ? "80%" : "55%",
            height: "100vh"
          }}>
            <div>
              <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                aspectRatio: isDesktop ? 4/3 : 8/24, 
                backgroundImage: isDesktop ? `url(${background})` : `url(${mobilebackground})`}}>

              <span style={{
                  padding: "0.5rem",
                  fontSize: isDesktop ? "2.5rem" : "2rem",
                  background: "#efefef",
                  position: "fixed",
                  right: "10%",
                  top: "5%",
                  writingMode: "vertical-lr",
                  opacity: "90%"
                }}>
                どうも。サカリです。
              </span>
              </div>
            </div>
      </div>
    )
};

export default Home;