import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import logo from '../../image/binery-logo-small 1.png';
import { Grid} from '@mui/material';
import Paper from '@mui/material/Paper';
import increaseImg from '../../image/images.png';
import increaseImg3 from '../../image/images (1).png';
import increaseImg4 from '../../image/pyramid-design-template-2-color-blue-orange-vector-73870689-removebg-preview.png';
import HouseSidingIcon from '@mui/icons-material/HouseSiding';

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { BarChart, Bar } from 'recharts';
import { Table } from 'react-bootstrap';
import CreditCardIcon from '@mui/icons-material/CreditCard';



const data = [
  {
    name: 22,
    balance: 3,
    pv: 22,
    balanceee: 10,
  },
  {
    name: 23,
    balance: 15,
    pv: 23,
    balanceee: 8,
  },
  {
    name: 24,
    balance: 7,
    pv: 24,
    balanceee: 16,
  },
  {
    name: 25,
    balance: 9,
    pv: 25,
    balanceee: 7,
  },
  {
    name: 26,
    balance: 6,
    pv: 26,
    balanceee: 14,
  },
  {
    name: 27,
    balance: 14,
    pv: 27,
    balanceee: 21,
  },
  {
    name: 28,
    balance: 10,
    pv: 28,
    balanceee: 7,
  },
];

const drawerWidth = 100;

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

export default function Home(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

//   let [num, setNum]= React.useState(10);
//   let incNum =()=>{
//     if(num<10)
//     {
//     setNum(Number(num)+1);
//     }
//   };
//   let decNum = () => {
//      if(num>0)
//      {
//       setNum(num - 1);
//      }
//   }
//  let handleChange = (e)=>{
//    setNum(e.target.value);
//   }
  const drawer = (
    <div>
          <Toolbar />
          <img src={logo} alt="" style={{marginTop:'-80px',width:'45px'}}/>
      <List>
        {['', '', '', ''].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {['', '', ''].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  const top100Films = [
    { label: 'Last 10 Days', year: 1994 },
    { label: 'Last 15 Days', year: 1972 },
    { label: 'Last 20 Days', year: 1974 },
    { label: 'Last 30 Days', year: 2008 },
    { label: 'Last 2 Months', year: 1957 },
    { label: "Last 3 Months", year: 1993 },
  ];
  const top100Filmss = [
    { label: 'Last 14 Days', year: 1994 },
    { label: 'Last 28 Days', year: 1972 },
    { label: 'Last 1 Months', year: 1974 }
  ];
 
  return (
      <Box>
          <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px`,backgroundColor:'white' },
        }}
      >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
                  sx={{
                      mr: 2, color: 'red',
                      display: { sm: 'none' }
                  }}
          >
            <MenuIcon />
          </IconButton>
      </AppBar>
          <div
              style={{
                  marginRight: '60%',
                  marginTop: '20px',
              }}>
              <Typography
                  sx={{
                      color: '#010937',
                      fontWeight: '700',
                      fontSize: '24px',
                      marginRight:'180px'
                  }} variant='h5'>Hello,Liam! </Typography>
        <Typography sx={{
          color: '#656983'
          , marginRight: '140px'
        }} variant='p'>Finance Mission Control</Typography>
          </div> 
          <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
              sx={{
                  width: 300,
                  ml: 25, marginLeft: '75%',
                  marginTop: '-60px'
              }}
              renderInput={(params) =><TextField {...params} label="Last 7 Days" />}
          />
          <Grid container spacing={2} style={{marginLeft:'110px',marginTop:'20px'}}>
        <Grid item xs={12} md={3}>
          <Paper elevation={3}
            sx={{ padding: '15px',borderRadius:'10px' }}>
            <Box sx={{
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Typography variant='h6' sx={{
                color: '#010937',
                fontSize: '16px',
                fontWeight: '700'
              }}>MRR/AR</Typography>
               {/* <div class="">
               <div class="">
                <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                 </div>
                <input type="" value={num} onChange={handleChange} style={{width:'8px',border:'0px'}}/>
                <div class="">
               <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
              </div>
              </div> */}
              
              <Typography variant='p'
                style={{
                  color: '#008274',
                  fontWeight: '500',
                  fontSize: '13px',
                  lineHeight: '16px'
                }}><img
                  style={{ width: '8px' }}
                  src={increaseImg} alt="" />10%</Typography>
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{fill:"gray"}}/>
            <YAxis />
            <Tooltip contentStyle={{ backgroundColor: "#fff",color: "gray" }} itemStyle={{ color: "gray" }}/>
            <Line dataKey="balance" stroke="#008274" fill="#8884d8" strokeWidth="2" />
            </LineChart>
            </ResponsiveContainer> </Paper>
          
       {/*    2nd line chart */}
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
              }}>Cost Of Sales</Typography>
               {/* <div class="">
               <div class="">
                <button class="btn btn-outline-primary" type="button" onClick={decNum}>-</button>
                 </div>
                <input type="" value={num} onChange={handleChange} style={{width:'8px',border:'0px'}}/>
                <div class="">
               <button class="btn btn-outline-primary" type="button" onClick={incNum}>+</button>
              </div>
              </div> */}
              
              <Typography variant='p'
                style={{
                  color: '#ef6b1f',
                  fontWeight: '500',
                  fontSize: '13px',
                  lineHeight: '16px'
                }}><img
                  style={{ width: '12px' }}
                  src={increaseImg4} alt="" />10%</Typography>
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
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{fill:"gray"}}/>
            <YAxis />
                <Tooltip contentStyle={{
                  backgroundColor: "#fff",
                  color: "gray"
                }} itemStyle={{ color: "gray" }} />
            <Line dataKey="balanceee" stroke="#ef6b1f" fill="#ef6b1f" strokeWidth="2" />
            </LineChart>
            </ResponsiveContainer> </Paper>
          </Grid>
        <Grid item xs={12} md={3} sx={{
          border: '1px solid black',
          backgroundColor: '#262d54',
          marginLeft: '30px',
          marginTop: '17px',
          borderRadius: '10px'
        }}>
          <div>
            <Typography variant='h6' sx={{
              fontSize: '14px',
              fontWeight: '500',
              color: 'white',
              textAlign:'left'
            }}>Bank Balances</Typography>
            <div className='d-flex justify-content-between'>
             <p style={{
            fontSize: '24px',
            fontWeight: '500',
            textAlign: 'left',
            color: 'white'
            }}>$201,142</p>
              <HouseSidingIcon style={{color:'white'}}/>
           </div>
           <Typography variant='p'
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '16px'
                }}><img
                  style={{ width: '12px' }}
              src={increaseImg3} alt="" />10%</Typography>
          <Typography variant='p' style={{color:'#a0a4b9'}}>Since Last Month</Typography>
          </div>
          <ResponsiveContainer width="90%" height="50%">      
            <BarChart  data={data}>
            <XAxis dataKey='pv' tick={{fill:"#F2F4FC"}}/>
          <Bar dataKey="pv" fill="#2fc083" />
            </BarChart>
          </ResponsiveContainer>
          <div className='d-flex justify-content-between'>
            <p style={{ color: 'white' }}>Credit Card Balances</p>
            <CreditCardIcon style={{color:'white'}}/>
          </div>
          <p style={{
            fontSize: '24px',
            fontWeight: '500',
            textAlign: 'left',
            color: 'white'
          }}>$5410</p>
           <Typography variant='p'
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  fontSize: '16px',
                  lineHeight: '16px'
                }}><img
                  style={{ width: '12px' }}
              src={increaseImg3} alt="" />2%</Typography>
          <Typography variant='p' style={{color:'#a0a4b9'}}>Since Last Month</Typography>

          {/* <ResponsiveContainer width="50%" height="80%">      
            <BarChart width={50} height={20} dataa={dataa}>
            <XAxis  dataKey='pv' tick={{fill:"gray"}}/>
          <Bar dataKey="pv" fill="#2fc083" />
        </BarChart>
          </ResponsiveContainer> */}
          </Grid>
          <Grid item xs={12} md={3}>
          <Paper elevation={3} style={{padding:'8px',borderRadius:'10px'}}>
          <div className='d-flex justify-content-between'>
                  <p style={{fontWeight:'500',fontSize:'14px'}}>Expenses</p>
              <Autocomplete
               options={top100Filmss}
              sx={{
                  width: 200,
                  ml: 25,
                }}
                style={{marginLeft:'135px'}}
              renderInput={(params) =><TextField {...params} label="This Week" /> }
          />
              </div>
            <Table>
              <thead>
           <tr>
      <th style={{color:'gray',fontWeight:'200'}}>#</th>
      <th style={{color:'gray',fontWeight:'200'}}>Name</th>
      <th style={{color:'gray',fontWeight:'200'}}>Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{color:'#010937'}}>01</td>
      <td style={{color:'#010937'}}>Advertising</td>
      <td style={{color:'#010937',fontWeight:'700'}}>$705</td>
    </tr>
    <tr>
      <td style={{color:'#010937'}}>02</td>
      <td style={{color:'#010937'}}>Car & Track Expenses</td>
      <td style={{color:'#010937',fontWeight:'700'}}>$674</td>
        </tr>
    <tr>
      <td style={{color:'#010937'}}>03</td>
      <td style={{color:'#010937'}}>Contractors</td>
      <td style={{color:'#010937',fontWeight:'700'}}>$428</td>
        </tr>
    <tr>
      <td style={{color:'#010937'}}>04</td>
      <td style={{color:'#010937'}}>Education & Training</td>
      <td style={{color:'#010937',fontWeight:'700'}}>&404</td>
        </tr>
    <tr>
      <td style={{color:'#010937'}}>05</td>
      <td style={{color:'#010937'}}>Employ Benefits</td>
      <td style={{color:'#010937',fontWeight:'700'}}>$399</td>
        </tr>
    <tr>
      <td style={{color:'#010937'}}>06</td>
      <td style={{color:'#010937'}}>Meals $ Entertainment</td>
      <td style={{color:'#010937',fontWeight:'700'}}>$370</td>
        </tr>
    <tr>
      <td style={{color:'#010937'}}>07</td>
      <td style={{color:'#010937'}} >Office Expenses $ Postage </td>
      <td style={{color:'#010937',fontWeight:'700'}}>$355</td>
        </tr>
    <tr>
      <td style={{color:'#010937'}}>08</td>
      <td style={{color:'#010937'}}>Other Expenses</td>
      <td style={{color:'#010937',fontWeight:'700'}}>$210</td>
        </tr>
    <tr>
      <td style={{color:'#010937'}}>09</td>
      <td style={{color:'#010937'}}>Professional Services</td>
      <td style={{color:'#010937',fontWeight:'700'}} >190</td>
        </tr>
    <tr>
      <td style={{color:'#010937'}}>10</td>
      <td style={{color:'#010937'}}>Rent</td>
      <td style={{color:'#010937',fontWeight:'700'}}>$188</td>
        </tr>
              </tbody>
            </Table>
            </Paper>
           </Grid>
         </Grid>
      <Box
        component="nav"
              sx={{
                  width: { sm: drawerWidth },
                  flexShrink: { sm: 0 }
              }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
         
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
      </Box>
    </Box>
  );
}