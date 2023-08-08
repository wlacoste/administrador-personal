import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useEffect, useState } from 'react';

export default function DateInput() {
    const [value, setValue] = useState<null|undefined>();

    useEffect(() => {

        console.log(value);
    },[value]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker label="Basic date picker" 
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}