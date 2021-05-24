import React, { useContext, useRef } from 'react'
import { useAlert } from 'react-alert';
import { AuthContext } from '../../context/Auth'
import firebase from '../../firebase'

export default function AddWeight() {

    const {user} = useContext(AuthContext);
    const firestore = firebase.firestore();
    const weightRef = useRef("");
    const alert = useAlert();
    // console.log(user.uid)
    let AddWeight = (e) => {
        e.preventDefault()
        firestore.collection('weights').add({
            userId: user.uid,
            weight: weightRef.current.value,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            alert.success("Weight Added Succesfully")
            weightRef.current.value = "";
        })
        .catch(err => {
            alert.error(err.message)
            weightRef.current.value = "";
        })
    }

    return (
        <form onSubmit={(e) => AddWeight(e)} className="d-flex align-items-center mt-5 mb-3 mx-auto add-weight">
            <input type="number" ref={weightRef} required placeholder="Enter weight" step="any"></input>
            <button className="btn btn-primary" type="submit">Add Weight</button>
        </form>
    )
}
