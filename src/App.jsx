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
import AuthContext, { AuthContextProvider } from './MyContext2';
import { useContext } from 'react';
import Logout from './pages/Logout';


function App() {
const authCtx = useContext(AuthContext)

  return (
    <>
    <AuthContextProvider>
    <MyContextProvider>
    <Router>
      <NavBar />
      <Routes>
      
        <Route path="/" element={<Home />}  />
        {!authCtx.isLoggedIn && <Route path="/store" element={<Store />} /> }
        
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        {!authCtx.isLoggedIn && <Route path="/logout" element={<Logout />} />}
        
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </Router>
    </MyContextProvider>
    </AuthContextProvider>
    </>
  )
}

export default App
