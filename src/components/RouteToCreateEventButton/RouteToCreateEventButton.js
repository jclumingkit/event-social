import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import './styles.css';

export default function CreateEventButton({path}) {

    const navigate = useNavigate();

    function handleCreateEvent(path) {
        return navigate(path)
    }

    return(
        <Button 
            type="button"
            onClick={() => handleCreateEvent(path)} 
            className="create-event-button text-white border-0"
        >
            🎉 Create my event
        </Button>
    )
}