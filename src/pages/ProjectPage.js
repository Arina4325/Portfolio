import React from 'react'
import BtnGitHub from "./../components/BtnGitHub/BtnGitHub.js"
import { useParams } from 'react-router-dom';
import { projects } from '../helpers/projectsList';


const ProjectPage = () => {

  const {id} = useParams(); 
  const project = projects[id];


  return (
    <>
    <main className="section">
    <div className="container">
        <div className="project-details">

            <h1 className="title-1">Project: {project.title}</h1>

            <img src={project.imgBig} alt={project.title} className="project-details__cover"/>

            <div className="project-details__desc">
                <p>Skills: {project.skills}</p>
            </div>

            {/* if in project's list we have link on gitHub - button will be on the page */}
            {project.gitHubLink &&(
              <BtnGitHub link = {project.gitHubLink}/>
            )}

        </div>
    </div>
</main>
    </>
  )}  

export default ProjectPage;