import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import CreateEventButton from "../../components/CreateEventButton/CreateEventButton";
import './styles.css';

export default function CreateEventPage() {
    const [event, setEvent] = useState({
        name: '',
        host: '',
        startDate: '',
        startTime: '',
        endDate: '',
        endTime: '',
        photo: ''
    })

    return(
        <Row className="w-100 h-100 justify-content-center align-items-center gx-0">
            <Col xs={8} lg={6}>
                <Form id="createEvent" className="bg-white p-5 rounded">
                    <Form.Group className="mb-3">
                        <Form.Label>What's the event?</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Event Name" 
                            value={event.name}
                            onChange={e => setEvent({...event, name: e.target.value})}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Who is hosting?</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Host Name" 
                            value={event.host}
                            onChange={e => setEvent({...event, host: e.target.value})}
                            required
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>When does it start?</Form.Label>
                        <Form.Control 
                            type="date" 
                            placeholder="Start Date" 
                            className="mb-2" 
                            value={event.startDate}
                            onChange={e => setEvent({...event, startDate: e.target.value})}
                            required   
                        />
                        <Form.Control 
                            type="time" 
                            placeholder="Start Time" 
                            value={event.startTime}
                            onChange={e => setEvent({...event, startTime: e.target.value})}
                            required 
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Does it end?</Form.Label>
                        <Form.Control 
                            type="date" 
                            placeholder="End Date" 
                            className="mb-2"   
                            value={event.endDate}
                            onChange={e => setEvent({...event, endDate: e.target.value})}
                            required 
                        />
                        <Form.Control 
                            type="time" 
                            placeholder="End Time" 
                            value={event.endTime}
                            onChange={e => setEvent({...event, endTime: e.target.value})}
                            required 
                        />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Upload the event photo</Form.Label>
                        <Form.Control 
                            type="file" 
                            accept="image/png, image/jpg"
                            className="mb-2" 
                            value={event.photo}
                            onChange={e => setEvent({...event, photo: e.target.value})}
                            required    
                        />
                    </Form.Group>
                    
                    <Form.Group className="d-grid">
                        <CreateEventButton path={'/event'} eventData={event} />
                    </Form.Group>
                </Form>
            </Col>
        </Row>
    )
}