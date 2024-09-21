import {React} from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';
import { useSelector } from 'react-redux';

const ChartComponent = () => {
  const { peArray, entryPrice } = useSelector((state) => state.range);

  
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

 
  return (
    <div style={{ width: '100%', height: 500, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ width: '80%' }}> 
        <ResponsiveContainer width="100%" height={500}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 20, bottom: 20, left:20 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="pe"
              padding={{ left: 30, right: 30 }}
              label={{ value: 'PE', position: 'insideBottomRight', offset: -10 }}
             
            />
            <YAxis
              domain={[minValue-30, maxValue+50]}
              label={{ value: 'Price', angle: -90, position: 'insideLeft', offset: -10 }}
            />
            <Tooltip cursor={{ strokeDasharray: '5 5' }} />
            <Legend verticalAlign="top" />

            
            <Line type="monotone" name="CAGR 12%" dataKey="entryPrice_cagr12" stroke="#9b5de5" />
            <Line type="monotone" name="CAGR 15%" dataKey="entryPrice_cagr15" stroke="#00f5d4" />
            <Line type="monotone" name="CAGR 18%" dataKey="entryPrice_cagr18" stroke="#f15bb5" />
            <Line type="monotone" name="CAGR 21%" dataKey="entryPrice_cagr21" stroke="#00bbf9" />
            <Line type="monotone" name="CAGR 24%" dataKey="entryPrice_cagr24" stroke="#ffbd00" />
            <Line type="monotone" name="CAGR 26%" dataKey="entryPrice_cagr26" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ChartComponent;
