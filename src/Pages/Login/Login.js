import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../../src/Hooks/useFirebase';
const Login = () => {
    const {googleSingin,gitSingin,facebookSingin,user} = useFirebase()
    console.log(user);
    return (
        <div className="container w-50 my-5">
            <h1 className="fw-bold text-primary">Please Login</h1>
            <form>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter your email" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="enter your password" />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
            </form>
            <h4 className="text-center text-danger">----- or -----</h4>
            <div className="text-center">
                <button onClick={googleSingin} className="btn btn-warning m-2"><i className="fab fa-google-plus text-light"></i></button>
                <button onClick={facebookSingin} className="btn btn-primary m-2"><i className="fab fa-facebook text-light"></i></button>
                <button onClick={gitSingin} className="btn btn-danger m-2"><i className="fab fa-github text-light"></i></button>
                <p>Create Account & Singup <Link to="/singup">Singup</Link></p>
            </div>
        </div>
    );
};

export default Login;