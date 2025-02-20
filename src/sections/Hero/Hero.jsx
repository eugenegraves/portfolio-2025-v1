import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import githubLight from "../../assets/github-light.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/themeContent";

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className="styles.colorModeContainer">
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile Picture of Eugene Graves III"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Harris
          <br />
          Johnsen
        </h1>
        <h2>Frontend Developer</h2>
        <span></span>
        <a href="https://x.com/" target="_blank">
          <img src={twitterIcon} alt="Twitter Icon" />
        </a>
        <a href="https://github.com/" target="_blank">
          <img src={githubIcon} alt="Github Icon" />
        </a>
        <a href="https://linkedin.com/" target="_blank">
          <img src={linkedinIcon} alt="LinkedIn Icon" />
        </a>
        <span>
          <p>
            With a passion for developing modern React web apps for commercial
            businesses.
          </p>
          <span>
            <a href={CV} className="hover" download>
              <button>Resume</button>
            </a>
          </span>
        </span>
      </div>
    </section>
  );
}

export default Hero;
