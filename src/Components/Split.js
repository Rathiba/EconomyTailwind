import { FormControl, InputLabel, Select, MenuItem, OutlinedInput, FormHelperText } from "@mui/material";

const SplitComponent = ({ splitBy, onChange, ITEM_HEIGHT, ITEM_PADDING_TOP, error }) => (
  <FormControl sx={{ m: 1, minWidth: 470 }} error={error}>
    <InputLabel id="split">Split By</InputLabel>
    <Select
      labelId="split"
      id="split"
      value={splitBy}
      onChange={onChange}
      input={<OutlinedInput label="Split By" />}
      MenuProps={{
        PaperProps: {
          style: {
            maxHeight: ITEM_HEIGHT * 5 + ITEM_PADDING_TOP,
            width: 465,
          },
        },
      }}
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {[2, 5, 10, 15, 20, 25].map((value) => (
        <MenuItem key={value} value={value}>
          {value}
        </MenuItem>
      ))}
    </Select>
    {error && <FormHelperText>Split input is required</FormHelperText>}
  </FormControl>
);

export default SplitComponent;
