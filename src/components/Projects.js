import { Container, Row, Col} from "react-bootstrap"
import projImg1 from "../assets/img/proj1.png";
import projImg2 from "../assets/img/proj2.png";
import projImg3 from "../assets/img/proj3.png";

export const Projects = () => {
    const projects = [
        {
            title:"01 Internship at Coding Labs",
            desc:"An existing member's app, Burleigh Space, was redesigned using Figma and implemented with HTML, Tailwind CSS, and PHP on Laravel. Collaborated with team members through GitHub for seamless coordination and version control.",
            skill:"HTML | Tailwind CSS | PHP | Laravel | Figma | GitHub | Oracle VM Virtual Box",
            type:"Business Project",
            imgURL:projImg1
        },
        {
            title:"02 Eateries App",
            desc:"The Eateries app is developed using Swift and allows users to store and manage their favorite restaurants. It features a restaurant list with detailed information for each entry and utilizes online location services. To ensure data persistence and editability, the app employs Core Data and JSON Serialization methods.",
            skill:"Swift | GitHub",
            type:"Uni Assessment",
            imgURL:projImg2
        },
        {
            title:"03 Crime Data Miner",
            desc:"Collaborated with two teammates to develop Crime Data Miner, a data analysis and visualization tool for the NSW Traffic Penalty dataset. The primary objective was to improve the readability of the data. Utilized GitHub for efficient version control.",
            skill:"Python | GitHub",
            type:"Uni Assessment",
            imgURL:projImg3
        }
    ];
    return (
        <section className="project" id="projects">
            <Container className="card">
                <Col className="card-body d-flex">
                    <div className="line"></div>
                    <h1>Projects</h1>
                </Col>
                <Row className="card-body">
                    <Col xs={12} md={6} xl={5} className="d-flex justify-content-center">
                        <img src={projImg1} style={{width: "320px"}} alt="project_img1"></img>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <h2>{projects[0].title}</h2>
                        <h6>{projects[0].desc}</h6>
                        <p>{projects[0].skill}</p>
                    </Col>
                </Row>
                <Row className="card-body">
                    <Col xs={12} md={6} xl={5} className="d-flex justify-content-center">
                        <img src={projImg2} style={{width: "300px"}} alt="project_img2"></img>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <h2>{projects[1].title}</h2>
                        <h6>{projects[1].desc}</h6>
                        <p>{projects[1].skill}</p>
                        <span>{projects[1].type}</span>                        
                    </Col>
                </Row>
                <Row className="card-body">
                    <Col xs={12} md={6} xl={5} className="d-flex justify-content-center">
                        <img src={projImg3} style={{width: "320px"}} alt="project_img3"></img>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <h2>{projects[2].title}</h2>
                        <h6>{projects[2].desc}</h6>
                        <p>{projects[2].skill}</p>
                        <span>{projects[2].type}</span>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}