import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ProjectImg from "../assets/images/projectImg.png";

const ProjectItemStyles = styled.div`
position: relative;  
.projectItem__img {
    width: 100%;
    height: 400px;
    border-radius: 12px;
    overflow: hidden;
    display: inline-block;
    border: 3px solid var(--gray-2);
    img {
      height: 100%;
    }
  }
  .projectItem__links {
  position: absolute;
  z-index:10;
  right: 0;
  top: 5px;
  .link {
    display: block;
    margin: 0 5px 5px;
    color:var(--gray-1);
    text-align: center;
    padding: 7px;
    border: 1px solid var(--gray-1);
    border-radius: 4px;
    background: var(--gray-2);
  }
  }
  
  .projectItem__info {
    margin-top: 1rem;
    background-color: var(--deep-dark);
    padding: 1rem;
    border-radius: 12px;
  }
  .projectItem__title {
    font-size: 2.2rem;
  }
  .projectItem__desc,   .projectItem__stack  {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
  }
  .projectItem__stack {
    display: flex;
   
  }
  .stack__item {
    margin-right: 5px;
    color:var(--gray-1);
    padding: 7px;
    border: 1px solid var(--gray-1);
    border-radius: 4px;
  }
  @media only screen and (max-width: 768px) {
    .projectItem__img {
      height: 350px;
    }
  }
`;

export default function ProjectItem({
  img = ProjectImg,
  title = "Project Name",
  desc = "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  stack,
}) {
  console.log(stack);
  return (
    <ProjectItemStyles>
      <div className="projectItem__links">
      <Link to="/projects" className="link">
          Demo
      </Link>
      <Link to="/projects" className="link">
          Code
      </Link>
      </div>
      <Link to="/projects" className="projectItem__img">
        <img src={img} alt="project img" />
      </Link>
      <div className="projectItem__info">
        <Link to="#">
          <h3 className="projectItem__title">{title}</h3>
        </Link>
          
        <p className="projectItem__desc">{desc}</p>
        {stack && (
          <div className="projectItem__stack">
            {stack.map((item) => {
              return <div className="stack__item">{item} </div>;
            })}
          </div>
        )}
      </div>
    </ProjectItemStyles>
  );
}
