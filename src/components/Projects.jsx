import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/SL_0212121_40670_78.jpg";
import projImg2 from "../assets/img/pexels-realtoughcandycom-11035544.jpg";
import projImg3 from "../assets//img/pexels-nguyen-huy-20446885.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

import React from "react";

export const Projects = () => {
  const projects = [
    {
      title: "Crypto app",
      description: "Маленькое React приложение",
      imgUrl: projImg1,
      href: "https://main--cryptoappproject.netlify.app/",
    },
    {
      title: "Github API project",
      description: "Запрос API  с гитхаба с использованием RTK",
      imgUrl: projImg2,
      href: "https://redux-train.netlify.app/",
    },
    {
      title: "Sport landing APP",
      description: "Лэндинг спортивного клуба с TS",
      imgUrl: projImg3,
      href: "https://65e6118d32e6f7162e81f781--sportappwithts.netlify.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
      href: "https://main--cryptoappproject.netlify.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
      href: "https://main--cryptoappproject.netlify.app/",
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      href: "https://main--cryptoappproject.netlify.app/",
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Здесь представлены лишь некоторые ссылки на мои готовые
                    проекты
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
