import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Footer from './Component/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Signup from './Pages/Signup/Signup';
import Contactus from './Pages/Contact Us/Contactus';
import Pricing from './Pages/Pricing/Pricing';
import Faqs from './Pages/Faqs/Faqs';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/contact" element={<Contactus  />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faqs" element={<Faqs />} />
        {/* <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
