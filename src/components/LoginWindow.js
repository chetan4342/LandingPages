import React from 'react';
import styled from '@emotion/styled';


const LoginWindow = ({handleSubmit, emailValue, passWordValue}) => {
    return (
    <LoginForm onSubmit={()=>handleSubmit()}>        
      <FormTitle>Hello, WelCome</FormTitle>
      <FormInput type="email" placeholder="E-mail" onChange={(e)=>{emailValue(e)}} name="email" />
      <FormInput type="password" placeholder="Password" onChange={(e)=>{passWordValue(e)}} name="password"/>
      <FormButton>Login</FormButton>
    </LoginForm>           
  );
}

const LoginForm = styled.form`
  width: 70%;
  background-color:  #f7f7f7;
  padding: 20px;
`;
const FormTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const FormInput = styled.input`
  width: 84%;
  padding: 10px;
  margin-bottom: 30px;
`;

const FormButton = styled.button`
  width: 90%;
  padding: 10px;
  background-color: purple;
  color: white;
  border: none;
  cursor: pointer;
`;
  
export default LoginWindow;
