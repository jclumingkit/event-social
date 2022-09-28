import { Row, Col, Image } from "react-bootstrap";
import './styles.css';

import RouteToCreateEventButton from '../../components/RouteToCreateEventButton/RouteToCreateEventButton';

export default function LandingPage() {
    
    return(
        <Row className="w-100 h-100 justify-content-center align-items-center gx-0 py-2">
            <Col xs={8} lg={12}>
                <Row className="justify-content-center">
                    <Col xs={12}>
                        <h1 className="banner-title text-center">Imagine if <br /><span>Snapchat</span><br />  had events.</h1>
                    </Col>
                    <Col xs={12}>
                        <p className="banner-subtitle text-center">Easily host and share events with your friends across any social media.</p>
                    </Col>
                    <Col xs={12} className="d-flex justify-content-center">
                        <Image className="banner-img" fluid="true" src="/images/Landing-page-image.svg" />
                    </Col>
                    <Col xs={12} className="text-center mt-4">
                        <RouteToCreateEventButton path={'/create'} />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}