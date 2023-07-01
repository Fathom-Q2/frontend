import React, { useState } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import style from "./customedTextField.module.css";
import { useNavigate } from 'react-router-dom';

//0x7128AF8F5AA6abe92b5f9ba9545146027A995B16

const CustomTextField = ({width, honey }) => {
  const [address, setAddress] = useState(honey ? "0x7128AF8F5AA6abe92b5f9ba9545146027A995B16" : "");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = () => {
    setAddress('');
    navigate(`/userbrief/${address}`);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit();
    }
  };


  return (
    <>
      <div>
        <TextField
          className={`${style.textField} ${style.noHoverBorder}`}
          variant="outlined"
          value={address}
          placeholder="Enter protocol address"
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          style={{ width}}
          InputProps={{
            classes: {
              root: style.noHoverBorder, // Remove hover border style
              notchedOutline: style.noHoverBorder, // Remove outline style
            },
            inputProps: {
              style: {
                color: 'white'
              }
            },
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon style={{ fontSize: 40, color: 'white' }} onClick={handleSubmit} />
              </InputAdornment>
            )
          }}
        />

      </div>

    </>
  );
};

export default CustomTextField;
