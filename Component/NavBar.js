import { NavLink } from "react-router-dom";

const NavBar=()=>{
    return(
       <>
      <nav>
          <li><NavLink to="/" activeStyle={{fontWeight:"bold",color:"red"}} exact>Home</NavLink></li>
          <li><NavLink to="/About" activeStyle={{fontWeight:"bold",color:"red"}} exact>About</NavLink></li>
          
      </nav>
       </>

    ) 
}; export default NavBar