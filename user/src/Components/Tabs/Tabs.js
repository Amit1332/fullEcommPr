import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';


export default function Tabs1() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <Box sx={{ width: '100%',display:"flex" }}>
     <Link to="/description">
     <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        
        <Tab style={{textTransform:"capitalize"}}  value="one" label="Description" />
      </Tabs>
     </Link>
     <Link to="/Review">
     <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        
        <Tab style={{textTransform:"capitalize"}} value="two" label="Reviews" />
      </Tabs>
     </Link>
       
    </Box>
    </>
  );
}