import { Outlet } from "react-router-dom";
import "./index.css";

function Layout() {
  return (
    
    <div className = "Bg">
    
      <div id="content"> 
        <ul className="nav-bar">
        <li><a href="./">Home</a></li>
            <li className="tab"><a href="./skills">skills</a></li>
            <li className="tab"><a href="./projects">projects</a></li>
        </ul>       

        <Outlet/>
        
      </div>

    </div>
    

    
  );
}

export default Layout;