import { Link } from "react-router-dom";
import "react-slideshow-image/dist/styles.css";
import styles from "../Slider.module.css";
import background from "../assets/photos/slideshow/image1.jpeg"

const Home = () => {

    return ( 
    <div className={styles.container}>
            <div className={styles.image}>
              <div style={{ backgroundImage: `url(${background})` }}>
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