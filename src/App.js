import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Home from './pages/home/Home'
import Notfound from "./pages/notfound/Notfound";
import About from "./pages/about/About";
import ChatBot from "./components/chatbot/ChatBot"

function App() {
  return (
    <BrowserRouter>
    <div className="App bg-gray-900" >
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
        <div className='box'>
          <div className='bet_time'>
            <ChatBot/>
          </div>
        </div>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App;
