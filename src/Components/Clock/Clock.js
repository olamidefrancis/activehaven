import React from "react";
import './Clock.css'



class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state={
            start:'', 
            end:'',
            diff:0,
            client:'',
            clientcheck:false,
            rep1:'',
            rep2:'',
            rep3:'',
            rep4:'',
            rep5:'',
            rep6:'',
            hours:''
            
        }
    }
 startclock=()=>{
    const start1= new Date();
    const start2= start1.getTime();
    const start3 = start2/1000/60;
   
    this.setState({start:start3});
    


}
 endclock=()=>{
    const end1= new Date();
    const end2= end1.getTime();
    const end3 = end2/1000/60;
   
    this.setState({end:end3});
    const diff1= this.state.start;
    const diff2= end3-diff1;
    this.setState({diff:diff2});
   
    
   }

   
   onClientcheck= (event)=>{
    this.setState({clientcheck:true});
}


onClient= (event)=>{
    this.setState({client: event.target.value})
}

hidec=()=>{
    this.props.onRouteChange('home')
}


onRep1= (event)=>{
    this.setState({rep1: event.target.value})
}

onRep2= (event)=>{
    this.setState({rep2: event.target.value})
}
onRep3= (event)=>{
    this.setState({rep3: event.target.value})
}
onRep4= (event)=>{
    this.setState({rep4: event.target.value})
}

onRep5= (event)=>{
    this.setState({rep5: event.target.value})
}

onRep6= (event)=>{
    this.setState({rep6: event.target.value})
}


regEnd=()=>{
    
    
     fetch('http://localhost:3000/endshift',{
         method: 'post',
         headers:{'Content-Type':'application/json'}, 
         body: JSON.stringify({
            end:this.state.end,
            rep1:this.state.rep1,
            rep2:this.state.rep2,
            rep3:this.state.rep3,
            rep4:this.state.rep4,
            rep5:this.state.rep5
           
             
         })      
     })
         .then(response=>response.json())
         .then(user=>{
            
             if(user){ 
                this.setState({hours:user[0].entime-user[0].starttime})
                setTimeout(()=>{
                   //if this works,male a call to the database 
                
                   fetch('http://localhost:3000/shifthours',{
                    method: 'post',
                    headers:{'Content-Type':'application/json'}, 
                    body: JSON.stringify({
                       hours:this.state.hours,
                      
                    })      
                })
                //then take us back to home page
                this.hidec()
                
                },2000)
             }
         })
 
    
    }




  regStart=()=>{

    this.startclock()
    setTimeout( ()=>{
        
        fetch('http://localhost:3000/startshift',{
        method: 'post',
        headers:{'Content-Type':'application/json'}, 
        body: JSON.stringify({
           start:this.state.start,
           client:this.state.client,
           end:this.state.end
            
        })      
    })
        .then(response=>response.json())
        .then(user=>{
            if(user==='good'){
                this.hidec()
            }
           
            
           
        })
     } 
        , 
        
        
        2000)
    
}





render(){
  return(
    <div >

        {this.state.clientcheck?
         <div>
                    <div className="grid-container ">
                            <button className="bg-green start pointer grow hours "
                            onClick={this.regStart}
                            >
                                Start
                            </button>

                            <div className="hours bg-blue clock ">
                                    {`your work hour is ${this.state.hours}`}
                            </div>

                            <button className="bg-red end pointer grow hours"
                                onClick={this.endclock}
                            >
                                            End
                            </button>
                    </div>

                    <div className="reportheader hours">
                        <p>
                            Report
                        </p>
                    </div>
                    
                    <div  className=" hours ">

                                <div className="ba bw1 b--dark-gray  pb3   h-70">
                                    <input type="text" className=" in " 
                                       onChange={this.onRep1}
                                    >
                                        
                                    </input>
                                    <input type="text" className=" in " 
                                     onChange={this.onRep2}
                                    >
                                        
                                    </input>
                                    <input type="text" className=" in "
                                      onChange={this.onRep3}
                                    >
                                        
                                    </input>
                                    <input type="text" className=" in "
                                      onChange={this.onRep4}
                                    >
                                        
                                    </input>

                                    <input type="text" className=" in "
                                       onChange={this.onRep5}
                                    >
                                        
                                    </input>

                                    <input type="text" className=" in "
                                   onChange={this.onRep6}
                                    >
                                        
                                    </input>
                                    

                                </div>
                    </div>        
                    <div className="subtodata hours">
                        <button

                            className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-hot-pink "
                            onClick={this.regEnd}
                        >
                            Submit Report
                        </button>
                            
                    </div>

         </div>:




                   <div className="client">
                         <p>
                              Who will you be working with today?
                          </p>

                          <div className="flex">
                                <input type='text'className="w-40 h30"
                                 onChange={this.onClient}      
                                >
                                </input>

                                <button 
                                onClick={this.onClientcheck} 
                                className="b ph3 pv2   white input-reset ba b--gray bg-transparent grow pointer f6 dib" 
                                type="submit" value="Submit">
                                    submit
                                </button>
                          </div>

                          
                    </div>
    
        }
      
            
</div>
  )
}
}
    
export default Clock;



