import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
