import React from 'react'
import Loader from 'react-loader-spinner'

export default function GlobalLoader(props) {
    return (
        <div className="w-100 h-100 position-fixed top-0 left-0 d-flex justify-content-center align-items-center" style={{backgroundColor: 'rgba(0,0,0,0.5)', zIndex: "100"}}>
            <Loader 
                type="BallTriangle"
                color="blue"
                height={100}
                width={100}
            ></Loader>
        </div>
    )
}
