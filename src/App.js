import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import './App.css';

import LandingPage from './pages/LandingPage/LandingPage';
import CreateEventPage from './pages/CreateEventPage/CreateEventPage';
import DisplayEventPage from './pages/DisplayEventPage/DisplayEventPage';

function App() {
  return (
    <Router>
      <Container className="gx-0">
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/create" element={<CreateEventPage />}></Route>
          <Route path="/event" element={<DisplayEventPage />}></Route>
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
