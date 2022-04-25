import React from 'react';
import {
    ComposedChart,
    Line,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
  } from 'recharts';

function Chart({entries}) {
    console.log("CHART GOT", entries)
    if(!entries){
        return(
            <div></div>
        )
    }
    return (
      <div className="Chart">
  
        <ResponsiveContainer width={700} aspect={2}>
          <ComposedChart
            data={entries}
            margin={{
              top: 0,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke="#f5f5f5" />
            <XAxis dataKey="timestamp" scale="band" />
            <YAxis />
            <Area type="monotone" dataKey="band" fill="#6658ea" stroke="#f3f8ff" />
            <Line type="monotone" dataKey="original_value" stroke="#f5bc6c" strokeWidth={2} dot={false}/>
            <Line type="monotone" dataKey="anomaly" stroke="#f9655b" strokeWidth={2} dot={false}/>
            <Line type="monotone" dataKey="forecasted_value" stroke="#f5bc6c" strokeDasharray="10 10" strokeWidth={2} dot={false}/>
  
          </ComposedChart>
        </ResponsiveContainer>
  
        
      </div>
    );
  }
  
  export default Chart;