import logo from './logo.svg';
import './App.css';
import React from 'react'
import {BarGraph} from './BarGraph'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import InputLabel from '@material-ui/core/InputLabel'
import Select from '@material-ui/core/Select'
import FormControl from '@material-ui/core/FormControl'
import Grid from '@material-ui/core/Grid'
import axios from 'axios';

function App() {
  const [wage, setWage] = React.useState("ppp1");
  const [male, setMale] = React.useState([]);
  const [female, setFemale] = React.useState([]);
  React.useEffect(()=>{
    axios.get('http://localhost:9000/api/poverty?poverty_level='+ wage)
    .then((data)=>{
      var type = 'male';
      var data = data.data;
      data.map(d=>{
        let arr = [];
        type = (d['gender']==='female'?'female':'male');
        arr.push(d['sevpov']*100)
        arr.push(d['povgap']*100)
        arr.push(d['hc']*100)
        type=='male'?setMale(arr):setFemale(arr);
      })
    })
  }, [wage])
  
  return (
    <>
        <h2>Poverty Measure by Gender</h2>
            <Grid
                container
                direction="row"
                justify="space-between"
                alignItems="flex-start"
                style={{'margin':'10px'}}
            >
                <Grid xs={2} item >
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">
                            Wage
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={wage}
                            label="wage"
                            onChange={(event)=>setWage(event.target.value)}
                        >
                            <MenuItem value={'ppp1'}>$1.90/day (2011 PPP)</MenuItem>
                            <MenuItem value={'ppp2'}>$3.10/day (2011 PPP)</MenuItem>
                        </Select>
                        <FormHelperText>
                            Lorem Impsum Lorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem ImpsumLorem Impsum
                        </FormHelperText>
                    </FormControl>
                </Grid>
                <Grid item xs={10}>
                    <BarGraph male = {male} female = {female}/>
                </Grid>
            </Grid>
        </>
  );
}

export default App;
