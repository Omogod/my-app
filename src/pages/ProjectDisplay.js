import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import { InsertLinkRounded } from "@material-ui/icons";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="hi"/>
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      <a href={project.link}><GitHubIcon /> </a>
      <a href={project.live}><InsertLinkRounded /> </a>
    </div>
  );
}

export default ProjectDisplay;
