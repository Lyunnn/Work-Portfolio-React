import { Container, Row, Col } from "react-bootstrap"

export const Footer = () => {
   return (
        <footer className="footer text-center text-lg-start">
            <Container className="d-flex flex-column justify-content-center justify-content-lg-center py-xl-4 py-md-2">
                <Row className="border-bottom pb-4">
                    <Col xs={12} md={4} xl={5} className="">
                        <h1>Let's collaborate on exciting projects together!</h1>
                    </Col>
                    <Col xs={12} md={4} xl={4}>
                        <h6>Social</h6>
                        <p><a href="https://www.linkedin.com/in/linyun-kee-appdev-webdev/">LinkedIn</a></p>
                        <h6>Email</h6>
                        <p>linyunkee0120@gmail.com</p>
                    </Col>
                    <Col xs={12} md={4} xl={3} className="">
                        <div className="text-box">
                        <h6>Code</h6>
                        <p><a href="https://github.com/Lyunnn">GitHub</a></p>
                        </div>
                    </Col>
                </Row>
                <span className="text-center pt-4">©2024 Designed and coded by Lin Yun Kee. All rights reserved.</span>
            </Container>
        </footer>
   ) 
}