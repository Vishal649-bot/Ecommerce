// import Container from 'react-bootstrap/Container';
import "../components/Home/style/Home.css"
import ListGroup from 'react-bootstrap/ListGroup';
import { FaRegPlayCircle } from "react-icons/fa";
const Home = () => {
  
  return (
    <div>
   <div className="containerx">
      <div className="headerx">
        <h1>The Generics</h1>
        <button>Get our Latest Album</button>
        <FaRegPlayCircle size={70} color="rgb(75, 118, 193)" style={{ marginTop: '14px' }}/>
      </div>
      <h3>TOURS</h3>
      <div className="content">
      <ListGroup className="content-list">
      <ListGroup.Item>JUL16 DETROIT, MI DTE ENERGY MUSIC THEATRE <button>Buy Ticket</button></ListGroup.Item>
      <ListGroup.Item>JUL19 TORONTO,ON BUDWEISER STAGE <button>Buy Ticket</button></ListGroup.Item>
      <ListGroup.Item>JUL 22 BRISTOW, VA JIGGY LUBE LIVE <button>Buy Ticket</button></ListGroup.Item>
      <ListGroup.Item>JUL 29 PHOENIX, AZ AK-CHIN PAVILION <button>Buy Ticket</button></ListGroup.Item>
      <ListGroup.Item>AUG 2 LAS VEGAS, NV T-MOBILE ARENA <button>Buy Ticket</button></ListGroup.Item>
    </ListGroup>
      </div>
      <div className="footer">
      <h2>The Generics</h2>
        </div>
    </div>
    
    </div>
  )
}

export default Home
