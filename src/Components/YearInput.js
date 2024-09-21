import { TextField } from "@mui/material";

const YearInput = ({ year, setYear,error,setError }) => (
    <TextField
        type="number"
        label="Target Year *"
        variant="outlined"
        value={year}
        error={error.year}
        helperText={error.year ? 'Please enter a valid Year value' : ''}
        onChange={(e) => {
            const valueYear = e.target.value
            setYear(valueYear)
            if (valueYear) {
                setError((prevState) => ({ ...prevState, year: false }))
            }
        }}
        sx={{ backgroundColor: 'white', color: 'black', margin: '10px 10px 10px 10px',padding:'15' }}
    />
);

export default YearInput;