import { InputLabel, Box, FormControl, Select, MenuItem, OutlinedInput, FormHelperText } from "@mui/material";

const PEInput = ({ peRange, label, error, onChange, ITEM_HEIGHT, ITEM_PADDING_TOP }) => {
  return (
    <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
      <FormControl sx={{ m: 1, minWidth: 470 }} error={error}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={peRange}
          onChange={onChange}
          input={<OutlinedInput label={label} />}
         
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
                width: '20%',
              },
            },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {[10, 20, 30, 40, 50, 60, 70, 80, 90, 100].map((value) => (
            <MenuItem key={value} value={value}>
              {value}
            </MenuItem>
          ))}
        </Select>
        {error && <FormHelperText>Please enter a valid PE value</FormHelperText>}
      </FormControl>
    </Box>
  );
};

export default PEInput;
