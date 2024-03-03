import { useState, useEffect } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/home_girl.jpg";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["ELOPER AND DESIGNER"];
    const [text, setText] = useState('');
    // determine how fast each alphabet type out
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    // determine how fast switch to each word
    const period = 2000;

    // delete is faster than typing
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker) };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <h2>{`HI, I'M`} <span className='my-name'>LIN YUN</span></h2>
                        <h1>A JUNIOR DEV{text}</h1>
                        <p>
                            I am currently a graduate student of Bachelor of Information Technology at Griffith University,
                             majoring in software development
                        </p>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} style={{width: "400px"}} alt="Header Img"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}