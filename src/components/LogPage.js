import React, {useState} from 'react';
import styled from 'styled-components';
import bgImg from "./images/img2.jpg";
import LoginWindow from './LoginWindow';
import Verification from './Verification';
import { useNavigate } from 'react-router-dom';
// import ProfileSetting from './ProfileSetting';



const LogPage = () => {
  const[state, setState] = useState({email:'', password:''});    //lOGIN Window
  // const[show, setShow] =useState(false);
  const[logState, setLogState] = useState(0);
  const navigate = useNavigate();

  const loginVerification=()=>{
    setLogState(1);
  }
  const emailValue = (e) =>{
    setState({...state, email:e.target.value})
  }
  const passWordValue = (e) =>{
    setState({...state, password:e.target.value})
  }
  const handleSubmit = () =>{
      if(state.email==="qwerty@gmail.com" && state.password==="1234"){
      loginVerification();
    }
    else{
        alert("Invalid Credentials");
    }
}
const [otp, setOtp] = useState("");

const OtpValue = (e) =>{
  setOtp(otp+e.target.value)
}
const otpSubmit = () => {
  if(otp==="12345"){
    navigate("/profile");
}
else{
  console.log("Invalid OTP");
}
}
   return (
      <div>
        <MainDiv>
          <Leftdiv>
          <LeftBackground src=".\images\img4.jpg" alt="" />
          <p>Integron's expertise and willingness to innovate allows me to deliver increased 
            efficiency to my internal clients, our attorneys, so they can focus on higher-value work</p>
          </Leftdiv>
          <Rightdiv>
            {(logState===0) 
            ? <LoginWindow  handleSubmit={handleSubmit} emailValue={emailValue} passWordValue={passWordValue}/> 
            : <Verification otpSubmit={otpSubmit} OtpValue={OtpValue}/>
            }
          </Rightdiv>
        </MainDiv>
        
      </div>
        )
    }


    
const MainDiv = styled.div`
    display: flex;
    background-image: url(${bgImg});
    background-size:cover; 
    background-attachment:fixed;
    background-position: right;
    height: 100vh;
`
const Leftdiv = styled.div`
width: 100%;
height:100vh;
`

const Rightdiv = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
margin-bottom:30px;

`
;     

const LeftBackground= styled.img`
    display : block;
    height : 80%;
    width :100%;
    `;


export default LogPage;