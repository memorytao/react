import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import HeadNavbar from "../ui/HeadNavbar";
import CovidComponent from '../component/CovidComponent';

class MainUI extends React.Component {

    render() {
        return (

            <Container>
                <Row>
                    <Col md={8} ms={4} lg={true}>
                        <HeadNavbar></HeadNavbar>
                    </Col>
                </Row>

                <Row>
                    <Col md={8} ms={4} lg={true} >
                        <CovidComponent />
                    </Col>
                </Row>
            </Container>

        )
    }
}
export default MainUI;