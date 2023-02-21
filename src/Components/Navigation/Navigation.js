import React from "react";
import './Navigation.css';


const Navigation =({onRouteChange})=>{

return(
 <div>
    <nav >
        <ul className="flex white">
            <li className=' pointer grow navi ba b--white'> <p>Services</p></li>
            <li className='push pointer grow navi ba b--white'><p onClick={()=>onRouteChange('stafflog')}>Staff Login</p></li>
        </ul>
    </nav>
</div>   
)

}
    
            

export default Navigation;