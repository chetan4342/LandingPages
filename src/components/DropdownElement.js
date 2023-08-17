import React, { useState, useEffect } from "react";
import {Box, TextField, MenuItem } from "@mui/material";


function DropdownElement({label, arr, value, setFunction}){
    const[element, setElement] = useState("");
    useEffect(() => {
        setElement(value ? arr.indexOf(value) : "");
    }, [arr, value]);
    const handleChange = (e) => {
        const selectedIndex = e.target.value;
        setElement(selectedIndex)
        setElement(e.target.value);
        if(setInterval && selectedIndex >= 0 && selectedIndex < arr.length){
            setFunction(arr[selectedIndex])
        }
    }

    return(
        <Box width="300px">
            <TextField label={label}
            value={element}
            onChange={(e)=> handleChange(e)}
            fullWidth
            size="small"
            select
            >
             {arr.map((element, id) => (
              <MenuItem value={id}>{element}</MenuItem>
            ))}
            </TextField>
        </Box>
    );
}
export default DropdownElement;