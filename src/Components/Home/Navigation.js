import React from 'react'
import { useAlert } from 'react-alert'
import firebase from '../../firebase'

export default function Navigation(props) {

    const alert = useAlert();
    let HandleSignOut = () => {
        firebase.auth().signOut().then((result) => {}).catch(err => {
            alert.error(err.message)
        })
    }

    return (
        <div className="shadow px-lg-4 px-md-4 px-2 d-flex py-1 justify-content-between align-items-center navigation">
            <h4>Weight Tracker</h4>
            {
                props.user !== null
                ?
                <button className="btn btn-outline-danger" onClick={HandleSignOut}>Sign out</button>
                :
                <></>
            }
        </div>
    )
}
