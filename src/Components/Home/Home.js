import React, { useContext } from 'react'
import { Redirect } from 'react-router';
import { AuthContext } from '../../context/Auth'
import firebase from '../../firebase'
import AddWeight from './AddWeight';
import Navigation from './Navigation';
import Weights from './Weights';
export default function Home() {

    const {user} = useContext(AuthContext);
    const weightref = firebase.firestore().re
    if(user === null){
        return <Redirect to="/signIn"></Redirect>
    }
    return (
        <>
        <Navigation user={user}></Navigation>
        <div className="col-lg-10 col-md-11 col-12 mx-lg-auto mx-md-auto py-3">
            <div className="d-flex justify-content-center mt-5 mb-3"><AddWeight></AddWeight></div>
            <Weights></Weights>
        </div>
        </>
    )
}
