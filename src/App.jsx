import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import NavBar from './components/Navbar';
import About from './pages/About';
import { MyContextProvider } from './MyContext';


function App() {

  return (
    <>
    <MyContextProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </MyContextProvider>
    </>
  )
}

export default App
