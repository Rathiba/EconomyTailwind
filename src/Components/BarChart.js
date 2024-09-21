import React, { useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { useSelector } from 'react-redux';

const BarChartComponent = () => {
  const { peArray, entryPrice } = useSelector((state) => state.range);
  const [highlightedKey, setHighlightedKey] = useState(null);

  const data = peArray.map((pe, index) => ({
    name: `PE-${index + 1}`,
    pe,
    entryPrice_cagr12: entryPrice[index][0],
    entryPrice_cagr15: entryPrice[index][1],
    entryPrice_cagr18: entryPrice[index][2],
    entryPrice_cagr21: entryPrice[index][3],
    entryPrice_cagr24: entryPrice[index][4],
    entryPrice_cagr26: entryPrice[index][5],
  }));

  const allEntryPrices = entryPrice.flat();
  const minValue = Math.min(...allEntryPrices);
  const maxValue = Math.max(...allEntryPrices);

  const handleLegendClick = (value) => {
    setHighlightedKey(value);
  };

  return (
    <div style={{ width: '100%', height: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '80%' }}>
        <ResponsiveContainer width="100%" height={500}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="pe" label={{ value: 'PE', position: 'insideBottomRight', offset: -10 }} />
            <YAxis domain={[minValue, maxValue + 40]} label={{ value: 'Price', angle: -90, position: 'insideLeft', offset: -10 }} />
            <Tooltip />
            <Legend 
              verticalAlign="top" 
              onClick={(e) => handleLegendClick(e.value)}
            />

            <Bar 
              dataKey="entryPrice_cagr12" 
              fill={highlightedKey === 'entryPrice_cagr12' ? "#03071e" : "#ffba08"} 
            />
            <Bar 
              dataKey="entryPrice_cagr15" 
              fill={highlightedKey === 'entryPrice_cagr15' ? "#03071e" : "#00f5d4"} 
            />
            <Bar 
              dataKey="entryPrice_cagr18" 
              fill={highlightedKey === 'entryPrice_cagr18' ? "#03071e" : "#d00000"} 
            />
            <Bar 
              dataKey="entryPrice_cagr21" 
              fill={highlightedKey === 'entryPrice_cagr21' ? "#03071e" : "#f48c06"} 
            />
            <Bar 
              dataKey="entryPrice_cagr24" 
              fill={highlightedKey === 'entryPrice_cagr24' ? "#03071e" : "#f15bb5"} 
            />
            <Bar 
              dataKey="entryPrice_cagr26" 
              fill={highlightedKey === 'entryPrice_cagr26' ? "#03071e" : "#faa307"} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default BarChartComponent;
