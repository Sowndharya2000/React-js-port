import React from "react";
import project from "./data/projects.json";

const Projects = () => {
  return (
    <>
      <div className="container projects my-5" id="projects">
        <h1>PROJECTS</h1>
        <div className="row my-5 d-flex justify-content-center align-items-center">
          {project.map((data) => (
            <div
              className="col-md-2 col-lg-3 col-xl-4 d-flex justify-content-center align-items-center my-3"
              key={data.key}
            >
              <div
                className="card mb-4 bg-dark text-light text-center project-section"
                style={{
                  width: "30rem",
                  border: "2px solid yellow",
                  // boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                }}
                data-aos="flip-right"
                data-aos-duration="1000"
              >
                <div className=" d-flex justify-content-center align-items-center p-3">
                  <img
                    src={data.imageSrc}
                    className="card-img-top"
                    alt="..."
                    style={{
                      height: "100px",
                      width: "100px",
                      border: "1px solid yellow",
                      borderRadius: "10px",
                    }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                  <a
                    href={data.Link}
                    className="btn btn-primary mx-3"
                    target="_blank"
                  >
                    Link
                  </a>
                
                  
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;