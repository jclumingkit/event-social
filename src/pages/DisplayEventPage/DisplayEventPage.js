import { Row, Col, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import './styles.css';

export default function DisplayEventPage() {
    const {state} = useLocation();
    const { name, host, startDate, startTime, endDate, endTime, photo } = state;
    console.log(state)
    return(
        <Row className="h-100">
            { state.name === '' ?
             <h1>NO EVENT</h1>
             :
             <ul>
                <li>{name}</li>
                <li>{host}</li>
                <li>{startDate}</li>
                <li>{startTime}</li>
                <li>{endDate}</li>
                <li>{endTime}</li>
                <li>{photo}</li>
             </ul>
            }
        </Row>
    )
}