import React from "react";
import { Element } from "react-scroll";
import Project from "../Project";
import "./Projectcontainer.css";

const Projectcontainer = () => {
  const Projects = [
    {
      img: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg",
      title: "Facebook",
      Description: "good work",
      Link: "www.google.com",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg",
      title: "Facebook",
      desc: "good work",
      Link: "www.google.com",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg",
      title: "Facebook",
      Description: "good work",
      Link: "www.google.com",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg",
      title: "Facebook",
      Description: "good work",
      Link: "www.google.com",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg",
      title: "Facebook",
      Description: "good work",
      Link: "www.google.com",
    },
    {
      img: "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569__480.jpg",
      title: "Facebook",
      Description: "good work",
      Link: "www.google.com",
    },
  ];
  return (
    <Element className="projectcontainer" name="projects" id="projects">
      <h1>Projects</h1>
      <p>Hear some project avilable</p>
      <div className="projectcontainer_projects">
        {Projects.map((x, index) => {
          return (
            <Project
              key={index}
              img={x.img}
              title={x.title}
              desc={x.desc}
              Link={x.Link}
            />
          );
        })}
      </div>
    </Element>
  );
};
export default Projectcontainer;
