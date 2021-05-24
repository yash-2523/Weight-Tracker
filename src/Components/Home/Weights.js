import React, { useContext, useState,useEffect } from 'react'
import Loader from 'react-loader-spinner';
import { AuthContext } from '../../context/Auth';
import { LoaderContext } from '../../context/Loader';
import firebase from '../../firebase'
import WeightItem from './WeightItem';

export default function Weights() {
    const [weights,setWeights] = useState("");
    const {user} = useContext(AuthContext);

    useEffect(() => {
        
        const firestore = firebase.firestore();

        let unsubscribe = firestore.collection('weights').orderBy('timeStamp','desc').where('userId','==',user.uid).onSnapshot((querySnapShot) => {
            let tempWeights = [];
            querySnapShot.docs.map((snapShot,idx) => 
                
                tempWeights.push(
                    <WeightItem key={idx} snapShot={snapShot} />
                )
            )
            setWeights(tempWeights)
        })

        return () => {
            unsubscribe();
        }
    }, [])
    return (
        <div className="d-flex flex-column align-items-center justify-content-between weights-container">
            {!weights === "" ? <Loader type="Oval" width={50} height={50} color="blue"></Loader> : weights}
        </div>
    )
}