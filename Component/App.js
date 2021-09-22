import react,{useState}from 'react';
import {BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Login from '../Component/Login';
import Home from '../Component/Home';
import About from '../Component/About';
import NavBar from '../Component/NavBar';
function App(){
    const adminUser={
        email:"admin@admin.com",
        password:"admin123"
    }

    const[user,setUser]=useState({name:"",email:""});
    const[error,setError]=useState("");

     const Login=details=>{
         console.log(details);
         if(details.email==adminUser.email&&details.password==adminUser.password)
         {
         console.log("Logged in");
         }
         setUser({
             name:details.name,
             email:details.email
         });
     }
     const Logout=()=>{
         setUser({name:"",email:""});
     }
    return(
        <div className="App">
        {(user.email!="")?(
            <div className="Welcome">
            <h2>Welcome <span>{user.name}</span></h2>
            <button onClick={Logout}>Loggedout  </button>
            </div>
        ):(
            <Login Login ={Login} error={error}/>
        ) } 

        </div>
    );
}export default App;