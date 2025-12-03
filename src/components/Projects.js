import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Jamshedpur Services (Android App)",
      description: "City services Android application built with Java/Kotlin, focusing on a clean UI and smooth navigation for users.",
      imgUrl: projImg1,
    },
    {
      title: "Tic Tac Toe (Android Game)",
      description: "A classic Tic Tac Toe game built in Kotlin/Java, highlighting core game logic, animations, and responsive gameplay.",
      imgUrl: projImg2,
    },
    {
      title: "Temperature Monitoring System (IoT-Based)",
      description: "ESP32 + sensor-based IoT system for real-time temperature tracking, designed for reliability and easy data visualization.",
      imgUrl: projImg3,
    },
    {
      title: "Teacher Portal (Android)",
      description: "Teacher dashboard app with login, notices, attendance, and basic student management — built using Android and modern UI components.",
      imgUrl: projImg1,
    },
    {
      title: "Flappy Bird (Java Game)",
      description: "Recreation of the classic Flappy Bird using core Java and OOP concepts, focusing on game physics and event handling.",
      imgUrl: projImg2,
    },
    {
      title: "Personal Portfolio Website",
      description: "Responsive React-based portfolio to showcase my projects, skills, and journey as a CS Engineering student & developer.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>
                    From Android apps and Java games to IoT-based systems and web experiences, 
                    I enjoy turning ideas into real, working solutions. Here are some of the 
                    projects that reflect my journey as a CS Engineering student, Android developer, 
                    and tech enthusiast. 🚀
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Featured</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Android & IoT</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">More</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={isVisible ? "animate__animated animate__slideInUp" : ""}
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>

                      {/* Make sure this eventKey matches the Nav.Link above */}
                      <Tab.Pane eventKey="second">
                        <p>
                          I love building practical solutions — especially Android apps and IoT-based projects.
                          From monitoring real-world sensor data to creating smooth mobile experiences, these
                          projects reflect my hands-on approach to learning and problem-solving.
                        </p>
                      </Tab.Pane>

                      <Tab.Pane eventKey="third">
                        <p>
                          Beyond these, I keep exploring data, algorithms, and new technologies — improving my
                          skills in problem-solving, UI/UX, and modern development practices as I grow in the
                          tech world. 🌐💡
                        </p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background" />
    </section>
  );
};
