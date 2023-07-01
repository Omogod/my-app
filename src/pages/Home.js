import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Proj7 from "../assets/proj7.jpg"

function Home() {
  return (
    <div className="home">
      <div className="about">
        <img class="pImage" src={Proj7} alt="profile-Pic" />
        <h2> Hi, My Name is Godstime</h2>
        <div className="prompt">
          <p>A skilled and creative full stack software developer  with great passion for learning and innovation. my skills listed below. </p>
          <a href="https://www.linkedin.com/in/godstime-omoregie-a87aa0183"> <LinkedInIcon /> </a>
          <a href="mailto:godstimeomoregie0@gmail.com"><EmailIcon /></a>
          <a href="https://github.com/Omogod"><GithubIcon /> </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, HTML, CSS, React Native, BootStrap, MaterialUI, Yarn, TailwindCSS, StyledComponents, AngularJs
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, ExpressJS, GraphQL, REST API,
              MySQL, MongoDB, PostgresQL, NestJs. SQLite
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Python, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
