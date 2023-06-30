import React, { useState } from "react";
import { TextField, InputAdornment } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import style from "./customedTextField.module.css";
import { useNavigate } from 'react-router-dom';


const CustomTextField = ({width, honey }) => {
  const [address, setAddress] = useState(honey ? "0xD54f502e184B6B739d7D27a6410a67dc462D69c8" : "");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setAddress(event.target.value);
  };

  const handleSubmit = () => {
    setAddress("");
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
