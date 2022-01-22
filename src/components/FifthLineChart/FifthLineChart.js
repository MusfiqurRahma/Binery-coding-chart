import { Grid, Paper, Tooltip, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { CartesianGrid, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import imageOne from '../../image/pyramid-design-template-2-color-blue-orange-vector-73870689-removebg-preview.png'

const data = [
    {
      name: 22,
      balance: 8,     
      balancee: 4,
    },
    {
      name: 23,
      balance: 3,
      balancee: 9,
    },
    {
      name: 24,
      balance: 7,
      balancee: 3.5,
    },
    {
      name: 25,
      balance: 6.5,
      balancee: 2,
    },
    {
      name: 26,
      balance: 4,
      balancee: 4,
    },
    {
      name: 27,
      balance: 10,
      balancee: 6,
    },
    {
      name: 28,
      balance: 9,
      balancee: 3,
    },
  ];


const FifthLineChart = () => {
    return (
        <div>
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
              <Typography variant='h6' sx={{
                color: '#010937',
                fontSize: '16px',
                fontWeight: '700'
              }}>Net Assets</Typography>          
              <Typography variant='p'
                style={{
                  color: '#f37e40',
                  fontWeight: '500',
                  fontSize: '13px',
                    lineHeight: '16px',
                }}><img
                  style={{ width: '12px'}}
                  src={imageOne} alt="" />10%</Typography>
            </Box>
          <ResponsiveContainer width="100%" height={200}>
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
                  <Tooltip
                    contentStyle={{
                  backgroundColor: "#fff",
                  color: "gray"
                }} itemStyle={{ color: "gray" }} />
                  <Line
                    dataKey="balancee"
                    stroke="#ef6b1f"
                    fill="#ef6b1f"
                    strokeWidth="2" />
            </LineChart>
            </ResponsiveContainer> </Paper>
            </Grid>
          <Grid item xs={12} md={4}>
    
           </Grid>
          <Grid item xs={12} md={4}>
    
           </Grid>
          </Grid> 
        </div>
    );
};

export default FifthLineChart;