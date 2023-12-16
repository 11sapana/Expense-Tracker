// import React from "react";

// class Login extends React.Component {
//     constructor(props){
//     super(props)
//     this.state={
//         username : '',
//         password : '',
  
//      data :{
//         username:"sapana",
//         password: "sapana@123"

//      }
//     }
//   this.uptdateInput = (event,key) =>{
//         //    this.props.chageAddtocart(event.target.value)
//         this.setState(
//            {
//            [key]: event.target.value
//            }
//         )
        
//           };


//  this.handleSumbit = () =>{
//         const data = this. state.data
//         const username = this. state.username
//         const password = this.state.password
      
//         if (username===data.username && password===data.password){
//            console.log('you are login') 
//            localStorage.setItem('LoggedIn',2)
//         }
    
//       }   
                   
//        {
//  }   
              
// } 
//     render(){
//        return(
//           <div className="zero">
//              <h1>Login</h1>
//              <input placeholder="Entre the username" type="text" 
//              onChange= {(event) =>this.uptdateInput(event,'username') }/>
                                                                                                                                                                               
//              <input placeholder="Entre the password" type="password"
//               onChange={(event) =>this.uptdateInput(event,'password')}/>
                                                                                                                                
             
//              <button onClick={this.handleSumbit} >Sumbit</button>
//           </div>
//        )
//     }
//  }
 
//  export default Login                                                                                                                   