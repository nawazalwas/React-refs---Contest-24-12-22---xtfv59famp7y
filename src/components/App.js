import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {
  const emailRef = useRef(0);
  const passwordRef = useRef(0);
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [display,setDisplay] = useState({});

//code here 
  useEffect(()=>{
    if(email === ""){
      emailRef.current.focus();
      return;
    }else if(password === ""){
      passwordRef.current.focus();
      return;

    }else{
      setDisplay(()=>{return {email,password}});
      setEmail(()=>"");
      setPassword(()=>"");

    }
  },[display]);

  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={email} ref={emailRef} onChange={(e)=>{setEmail(e.target.value)}}/><br/>
      Password
      <input id="inputPassword" type="text" value={password} ref={passwordRef} onChange={(e)=>{setPassword(e.target.value)}}/><br/>
      <button id="submitButton" onClick={()=>{setDisplay(()=>{return {}})}}>Submit</button><br/>
      <p id="emailText">Your Email : {display.email}</p>
      <p id ="passwordText">Your Password : {display.password}</p>
      
    </div>
  )
}


export default App;
