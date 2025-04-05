import {useState , useEffect} from "react";
import Speakers from "./speakers.js";
import Speakers2 from "./speakers2.js";
import styles from "./speakers2.module.css";

const Speaker = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1001 && window.innerWidth >= 501 );

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 1001 && window.innerWidth >= 501);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    return (
      <>
        <div className={styles.speaker}>
            {isSmallScreen ? <Speakers2 /> : <Speakers />}
        </div>
      </>
        
    );
}
 
export default Speaker;