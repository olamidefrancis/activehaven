import React from "react";


class Register extends React.Component{

    constructor(props){
        super(props);
        this.state={
            Name:'', 
            Password:'',
            Email:'',
            Phone:'',
            Age:'',
            Sex:''

        }
    }


    onEmailReg= (event)=>{
        this.setState({Email: event.target.value})
    }

    onNameReg= (event)=>{
        this.setState({Name: event.target.value})
    }

    onPasswordReg= (event)=>{
        this.setState({Password: event.target.value})
    }

    onSexReg= (event)=>{
        this.setState({Sex: event.target.value})
    }

    onAgeReg= (event)=>{
        this.setState({Age: event.target.value})
    }
  
    onPhoneReg= (event)=>{
        this.setState({Phone: event.target.value})
    }
  
  

    onSubmitregi=()=>{
        fetch('http://localhost:3000/register',{
            method: 'post',
            headers:{'Content-Type':'application/json'}, 
            body: JSON.stringify({
                name: this.state.Name,
                password:this.state.Password,
                phone: this.state.Phone,
                age: this.state.Age,
                sex: this.state.Sex,
                email: this.state.Email
                
            })      
        })
        .then(response=>response.json())
        .then(user=>{
            if(user){
                this.props.onRouteChange('clock');
            }
        })
        
       }

  render(){
    
    return(
        <div>
        <article className='br3 ba shadow-5 b--black-10 mv4 w-100 w-50-m mw5 w-25-1 center'>
          <main className="pa4 black-80">
                <div className="measure   ">
                        <fieldset id="sign_up" className="ba  white b--transparent ph0 mh0">
                           
                            <div className="mt3">
                                <label 
                                className=" dim white fw6 lh-copy f6"
                                htmlFor="email-address">Name</label>
                                <input 
                                
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="text" name="name"  id="name"
                                onChange={this.onNameReg}
                                />
                            </div>
                           
                            <div className="mt3">
                                <label 
                                className=" dim white fw6 lh-copy f6"
                                htmlFor="email">Email</label>
                                <input 
                                
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" name="email-address"  id="email"
                                onChange={this.onEmailReg}
                                />
                            </div>
                            <div className="mv3">
                                <label className=" dim white fw6 lh-copy f6" htmlFor="passw">Password</label>
                                <input 
                                
                                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="paxx" name="password"  id="pass"
                                onChange={this.onPasswordReg}
                                />
                            </div>

                            <div className="mt3">
                                <label 
                                className=" dim white fw6 lh-copy f6"
                                htmlFor="emai">Phone No</label>
                                <input 
                                
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" name="email-address"  id="ema"
                                onChange={this.onPhoneReg}
                                />
                            </div>



                            <div className="mt3">
                                <label 
                                className=" dim white fw6 lh-copy f6"
                                htmlFor="email-address">Age</label>
                                <input 
                                
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" name="email-address"  id="em"
                                onChange={this.onAgeReg}
                                />
                            </div>


                            <div className="mt3">
                                <label 
                                className=" dim white fw6 lh-copy f6"
                                htmlFor="email-address">Sex</label>
                                <input 
                                
                                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                type="email" name="email-address"  id="e"
                                onChange={this.onSexReg}
                                />
                            </div>


                        
                        </fieldset>
                <div className="center">
                        <input 
                          onClick={ this.onSubmitregi} 
                        className="b ph3 pv2   white input-reset ba b--gray bg-transparent grow pointer f6 dib" 
                        type="submit" value="Register"/>
                </div>
               
             </div>
          </main>
          </article>  
        
  </div>
  
    )
  }  
   
        
}

export default Register;