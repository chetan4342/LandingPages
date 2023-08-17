import React, { useState } from 'react';
import styled from "styled-components";
import { Box, TextField} from "@mui/material";

function InputField ({label,setFunction, value }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <Box width = "300px" padding ="0">  
        <StyledTextField 
        value = {(value) ? value : inputValue}
        onChange={(e)=>{
          (setFunction) ? setFunction(e.target.value) : setInputValue(e.target.value);
        }} 
        label={label} 
        fullWidth size ="small"></StyledTextField>
    </Box>
  );
}

export default InputField;

const StyledTextField = styled(TextField)`
text-align: left;
`;

