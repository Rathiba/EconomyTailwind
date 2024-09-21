import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { setInputs } from './RangeReducer';
import ChartComponent from './LineChart';
import './RangeCalculation.css'
import RangeForm from './RangeForm';
import BarChartComponent from './BarChart';
import PriceTable from './Table';

export default function RangeCal() {
  const [peRange1, setpeRange1] = React.useState('');
  const [peRange2, setpeRange2] = React.useState('');
  const [splitBy, setSplitBy] = React.useState('');   
  const [eps, setEps] = React.useState('');
  const [year, setYear] = React.useState('');
  const [displayTable, setDisplayTable] = React.useState(false);
  const [displayChart, setDisplayChart] = React.useState(false);
  const [lastClicked, setlastClicked] = React.useState('');
  const [chart, setChart] = React.useState('Line');
  const dispatch = useDispatch();
  const { peArray, futurePrice, cagrArray, entryPrice } = useSelector((state) => state.range);
  const [error, setError] = React.useState({
    eps: false,
    year: false,
  });

  useEffect(() => {
    dispatch(setInputs({
      peRange1: Number(peRange1),
      peRange2: Number(peRange2),
      splitBy: Number(splitBy),
      year: Number(year),
      eps: Number(eps),
    }));
  }, [peRange1, peRange2, splitBy, eps, year, dispatch]);

  
  
  const handleChange1 = (e) => {
    const valuePe = e.target.value
    setpeRange1(Number(valuePe) || '');
    
    if (valuePe) {
      setError((prevState) => ({ ...prevState, peRange1: false }));
    } else {
      setError((prevState) => ({ ...prevState, peRange1: true })); // Add this to show error when empty or invalid
    }
  }
  const ITEM_HEIGHT = 30;
  const ITEM_PADDING_TOP = 8;
  const handleChange2 = (e) => {
    const valuePe = e.target.value
    setpeRange2(Number(valuePe) || '');
    if (valuePe) {
      setError((prevState) => ({ ...prevState, peRange2: false }));
    } else {
      setError((prevState) => ({ ...prevState, peRange2: true })); // Add this to show error when empty or invalid
    }
  };
  const handleChange3 = (event) => {
  const value = Number(event.target.value);
  setSplitBy(value);
  if (value) {
    setError(prevState => ({ ...prevState, splitBy: false }));
  } else {
    setError(prevState => ({ ...prevState, splitBy: true }));
  }
};


  

  const handleDisplayTable = () => {
    const isPeRange1Valid = peRange1 && !isNaN(peRange1) && peRange1 > 0;
  const isPeRange2Valid = peRange2 && !isNaN(peRange2) && peRange2 > 0;
  const isEpsValid = eps && !isNaN(eps) && eps > 0;
  const isYearValid = year && !isNaN(year) && year > 0;
  const isSplitByValid = splitBy && !isNaN(splitBy) && splitBy > 0;

  // Set errors for invalid fields
  setError({
    eps: !isEpsValid,
    year: !isYearValid,
    peRange1: !isPeRange1Valid,
    peRange2: !isPeRange2Valid,
    splitBy: !isSplitByValid,
  });

  // Only show the table if all fields are valid
  if (isPeRange1Valid && isPeRange2Valid && isEpsValid && isYearValid && isSplitByValid) {
    setDisplayTable(true);
    setDisplayChart(false);
    setlastClicked('table');
  } else {
    // Prevent table display if validation fails
    setDisplayTable(false);
  }
  
  };

  const handleDisplayChart = () => {
    const isPeRange1Valid = peRange1 && !isNaN(peRange1) && peRange1 > 0;
    const isPeRange2Valid = peRange2 && !isNaN(peRange2) && peRange2 > 0;
    const isEpsValid = eps && !isNaN(eps) && eps > 0;
    const isYearValid = year && !isNaN(year) && year > 0;
    const isSplitByValid = splitBy && !isNaN(splitBy) && splitBy > 0;
  
    // Set errors for invalid fields
    setError({
      eps: !isEpsValid,
      year: !isYearValid,
      peRange1: !isPeRange1Valid,
      peRange2: !isPeRange2Valid,
      splitBy: !isSplitByValid,
    });
  
    // Only show the table if all fields are valid
    if (isPeRange1Valid && isPeRange2Valid && isEpsValid && isYearValid && isSplitByValid) {
      setDisplayTable(false);
      setDisplayChart(true);
      setlastClicked('chart');
    } else {
      // Prevent table display if validation fails
      setDisplayChart(false);
    }
    
  };


  const toggleChart = () => {
    setChart(prevChart => (prevChart === 'Bar' ? 'Line' : 'Bar'));
  };

  const handleResetAll = () => {
    setDisplayChart(false);
    setDisplayTable(false);
    setpeRange1('');
    setpeRange2('');
    setYear('');
    setSplitBy('');
    setEps('');
    setError({ eps: false, year: false });
    
  };

  return (
    <>
      <div>
        
        <Box sx={{  display: 'flex', flexDirection: 'column', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center',  marginTop: '200px' }}>
       
        <div className='card-input'>
            <RangeForm
              eps={eps}
              year={year}
              splitBy={splitBy}
              setSplitBy={setSplitBy}
              setEps={setEps}
              setYear={setYear}
              peRange1={peRange1}
              peRange2={peRange2}
              error={error}
              setError={setError}
              setpeRange1={setpeRange1}
              setpeRange2={setpeRange2}
              handleChange1={handleChange1}
              handleChange2={handleChange2}
              handleChange3={handleChange3}
              ITEM_HEIGHT={ITEM_HEIGHT}
              ITEM_PADDING_TOP={ITEM_PADDING_TOP}
            />
         
          <br />
          <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: '10px', marginBottom:'25px' }}>
            <Button onClick={handleDisplayTable} sx={{ backgroundColor: '#f48474', color: 'white' }}>Table View</Button>
            <Button onClick={handleDisplayChart} sx={{ backgroundColor: '#f48474', color: 'white' }}>Chart View</Button>
            <Button onClick={handleResetAll} sx={{ backgroundColor: '#f48474', color: 'white' }}>Reset</Button>
          </Box>
        </div>
        <br />
        
       
        {lastClicked === 'table' && displayTable && (
          <Box className='card-input1' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
            <PriceTable
              peArray={peArray}
              futurePrice={futurePrice}
              entryPrice={entryPrice}
              cagrArray={cagrArray}
            />
          </Box>
        )}

        {lastClicked === 'chart' && displayChart && (
           <Box className='card-input1' sx={{ display: 'flex', padding: '20px', position: 'relative' }}>
           <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
           <Button onClick={toggleChart} sx={{backgroundColor:'ButtonShadow'}}>
           {chart === 'Bar' ? 'Line Chart' : 'Bar Chart'}
            </Button>
            </div>
            {chart === 'Line' && <ChartComponent />}
            { chart === 'Bar' && <BarChartComponent />}
            </Box>
            )
          }
          </Box> 
        </div>
        
    </>
  );
}
