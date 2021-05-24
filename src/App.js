import React, { useContext } from 'react';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import SignIn from './Components/auth/SignIn';
import SignUp from './Components/auth/SignUp';
import {Provider as AlertProvider} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import {options} from './AlertOptions';
import Home from './Components/Home/Home';
import Loading from "react-fullscreen-loading";
import { AuthContext } from './context/Auth';
import { LoaderContext } from './context/Loader';
import GlobalLoader from './GlobalLoader';

function App () {
    const {user,loading} = useContext(AuthContext);
    const {loader,setLoader} = useContext(LoaderContext);
    if(loading===true){
        return <Loading background="#D3D3D3" loaderColor="#3498db"></Loading>
    }
    return (
        <>
            {loader && <GlobalLoader></GlobalLoader>}
            <AlertProvider template={AlertTemplate} {...options}>
                <Router> 
                    <Switch>
                        <Route exact path="/signIn" render={() => (user===null) ? <SignIn /> : <Redirect to="/" ></Redirect>}></Route>
                        <Route exact path="/signUp" render={() => (user===null) ? <SignUp /> : <Redirect to="/" ></Redirect>}></Route>  
                        <Route exact path="/" render={() => (user!==null) ? <Home /> : <Redirect to="/signIn" ></Redirect>}></Route>
                    </Switch>
                </Router>
            </AlertProvider>
       </> 
    )
}

export default App;