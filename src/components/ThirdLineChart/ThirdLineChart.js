import { Box, Grid, Paper} from '@mui/material';
import React from 'react';
import {
    LineChart,
    Line,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
      name: 22,
      balance: 8,      
      balancee: 0,
    },
    {
      name: 23,
      balance: 6,
      balancee: 6,
    },
    {
      name: 24,
      balance: 4,
      balancee: 2,
    },
    {
      name: 25,
      balance: 4,
      balancee: 4,
    },
    {
      name: 26,
      balance: 2,
      balancee: 4,
    },
    {
      name: 26,
      balance: 6,
      balancee: 7,
    },
    {
      name: 27,
      balance: 2,
      balancee: 12,
      tension: 0.4,
      pointRadius: 0,
      hoverPointRadius:0
    }
  ];

const ThirdLineChart = () => {
    return (
      <div
        style={{
          width: '80%',
          marginLeft: '20px',
          padding: '5px'
        }}>
            <Grid container spacing={1}
          style={{
            marginLeft: '100px',
            display: 'flex',
            justifyContent: 'space-between'
          }}>
             <Grid item xs={12} md={4}>
             <Paper elevation={3}
            sx={{
              borderRadius: '10px',
              marginTop: '28px'
            }}>
              <Box>
                <h6 style={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#010937',
                                marginTop: '50px',
                                textAlign: 'left',
                            }}>Analysis on receivables</h6>
                        </Box>
                        <h4 style={{
                            fontSize:'24px',
                            fontWeight: '500',
                            color: '#676b87',
                            marginLeft:'-75%'
                            }}>$498.58</h4>
              <ResponsiveContainer
                width="30%"
                height={80}>
          <LineChart
          style={{marginLeft:'135%'}}
            width={500}
            height={200}
            data={data}
            syncId="anyId"
          >
            {/* <XAxis dataKey="name" tick={{fill:"gray"}}/> */}
            {/* <YAxis /> */}
                  <Line
                    dataKey="balancee"
                    stroke="#008274"
                    strokeWidth="2" />
            </LineChart>
            </ResponsiveContainer> </Paper>
             </Grid>
            <Grid item xs={12} md={4}>
            <Paper elevation={3}
            sx={{
              borderRadius: '10px',
              marginTop: '28px'
            }}>
              <Box>
                <h6 style={{
                                fontSize: '16px',
                                fontWeight: '500',
                                color: '#010937',
                                marginTop: '50px',
                                textAlign: 'left',
                            }}>Analysis on Payable</h6>
                        </Box>
                        <h4 style={{
                            fontSize:'24px',
                            fontWeight: '500',
                            color: '#676b87',
                            marginLeft:'-72%'
                            }}>$5410.40</h4>
              <ResponsiveContainer
                width="30%"
                height={80}>
          <LineChart
          style={{marginLeft:'135%'}}
            width={500}
            height={200}
            data={data}
            syncId="anyId"
          >
            {/* <XAxis dataKey="name" tick={{fill:"gray"}}/> */}
            {/* <YAxis /> */}
                  <Line
                    dataKey="balance"
                    stroke="#ed6010"
                    strokeWidth="2" />
            </LineChart>
            </ResponsiveContainer> </Paper>
              </Grid>
              <Grid item xs={12} md={4}>
    
              </Grid>
            </Grid>
        </div>
    );
};

export default ThirdLineChart;