import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    peRange1: '',
    peRange2: '',
    splitBy: '',
    splitBy1: '',
    cagrStart: '',
    cagrEnd:'',
    eps: '',
    year:'',
    peArray: [],
    cagrArray:[12, 15, 18, 21, 24, 26],
    futurePrice: [],
    entryPrice:[]
};

// calculate PE Range
const calculatePERange = (min, max, split) => {
    let sum = min;
    let ans = [];
    while (sum < max) {
        ans.push(sum);
        sum += split; 
    }
    ans.push(max);
    return ans;
}
//CAGR range
//const calculateCAGRRange = (min, max, split) => {
    //let sum = min;
    //let ans = [];
    //while (sum < max) {
        //ans.push(sum);
      //  sum += split; 
    //}
    //ans.push(max);
  //  return ans;
//}
const calculateFuturePrice = (eps, peValue) => {
    return (eps * peValue).toFixed(0);
}
const calculateEntryPrice = (year, futurePrice, cagr) => {
    return ((futurePrice) / Math.pow(1 + (cagr / 100), year)).toFixed(2);
}
const rangeSlice = createSlice({
    name: 'range',
    initialState,
    reducers: {
        setInputs: (state, action) => {
            state.peRange1 = action.payload.peRange1;
            state.peRange2 = action.payload.peRange2;
            state.splitBy = action.payload.splitBy;
            state.splitBy1 = action.payload.splitBy1;
            state.cagrStart = action.payload.cagrStart;
            state.cagrEnd = action.payload.cagrEnd;
            state.eps = action.payload.eps || 0;
            state.year = action.payload.year || 0;
            if (state.splitBy && state.splitBy > 0)  { state.peArray = calculatePERange(
                Number(state.peRange1),
                Number(state.peRange2),
                Number(state.splitBy)
            );
            }else {
                state.peArray = []; 
              }
            if (state.peArray.length !== 0) {
                state.futurePrice = state.peArray.map((pe) => {
                    return calculateFuturePrice(Number(state.eps), Number(pe)); 
                });
            }
           // if (state.splitBy1 && state.splitBy1 > 0)  { state.cagrArray = calculateCAGRRange(
              //  Number(state.cagrStart),
               // Number(state.cagrEnd),
              //  Number(state.splitBy1)
           // );
          //  }else {
           //     state.cagrArray = []; 
           //   }
            
              
                if (state.cagrArray.length !== 0 && state.futurePrice.length !== 0) {
                    state.entryPrice = state.futurePrice.map((futureValue) => {
                        return state.cagrArray.map((cagr) => {
                            return calculateEntryPrice(
                                Number(state.year),
                                Number(futureValue),  // futurePrice value for this iteration
                                Number(cagr)          // CAGR value for this iteration
                            );
                        });
                    });
                }
                
            
        }
    }
});

export const { setInputs } = rangeSlice.actions;
export default rangeSlice.reducer;
