import React from "react";



 class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state={
            signInEmail:'', 
            signInPassword:''
        }
    }


    onEmailChange= (event)=>{
        this.setState({signInEmail: event.target.value})
        
    }

    onPasswordChange= (event)=>{
        this.setState({signInPassword: event.target.value})
    }
    
   onSubmitsignin=()=>{
   
    
    fetch('http://localhost:3000/signin',{
        method: 'post',
        headers:{'Content-Type':'application/json'}, 
        body: JSON.stringify({
            email: this.state.signInEmail,
            password:this.state.signInPassword
        })      
    })
    .then(response=>response.json())
    .then(data=>{
        if(data==='go'){
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
                                <legend className="f4  dim white fw6  ph0 mh0 center"> Welcome</legend>
                                <div className="mt3">
                                    <label 
                                    className=" dim white fw6 lh-copy f6 center"
                                    htmlFor="email-addre">email</label>
                                    <input 
                                    
                                    className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                    type="email" name="email-address"  id="emails"
                                    onChange={this.onEmailChange}
                                    />
                                </div>
                                <div className="mv3">
                                    <label className=" dim white fw6 lh-copy f6 center" htmlFor="password">Password</label>
                                    <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
                                         type="pas" name="passwordx"  id="passwor"
                                         onChange={this.onPasswordChange}     
                                    />
                                </div>
                            
                            </fieldset>
                    <div className="center">
                            <input 
                           
                             onClick={ this.onSubmitsignin} 
                            className="b ph3 pv2   white input-reset ba b--gray bg-transparent grow pointer f6 dib" 
                            type="submit" value="Sign In"/>
                    </div>
                 
                 </div>
              </main>
              </article>  
            
      </div>
      
        )
    }
  
        
}

export default Signin;