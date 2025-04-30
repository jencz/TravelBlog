import './App.css';
import Navbar from './components/Navbar';
import AboutPage from "./pages/AboutPage";
import ProfilePicture from './components/ProfilePicture';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TripsPage from './pages/TripsPage';
import ProfilePage from './pages/ProfilePage';
import TripDetailPage from './pages/TripDetailsPage';

function App() {
  return (
    <Router>
      <div id="App">
        <ProfilePicture />
        <Navbar />

        <Routes>
          <Route path="/" element={<AboutPage/>} />
          <Route path="/trips" element={<TripsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/trips/:name" element={<TripDetailPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
