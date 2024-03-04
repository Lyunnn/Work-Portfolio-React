import { Container, Row, Col } from "react-bootstrap";

export const Skills = () => {
    return (
        <section className="skill" id="skills">
            <h1>Skills <span class="dot"></span> </h1>
            <h6>Web Development | Mobile App Development | Design | Databases</h6>
            <Container className="card border-0 d-flex flex-row">
                <Row className="card-body">
                    <Col xs={12} md={6} xl={3}>
                        <h5>Design</h5>
                        <p>Figma</p>
                        <p>AdobeXD</p>
                    </Col>
                    <Col xs={12} md={6} xl={3}>
                        <h5>Frontend</h5>
                        <p>HTML5</p>
                        <p>CSS3</p>
                        <p>Tailwind CSS</p>
                        <p>Bootstrap</p>
                        <p>JavaScript</p>
                        <p>Angular</p>
                        <p>Ionic</p>
                        <p>TypeScript</p>
                        <p>Swift</p> 
                    </Col>
                    <Col xs={12} md={6} xl={3}>
                        <h5>Backend</h5>
                        <p>Laravel</p>
                        <p>PHP</p>
                        <p>MySQL</p>
                        <p>RESTful API</p>
                        <p>NodeJS</p>
                        <p>MongoDB</p>
                        <p>Python</p>
                        <p>C</p>
                    </Col>
                    <Col xs={12} md={6} xl={3}>
                        <h5>Tools</h5>
                        <p>Visual Studio Code</p>
                        <p>GitHub</p>
                        <p>XCode</p>
                        <p>Oracle VM Virtual Box</p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}