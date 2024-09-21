import { configureStore } from '@reduxjs/toolkit';

import rangeReducer from './Components/RangeReducer';
export const store = configureStore({
    reducer: {
        
        range:rangeReducer
    },
});