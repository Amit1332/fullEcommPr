import * as React from 'react';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

function valuetext(places) {
  return `${places}°C`;
}

const marks = [
  {
    value: 0,
    label: 'Delivered',
  },
  {
    value: 25,
    label: 'Out For Delivery',
  },
  {
    value: 50,
    label: 'Shipped',
  },
  {
    value: 80,
    label: 'Order Confirmed',
  },
];



export default function Progress() {
  return (
  <>
    <Stack sx={{ height: 300}} spacing={1} direction="row" > 
      <Slider
      style={{color:"#12B76A"}}
        getAriaLabel={() => 'Temperature'}
        orientation="vertical"
        getAriaValueText={valuetext}
        defaultValue={[0, 25, 50 ,80]}
        valueLabelDisplay="auto"
        marks={marks}
        track="red"
      />
    </Stack>
      
    
  </>
  );
}