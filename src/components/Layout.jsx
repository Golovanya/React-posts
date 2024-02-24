import { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

function Layout () {
    return ( 
       <Fragment>
        <header>
            <nav>
               <h1>REACT posts</h1>
            <div className="nav-btns">
                <NavLink to = '/'>
                    Main
                </NavLink>
                <NavLink to = '/about'>
                    About
                </NavLink>   
            </div>
                    </nav>     
        </header>
       
       
       <Outlet/>
       </Fragment>
       
     );
}

export default Layout ;