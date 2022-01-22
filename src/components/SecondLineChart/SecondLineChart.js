import { Box, Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';
import imageOne from '../../image/upper.png';

const data = [
    {
      name: 22,
      balance: 8,     
      balancee: 3,
    },
    {
      name: 23,
      balance: 3,
      balancee: 6,
    },
    {
      name: 24,
      balance: 7,
      balancee: 5,
    },
    {
      name: 25,
      balance: 6.5,
      balancee: 2,
    },
    {
      name: 26,
      balance: 4,
      balancee: 10,
    },
    {
      name: 27,
      balance: 10,
      balancee: 8.5,
    },
    {
      name: 28,
      balance: 9,
      balancee: 7,
    },
  ];

const SecondLineChart = () => {
    return (
       <> <Grid container spacing={2}>
         <Grid item xs={12} md={3}>
         <Box
            sx={{
              borderRadius: '10px',
              marginLeft: '40%',
              width: '20%',
              // padding:'0 70px'
              marginTop:'-100px'
            }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Typography variant='h6' sx={{
                color: '#010937',
                fontSize: '16px',
                fontWeight: '700'
              }}>Gross Profit</Typography>   
              <Typography variant='p'
                style={{
                  color: '#008000',
                  fontWeight: '500',
                  fontSize: '13px',
                  lineHeight: '16px',
                  marginLeft: '230px',
                }}><img
                  style={{ width: '12px'}}
                  src={imageOne} alt="" />10%</Typography>
            </Box>
          <ResponsiveContainer width="500%" height={200}>
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
                  dataKey="balance"
                  stroke="#ffc857"
                  fill="#ffc857"
                  strokeWidth="2" />
            </LineChart>
            </ResponsiveContainer>
            </Box>
        </Grid>
        
        <Grid item xs={12} md={3}
          style={{
            marginLeft: '130px',
            marginTop: '-120px'
          }}>
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
              }}>Gross Profit Margin</Typography>          
              <Typography variant='p'
                style={{
                  color: '#008000',
                  fontWeight: '500',
                  fontSize: '13px',
                  lineHeight: '16px'
                }}><img
                  style={{ width: '12px' }}
                  src={imageOne} alt="" />10%</Typography>
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
         <Grid item xs={12} md={3}>
    
         </Grid>
            </Grid> </>
    );
};

export default SecondLineChart;