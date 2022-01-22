import { Box, Grid, Paper, Tooltip, Typography } from '@mui/material';
import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import increaseImg1 from '../../image/images.png';

const data = [
    {
      name: 22,
      balance: 0,     
      balancee: 5,
    },
    {
      name: 23,
      balance: 1,
      balancee: 2,
    },
    {
      name: 24,
      balance: 1,
      balancee: 4,
    },
    {
      name: 25,
      balance: 1,
      balancee: 3,
    },
    {
      name: 26,
      balance: 4,
      balancee: 1,
    },
    {
      name: 27,
      balance: 6,
      balancee: 6,
    },
    {
      name: 28,
      balance: 7,
      balancee: 6,
    },
  ];


const SixthLineChart = () => {
    return (
        <div style={{marginTop:'10px'}}>
        <Grid container spacing={2}
          style={{ marginLeft: '100px' }}>
            <Grid item xs={12} md={4}>
            <Paper elevation={3}
            sx={{
              padding: '15px',
              borderRadius: '10px',
              marginTop: '28px'
            }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
                <Typography
                  variant='h6' sx={{
                color: '#010937',
                fontSize: '16px',
                fontWeight: '700'
              }}>Equitity Investment</Typography>          
              <Typography variant='p'
                style={{
                  color: '#178b17',
                  fontWeight: '500',
                  fontSize: '13px',
                  lineHeight: '16px',
                }}><img
                  style={{ width: '12px'}}
                  src={increaseImg1} alt="" />10%</Typography>
            </Box>
              <ResponsiveContainer
                width="100%"
                height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: -30,
              bottom: 0,
            }}
          >
                  <CartesianGrid
                    strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "gray" }} />
            <YAxis />
                <Tooltip contentStyle={{
                  backgroundColor: "#fff",
                  color: "gray"
                }} itemStyle={{ color: "gray" }} />
                  <Line
                    dataKey="balancee"
                    stroke="#ffb319"
                    fill="#ffb319"
                    strokeWidth="2" />
            </LineChart>
            </ResponsiveContainer> </Paper>
            </Grid>
          <Grid item xs={12} md={4} style={{marginBottom:'20px'}}>
          <Paper elevation={3}
            sx={{
              padding: '15px',
              borderRadius: '10px',
              marginTop: '28px'
            }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Typography variant='h6' sx={{
                color: '#010937',
                fontSize: '16px',
                fontWeight: '700'
              }}>Remaining Loan Amount Per Month</Typography>          
              <Typography variant='p'
                style={{
                  color: '#178b17',
                  fontWeight: '500',
                  fontSize: '13px',
                    lineHeight: '16px',
                }}><img
                  style={{ width: '12px'}}
                  src={increaseImg1} alt="" />10%</Typography>
            </Box>
              <ResponsiveContainer
                width="100%"
                height={200}>
          <LineChart
            width={500}
            height={200}
            data={data}
            syncId="anyId"
            margin={{
              top: 10,
              right: 30,
              left: -30,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                    dataKey="name"
                    tick={{ fill: "gray" }} />
            <YAxis />
                <Tooltip contentStyle={{
                  backgroundColor: "#fff",
                  color: "gray"
                }} itemStyle={{ color: "gray" }} />
                  <Line
                    dataKey="balance"
                    stroke="#108a7c"
                    fill="#108a7c"
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
export default SixthLineChart;