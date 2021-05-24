import React, { useRef, useState } from 'react'
import { useAlert } from 'react-alert';
import firebase from '../../firebase'


export default function WeightItem(props) {
    const [editting,setEditting] = useState(false);
    let date = props.snapShot.data().timeStamp?.seconds;
    date = new Date(date * 1000).toLocaleDateString();
    const firestore = firebase.firestore();
    const alert = useAlert();
    const editWeight = useRef(props.snapShot.data().weight);


    let getCurrentDate = () => {
        let currentDate = new Date(Date.now()).toLocaleDateString();
        return currentDate;
    }


    let HandleItemDelete = () => {
        firestore.collection('weights').doc(props.snapShot.id).delete().then(() => {
            alert.success("Deleted Successfully")
        }).catch(err => {
            alert.error("Something Went Wron")
        });
    }

    let EditWeight = () => {
        if(editWeight.current.value === ""){
            editWeight.current.value = props.snapShot.data().weight;
            setEditting(false);
            return
        }

        firestore.collection('weights').doc(props.snapShot.id).update({
            weight: editWeight.current.value,
        }).then(result => {
            setEditting(false)
        }).catch(err => {
            alert.error("Something went wrong")
            editWeight.current.value = props.snapShot.data().weight
            setEditting(false)
        })
    }

    return (
        <div key={props.snapShot.id} className="w-75 py-3 rounded d-flex align-items-center justify-content-around weight-item">
            
            {editting ?
                <input type="number" ref={editWeight} step="any" defaultValue={props.snapShot.data().weight}></input>
                :
                <p className="text-center">{props.snapShot.data().weight}</p>
            }
            
            <p className="text-center">{date==="Invalid Date" ? getCurrentDate()  : date}</p>
            <div className="d-flex justify-content-around align-items-center" style={{columnGap: '1rem'}}>
                {editting ? <i className="fa fa-check text-success" onClick={EditWeight}></i> : <i className="fa fa-edit" onClick={() => setEditting(!editting)}></i>}
                <i className="fa fa-trash" onClick={HandleItemDelete}></i>
            </div>
        </div>
    )
}
