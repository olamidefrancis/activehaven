import React from "react";
import one from './Images/one.jpg';
import two from './Images/two.jpg';
import three from './Images/three.jpg';
import './Slide.css';



const Slide= ()=>{
 return(
 <div   className="ba bw3 b--white  shadow-3">
    <div className="slider ga " >
        <figure >
                <img  src={one} alt='one'  />
                <img src={two} alt='two'  />
                <img src={three} alt='three' />
                <img src={two} alt='two'  />
                <img  src={one} alt='one'  />
        </figure>  
     </div>     
</div>   
      )
}


export default Slide;