import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './styles.css';

export default function CreateEventButton({path, eventData}) {

    const navigate = useNavigate();

    function handleCreateEvent() { 
        return navigate(path, {state: eventData});
    }

    return(
        <Button 
            type="button"
            onClick={() => handleCreateEvent()} 
            className="create-event-button text-white border-0"
        >
            🎉 Create my event
        </Button>
    )
}