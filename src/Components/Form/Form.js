import React from "react";
import './Form.css'



class Form extends React.Component {
    constructor(props){
        super(props);
        this.state={
            sponname:'', 
            sponemail:'',
            tel:'',
            namew:'',
            allergies:'',
            age:'',
            sex:'',
            con1:'',
            con2:'',
            con3:'',
            con4:''

        }
    }
 

//functions to receive states
onSponName= (event)=>{
    this.setState({sponname: event.target.value})
}

onSponEmail= (event)=>{
    this.setState({sponemail: event.target.value})
}
onTel= (event)=>{
    this.setState({tel: event.target.value})
}

onAlle= (event)=>{
    this.setState({allergies: event.target.value})
}


onNamew= (event)=>{
    this.setState({namew: event.target.value})
}
onAllergies= (event)=>{
    this.setState({ allergies: event.target.value})
}

onAge= (event)=>{
    this.setState({age: event.target.value})
}
onSex= (event)=>{
    this.setState({sex: event.target.value})
}

onCon1= (event)=>{
    this.setState({con1: event.target.value})
}
onCon2= (event)=>{
    this.setState({con2: event.target.value})
}

onCon3= (event)=>{
    this.setState({con3: event.target.value})
}
onCon4= (event)=>{
    this.setState({con4: event.target.value})
}


//submiting to server
onSubmitform=()=>{

    fetch('http://localhost:3000/clients',{
        method: 'post',
        headers:{'Content-Type':'application/json'}, 
        body: JSON.stringify({
            sponname:this.state.sponname, 
            sponemail:this.state.sponemail,
            tel:this.state.tel,
            namew:this.state.namew,
            allergies:this.state.allergies,
            age:this.state.age,
            sex:this.state.sex,
            con1: this.state.con1,
            con2:this.state.con2,
            con3:this.state.con3,
            con4:this.state.con4
            
        })      
    })
    .then(response=>response.json())
    .then(user=>{
        if(user){
            this.props.onRouteChange('home');
        }
    })

    
   }




render(){
  return(
    <div className=" bg-white pa2">
          <div className="formcontainer bg-white ba b--darkgray">
                    <div className="header">

                        <div className="flexheader ">
                                <p className="formheader">Welcome to ActiveHaven</p>
                        </div>

                        <div className="flexheader">
                                <p>We are all special</p>
                        </div>

                    </div>
                    
                    <div className="form  pa2">
                        
                                <p className="sponname">
                                    Name of Sponsor :
                                </p>

                                <input type="text" className="sponnamein in " 
                                onChange={this.onSponName}
                                >
                               
                                </input>
                                

                                <p className="sponemail">
                                    Email :
                                </p>

                                <input type="text" className="sponemailin in " 
                                onChange={this.onSponEmail}
                                >
                               
                                </input>

                                <p className="spontel">
                                    Tel :
                                </p>

                                <input type="text" className="spontelin in " 
                                onChange={this.onTel}
                                >
                               
                                </input>


                                <p className="wardname">
                                    Name of ward :
                                </p>

                                <input type="text" className="wardnamein in "
                                onChange={this.onNamew}
                                >
                               
                                </input>


                                <p className="allergies">
                                    Age of ward :
                                </p>

                                <input type="text" className="wardagein in "
                                onChange={this.onAge}
                                >
                               
                                </input>


                                <p className="wardsex">
                                    Sex of ward :
                                </p>

                                <input type="text" className="wardsexin in " 
                                onChange={this.onSex}
                                >
                               
                                </input>


                                <p className="wardsex">
                                    Allergies :
                                </p>

                                <input type="text" className="wardsexin in " 
                                onChange={this.onAlle}
                                >
                               
                                </input>


                    </div>
                    
                    <div className="conditions">
                        <div className="flexheader">
                            <p>
                                Condition
                            </p>
                        </div >
                        
                        <div  className=" flexheader ">

                                <div className="ba bw1 b--dark-gray  pb3   h-70">
                                    <input type="text" className=" in " 
                                    onChange={this.onCon1}
                                    >
                                        
                                    </input>
                                    <input type="text" className=" in " 
                                    onChange={this.onCon2}
                                    >
                                        
                                    </input>
                                    <input type="text" className=" in "
                                    onChange={this.onCon3}
                                    >
                                        
                                    </input>
                                    <input type="text" className=" in "
                                    onChange={this.onCon4}
                                    >
                                        
                                    </input>

                                </div>
                            </div>        

                    </div>


                    <div className="flexheader pt3 subdiv">
                        
                        <input 
                           
                           onClick={ this.onSubmitform} 
                            className="flexheader header sub pointer grow" 
                            type="submit" value="Submit"/>
                    </div>
                    
            
          </div> 
    
       
    </div>
  )
}
}
    
export default Form;




