import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import classes from "../components/Login/AuthForm.module.css";

const Login = () => {
    const navigate = useNavigate();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true);
        let url;
        if (isLogin) {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key= AIzaSyDx8zhLMqT5fUlTh_GQSUC8PTAFW7ki0n0 ";
        } else {
            url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key= AIzaSyDx8zhLMqT5fUlTh_GQSUC8PTAFW7ki0n0 ";
        }

        fetch(url, {
            method: "POST",
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then((res) => {
            setIsLoading(false);
            if (res.ok) {
                return res.json();
            } else {
                return res.json().then((data) => {
                    let errorMessage = "Authentication Failed";
                    alert(errorMessage);
                    throw new Error(errorMessage);
                });
            }
        }).then(data => {
            navigate('/store'); // Redirect to store page
            console.log(data);
        }).catch(err => {
            alert(err.message);
        });
    }

    return (
        <section className={classes.auth}>
            <h1>{isLogin ? "Login" : "Sign Up"}</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor="email">Your Email</label>
                    <input type="email" id="email" required ref={emailInputRef} />
                </div>
                <div className={classes.control}>
                    <label htmlFor="password">Your Password</label>
                    <input type="password" id="password" required ref={passwordInputRef} />
                </div>

                <div className={classes.actions}>
                    {!isLoading && <button type="submit">{isLogin ? "Login" : "Sign Up"}</button>}
                    {isLoading && <p style={{ color: 'white' }}>Loading ...</p>}
                    <button type="button" className={classes.toggle} onClick={switchAuthModeHandler}>
                        {isLogin ? "Create new account" : "Login with existing account"}
                    </button>
                </div>
            </form>
        </section>
    )
}

export default Login;
// vishalkumaretahkash@gmail.com