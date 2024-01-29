import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Store from './pages/Store';
import NavBar from './components/Navbar';
import About from './pages/About';
import { MyContextProvider } from './MyContext';
import Contact from './pages/Contact';
import ProductDetail from './pages/Product';
import LoginPage from './pages/Login';


function App() {

  return (
    <>
    <MyContextProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}  />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
    </MyContextProvider>
    </>
  )
}

export default App
