import { Container, Row, Col } from "react-bootstrap";

export const About = () => {
    return (
        <section className="about">
            <Container className="card border-0">
                <Row className="card-body">
                    <Col xs={12} md={4} xl={4}>
                        <h1 className="card-title">About Me</h1>
                        <div className="rectangle"></div>
                    </Col>
                    <Col xs={12} md={8} xl={8}>
                        <p className="card-text">
                            With a keen interest in mobile app development, web design, and software engineering, I embarked on this journey after graduating from high school. I chose to pursue a major in software development as it aligns perfectly with my passion and desired career path.
                        </p>
                        <p className="card-text">
                            Throughout my academic journey, I have gained an understanding of various programming languages. Additionally, I had the opportunity to gain practical experience during a four-month internship at Coding Labs, where I worked as a junior developer. During this placement, I was involved in designing a membership website using Figma and successfully built it using HTML, Tailwind CSS, and PHP on the Laravel framework. Software development brings me joy and fulfillment as I combine my technical skills and creativity to develop mobile applications, design intuitive user interfaces, and implement efficient algorithms.
                        </p>
                        <p className="card-text">
                            I am thrilled about utilizing my skills and knowledge to contribute to the software development industry. Collaborating with fellow professionals and working on impactful projects that make a tangible difference in people's lives is something I am looking forward to.
                        </p>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}