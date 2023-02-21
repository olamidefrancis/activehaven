import React from "react";
import './Application.css';


const Application =({onRouteChange})=>{

return(
  <div className="container ba bw1 b--mid-gray pb2 bg-white">
        <div className="logo">
         
        </div>

        <div className="haven " >
            <p>ActiveHaven</p>
        </div>    
        <div className="aspire">    
           <p>INSPIRE & ASPIRE</p>
        </div>

        <div className="apply  ">
        	    <button type="button" className="shasow-3 grow pointer w-20 shadow-5">
                    <p className="appl" onClick={()=>onRouteChange('form')}>Apply for support</p>
                </button>
        </div>

  </div>
)

}
    
            

export default Application;