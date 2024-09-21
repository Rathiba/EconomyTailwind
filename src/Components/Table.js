import React from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

const PriceTable = ({ peArray, futurePrice, cagrArray, entryPrice }) => {
  

  return (
    <TableContainer>
      <Table sx={{ margin: '0 auto', cursor: 'pointer' }}>
        <TableHead sx={{ backgroundColor:'  #b554b4' }}>
          <TableRow>
            <TableCell sx={{color:'white'}}>PE Values</TableCell>
            <TableCell sx={{color:'white'}}>Future Price</TableCell>
            {cagrArray.map((value, index) => (
              <TableCell key={index} sx={{color:'white'}}>CAGR-{value}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {peArray.map((peValue, rowIndex) => (
            <TableRow
              key={rowIndex}
            
              sx={{
              
                '&:hover': { backgroundColor: '#f0f0f0', cursor: 'pointer' }
              }}
            >
              <TableCell>{peValue}</TableCell>
              <TableCell>{futurePrice[rowIndex]}</TableCell>
              {entryPrice[rowIndex]?.map((entry, colIndex) => (
                <TableCell key={colIndex}>{entry}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PriceTable;
