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
import  increaseImg  from '../../image/images.png'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 22,
    uv: 3,
    pv: 0,
    amt: '24k',
  },
  {
    name: 23,
    uv: 15,
    pv: 0,
    amt: '29k',
  },
  {
    name: 24,
    uv: 7,
    pv: 0,
    amt: '26k',
  },
  {
    name: 25,
    uv: 9,
    pv: 0,
    amt: '22k',
  },
  {
    name: 26,
    uv: 6,
    pv: 0,
    amt: '24k',
  },
  {
    name: 27,
    uv: 14,
    pv: 0,
    amt: '21k',
  },
  {
    name: 28,
    uv: 10,
    pv: 0,
    amt: '27k',
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
          <img src={logo} alt="" style={{marginTop:'-40px'}}/>
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
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
          <Grid container spacing={2} style={{marginLeft:'140px',marginTop:'20px'}}>
        <Grid item xs={12} md={4}>
          <Paper elevation={3} sx={{ padding: '15px' }}>
            <Box sx={{ display:'flex',justifyContent: 'space-between' }}>
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
            <Tooltip contentStyle={{ backgroundColor: "#fff", color: "gray" }} itemStyle={{ color: "gray" }}/>
            <Line dataKey="uv" stroke="#008274" fill="#8884d8" strokeWidth="2" />
            </LineChart>
        </ResponsiveContainer> </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
          <h2>Hello</h2>
          </Grid>
          <Grid item xs={12} md={4}>
          <h2>Hello</h2>
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