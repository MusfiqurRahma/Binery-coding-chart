import { Grid, Paper } from '@mui/material';
import React from 'react';
import image1 from '../../image/fire.png';
import image2 from '../../image/seed.png';

const FourthLineChart = () => {
    return (
        <Grid container spacing={2}
            style={{
                marginTop: '15px',
                marginLeft: '40px'
            }}>
            <Grid item xs={12} md={4}>
                <Paper elevation={3}
                    style={{ width: '100%' }}>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-evenly',
                        borderRadius: '20px',
                    }}>
                        <h5 style={{
                            fontSize: '16px',
                            color: '#010937',
                            textAlign: 'left',
                            marginTop:'1%'
                        }}>BURN RATE <p style={{
                            marginLeft: '1%',
                            fontSize: '24px',
                            color: '#8d90a5'
                        }}>$650.10 <span
                                style={{
                                    color: '#8d90a5',
                                    fontSize: '14px'
                                }}>per month</span></p></h5>
                        <h><img style={{
                            width: '50px',
                            height:'60px',
                            backgroundColor: '#fbe8e8',
                            borderRadius: '10px',
                            padding: '10px',
                            marginTop:'1%'
                        }} src={image1} alt="" /></h>     
                    </div>
                </Paper>
             </Grid>
            <Grid item xs={12} md={4}>
                <Paper elevation={3}
                    style={{ width: '80%' }}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                            padding: '15px'
                        }}>
                        <h5
                            style={{
                                fontSize: '16px',
                                color: '#010937'
                            }}>Customer lifetime value<p
                                style={{
                                    marginLeft: '1%',
                                    fontSize: '24px', color: '#8d90a5'
                                }}>$8,312.31<span
                                    style={{ color: '#8d90a5', fontSize: '14px' }}>per month</span></p></h5>
                        <h><img
                            style={{
                                width: '50px',
                                backgroundColor: '#e0f0ee', borderRadius: '10px',
                                padding: '10px'
                            }} src={image2} alt="" /></h>     
                    </div>
                    </Paper>
             </Grid>
              <Grid item xs={12} md={4}>
    
             </Grid>
             </Grid>
    );
};

export default FourthLineChart;