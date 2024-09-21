import React from 'react';
import { Box} from '@mui/material';
import EPSInput from './EPSInput';
import YearInput from './YearInput';
import PEInput from './PEInput';
import SplitComponent from './Split';

const RangeForm = ({splitBy, eps, year,  setEps, setYear, setpeRange1,setpeRange2, error, setError,peRange1,peRange2,handleChange1,handleChange2,handleChange3,ITEM_HEIGHT,ITEM_PADDING_TOP}) => (
   
    <Box sx={{ width:'95%', backgroundColor: 'white',margin: '15px 20px 0 25px', display: 'flex', flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center',padding:'10 0 0 0' }}>
        <EPSInput
            eps={eps}
            error={error}
            setEps={setEps}
            setError={setError}
           
        />

        <YearInput
            year={year}
            error={error}
            setYear={setYear}
            setError={setError}
        />

        <PEInput peRange={peRange1}
            label='PE Value Start'
            onChange={handleChange1}
            ITEM_HEIGHT={ITEM_HEIGHT}
            ITEM_PADDING_TOP={ITEM_PADDING_TOP}
           
        />
        
        <PEInput peRange={peRange2}
            label="PE Value End"
            onChange={handleChange2}
            ITEM_HEIGHT={ITEM_HEIGHT}
            ITEM_PADDING_TOP={ITEM_PADDING_TOP}
           
           
        />
        <SplitComponent
            splitBy={splitBy}
            label='Split value'
            onChange={handleChange3}
            ITEM_HEIGHT={ITEM_HEIGHT}
            ITEM_PADDING_TOP={ITEM_PADDING_TOP}
           
        />
    </Box>
)

export default RangeForm;
