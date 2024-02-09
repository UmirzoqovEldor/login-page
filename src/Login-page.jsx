import { Component } from "react";

 
 
 class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      title :"",
      pass:""
    };
    // this.chengeText=this.chengeText.bind(this)
  }
  
  render(){

 function chengeEmil(event){
  // this.setState({title:event.target.value})
   if(event.target.value=="umirzoqoveldor" ){
    this.setState({title:"sizning emilngiz tugri"})
   }else{
    this.setState({title:"sizning emilngiz notugri"})
   }
 }
 function chengePassword(event){
  // this.setState({title:event.target.value})
   if(event.target.value=="eldor2002" ){
    this.setState({pass:"npmsizning passwordingiz tugri"})
   }else{
    this.setState({pass:"sizning passwordingiz notugri"})
   }
 }
    return (
      <>
        <div class="contaner">
          <div class="login-page-title">
            <div class="title">Login to your account</div>
            <div class="text">Enter your details to login.</div>
          </div>
          <div class="logen-page-menu">
            <div class="emil">
              <div>
                <p class="emil-text">
                  Email Address <span>*</span>
                  {this.state.title}
                </p>
              </div>
              <i class="fa fa-envelope"></i>
              <div>
                <input
                onChange={(event)=>{
                  chengeEmil.bind(this)(event)
                }}
                  type="text"
                  class="emil-input"
                  required
                  placeholder="Enter your emil address"
                />
              </div>
            </div>
            <div class="password">
              <p class="password-text">
                Email Address <span>*</span>
                {this.state.pass}
              </p>
              
              <i class="fa fa-lock"></i>
              <div class="password-eye">
                <input
                onChange={(event)=>{
                  chengePassword.bind(this)(event)
                }}
                  type="password"
                  class="emil-password"
                  placeholder="********"
                />
                <i class="fa fa-eye"></i>
              </div>
            </div>
  
            <div class="menu-forget">
              <a href=""> Forgot password?</a>
            </div>
            <button >Login</button>
          </div>
        </div>
      </>
    );
  }
 }
    
    
    
    
  


export default App;
