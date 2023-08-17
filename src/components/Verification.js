import React from 'react';
import styled from 'styled-components';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Verification = ({otpSubmit, OtpValue}) => {
  const submit = () =>{
    otpSubmit();
  }

    return (   
      <>
      <div>
          <OtpForm>        
            <FormTitle>Enter OTP</FormTitle>
            <Otptext>A 5-Digit code has been sent to <span style={{color:"purple"}}>richard@integreon.com</span> </Otptext>
            <Inputdiv>
            <Otpinput type="text" maxLength={1} pattern='[0-9]' onChange={(e)=>{OtpValue(e)}}/>
            <Otpinput type="text" maxLength={1} pattern='[0-9]' onChange={(e)=>{OtpValue(e)}}/>
            <Otpinput type="text" maxLength={1} pattern='[0-9]' onChange={(e)=>{OtpValue(e)}}/>
            <Otpinput type="text" maxLength={1} pattern='[0-9]' onChange={(e)=>{OtpValue(e)}}/>
            <Otpinput type="text" maxLength={1} pattern='[0-9]' onChange={(e)=>{OtpValue(e)}}/>
          </Inputdiv>
           <FormButton onClick={submit}>Verify & Login</FormButton>
          <Back>
            <Backbutton><ArrowBackIcon/>
              <span >Goback</span>
                </Backbutton>
            <Backbutton>Resend OTP</Backbutton>   
          </Back>
          </OtpForm>
      </div>

      </> 
  
      );
    }
    
const OtpForm = styled.form`
  width: 90%;
  background-color: #f7f7f7;
  padding: 20px;
`;
  
const Otptext = styled.p`
  padding-left: 20px;
`;

const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  width:fit-content;
  padding-left: 20px;
`;

const Inputdiv = styled.div`
  display: flex;
  justify-content: center;
`;

const Backbutton = styled.button`
  border-style:none;
  background-color: white;
  text-decoration: underline;
  display:flex;
  justify-content:center;
  align-items:center;
  cursor: pointer;
`;

const Otpinput = styled.input`
	height: 40px;
	width:40px;
	margin:15px;
  font-size: 30px;
  text-align: center;
	`;

const FormButton = styled.button`
  width: 100%;
  margin-top: 20px;
  padding: 10px;
  background-color: purple;
  color: white;
  border: none;
  cursor: pointer;
`;
const Back = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
	cursor: pointer;
  `
export default Verification;