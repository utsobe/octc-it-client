import { Route, Routes } from 'react-router-dom';
import About from './pages/About/About';
import Courses from './pages/Courses/Courses';
import Home from './pages/Home/Home';
import Navbar from './shared/Navbar';

function App() {
  return (
    <Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Home />} />
      </Routes>
    </Navbar>
  );
}

export default App;
