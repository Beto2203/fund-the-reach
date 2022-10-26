import { Routes, Route } from 'react-router-dom';
import Home from './components/Home.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Events from './components/Events.js';
import Contact from './components/Contact';
import Causes from './components/Causes';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/causes" element={<Causes />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
