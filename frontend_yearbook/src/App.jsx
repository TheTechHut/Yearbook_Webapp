import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './routes/Home';
import Students from './routes/Students';
import Projects from './routes/Projects';
import Signup from './components/Signup';
import AddDetails from './components/Adddetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/student" element={<Students />} /> {/* Updated path */}
        <Route path="/project" element={<Projects />} /> {/* Updated path */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-details" element={<AddDetails />} />
      </Routes>
      <Navbar />
    </div>
  );
}

export default App;
