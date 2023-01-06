import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'
import styles from "../Slider.module.css";
import background from "../assets/photos/slideshow/image1.jpeg"
import mobilebackground from "../assets/photos/mobile_background.jpg"

const Home = () => {

  const isDesktop = useMediaQuery({
    query: '(min-width: 1024px)'
  })

    return ( 
    <div className={styles.container}>
            <div className={styles.image}>
              <div style={{ backgroundImage: isDesktop ? `url(${background})` : `url(${mobilebackground})`}}>
              <span>
                Hi there!
                <br></br>
                I'm Sakari.
                <br></br>
                <Link style={{color: "inherit"}} to="/about">Learn more...</Link>
              </span>
              </div>
            </div>
      </div>
    )
};

export default Home;