import React from "react";
import './Contacts.css';
import loca from '../Icons/loca2.png'


const Contacts =()=>{

return(
  <div className="grid-container" >
            <div className="flat h-100 shadow-5  bg-white try">
                    <div className=" mt5 bg-red" >
                             <img src={loca} alt='loca'/> 
                    </div>

                    <div  >
                            <div className=" bg-blue">
                                    <p  className=""> Flat 4 Lancaster street, Ducks Hill Northwood England</p>
                            </div>  
                    </div>
                
            </div>

            <div className="services h-100 shadow-5">
                <div className="title blockcenter">
                    <p className="ser">SERVICES</p>
                 </div>

        <div className="list ">
            <ul >
                <li className="pa1">Specialist and tailored support for Autism Spectrum, ADHD,Down Syndrome etc. </li>
                <li className="pa1">Personal Asistance with various diadility.</li>
                <li className="pa1">SEN Recruitment, Professional Training abd Support.</li>
                <li className="pa1">Tuition: Special Education Need and Learning Disability.</li>
                <li className="pa1">Dementia Support</li>
                <li className="pa1">Palliativee Care and Support</li>
                
            </ul> 
        </div>
        
     </div>

     <div className="akoni h-100 shadow-5">

     </div>
  </div>
)

}
    
            

export default Contacts;