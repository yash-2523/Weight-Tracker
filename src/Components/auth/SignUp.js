import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/Auth'
import { Link, Redirect } from 'react-router-dom';
import firebase from '../../firebase'
import { useAlert } from 'react-alert';
import { LoaderContext } from '../../context/Loader';

export default function SignUp() {

    const {user} = useContext(AuthContext);
    const alert = useAlert();
    
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("")
    const {loader,setLoader} = useContext(LoaderContext);

    

    let HandleSignUp = (e) => {
        setLoader(true);
        e.preventDefault();
        firebase.auth().createUserWithEmailAndPassword(email,password).then((userCredential) => {
            setLoader(false);
        }).catch(err => {
            setLoader(false);
            alert.error(err.message)
            
        }) 

        
    }
    
    if(user !== null){
        return <Redirect to="/"></Redirect>
    }   
    
    
    return (
        <div className="d-flex justify-content-center align-items-centers">
            <div className="col-lg-5 col-md-7 col-10 mt-5 py-4 px-5 shadow rounded auth-container">
                <h1 className="text-center mb-4">Sign Up</h1>
                <form className="px-lg-5 px-md-3 mt-3 mb-4 d-flex flex-column justify-content-between" onSubmit={(e) => HandleSignUp(e)}>
                    <input placeholder="Email" type="email" onChange={(e) => setEmail(e.target.value)} required></input>
                    <input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} required></input>
                    <input placeholder="Confirm Password" type="password" onChange={(e) => setConfirmPassword(e.target.value)} required></input>
                    <button className="btn btn-success w-100 align-self-center" disabled={password==="" || confirmPassword !== password} type="submit">Sign Up</button>
                </form>
                <p className="text-center mb-3"><Link to="/signIn">Already have an account</Link></p>
            </div>
            
        </div>
    )
}
