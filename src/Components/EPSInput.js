import { TextField } from "@mui/material";

const EPSInput = ({ eps, error, setEps, setError }) => {
  
  const handleEPSChange = (event) => {
    const value = event.target.value;
    setEps(value);

   
    if (value && !isNaN(value)) { 
      setError((prevState) => ({ ...prevState, eps: false }));
    }
  };

  return (
    <TextField
      type="number"
      label="Target EPS *"
      variant="outlined"
      value={eps}
      error={error.eps}
      helperText={error.eps ? "Please enter a valid EPS value" : ""}
      onChange={handleEPSChange} 
      sx={{ backgroundColor: "white", color: "black", margin: "10px" }}
    />
  );
};

export default EPSInput;