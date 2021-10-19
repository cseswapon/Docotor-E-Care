import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
const Singup = () => {
    const { googleSingin, gitSingin, facebookSingin, loginfromhandel,user} = useFirebase();
    const [name,setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const nameHandel = e => {
        setName(e.target.value);
    }
    const emailHandel = e => {
        setEmail(e.target.value);
    }
    const passHandel = e => {
        setPassword(e.target.value)
    }
    const handelFrom = e => {
        e.preventDefault();
        loginfromhandel(name,email, password);
        e.target.reset();
    }
    // console.log(user);
    return (
        <div className="container w-50 my-5">
            <h1 className="fw-bold text-primary">Please Sing Up</h1>
            <form onSubmit={handelFrom}>
            <div className="mb-3">
                <label htmlFor="exampleInputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputName" onBlur={nameHandel} aria-describedby="emailHelp" placeholder="enter your name" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email" className="form-control" id="exampleInputEmail1" onBlur={emailHandel} aria-describedby="emailHelp" placeholder="enter your email" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword1" onBlur={passHandel} placeholder="enter your password" />
            </div>
            <button type="submit" className="btn btn-primary">Sing Up</button>
            </form>
            <h4 className="text-center text-danger">----- or -----</h4>
            <div className="text-center">
                <button onClick={googleSingin} className="btn btn-warning m-2"><i className="fab fa-google-plus text-light"></i></button>
                <button onClick={facebookSingin} className="btn btn-primary m-2"><i className="fab fa-facebook text-light"></i></button>
                <button onClick={gitSingin} className="btn btn-danger m-2"><i className="fab fa-github text-light"></i></button>
                <p>Already Your Account <Link to="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default Singup;