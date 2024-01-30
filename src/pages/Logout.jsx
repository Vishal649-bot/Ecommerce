import  { useContext } from 'react';
import AuthContext from '../MyContext2';
import "../components/Login/logout.css";

const Logout = () => {
    const authCtx = useContext(AuthContext);

    const LogoutHandler = () => {
        authCtx.logout();
    }

    return (
        <div className='logout'>
            <button className="logout-button" onClick={LogoutHandler}>Logout</button>
        </div>
    );
}

export default Logout;
