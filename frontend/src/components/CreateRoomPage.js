import React, {Component} from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import {link} from "react-router-dom"
import Radio from "@mui/material/Radio"
import RadioGroup from  "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Box from '@mui/material/Box'
//import Grid from '@mui/material/Grid'
//import Typography from '@mui/material/Typography'

export default class CreateRoomPage extends Component{
    defaultVotes=1;
    constructor(props){
        super(props);//calling parent construct
    }
    render(){
        return(
        /*<p>Hello testing craete room page</p>*/
        <Box sx={{ width: '100%' }}>
            <Grid container direction={'row'} spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component='h4' variant="h4">
                        Create A Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component="fieldset">
                        <FormHelperText>
                            <div align="center">
                            Guest Control of playback state
                            </div>
                        </FormHelperText>
                        <RadioGroup row defaultValue="true">
                            <FormControlLabel 
                                value="true" 
                                control={<Radio color="primary"/>}
                                label="Play/pause"
                                labelPlacement="bottom"
                            />
                            <FormControlLabel 
                                value="false" 
                                control={<Radio color="secondary"/>}
                                label="No Control"
                                labelPlacement="bottom"
                            />

                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl>
                        <TextField 
                            required={true} 
                            type="number" 
                            defaultValue={this.defaultVotes}
                            inputProps={{
                                min:1,
                                style:{textAlign:"center"}
                            }}
                        />
                        <FormHelperText>
                            <div align="center">
                                Votes Required to skip songs
                            </div>
                        </FormHelperText>
                            
                    </FormControl>
                </Grid>
            </Grid>
        </Box>
        /*<Grid container spacing={1}>
            <Grid item xs={12} align="center">
                <Typography component='h4' variant="h4">
                    test1
                </Typography>
            </Grid>
            <Grid item xs={12}>
                <Typography component='h4' variant="h4">
                    test2
                </Typography>
            </Grid>
        </Grid>*/
         /*<Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6}>
    <Typography component='h4' variant="h4">
                    1
                </Typography>
  </Grid>
  <Grid item xs={6}>
    <Typography component='h4' variant="h4">
                    2
                </Typography>
  </Grid>
  <Grid item xs={6}>
    <Typography component='h4' variant="h4">
                    3
                </Typography>
  </Grid>
  <Grid item xs={6}>
    <Typography component='h4' variant="h4">
                    4
                </Typography>
  </Grid>
</Grid>
</Box>*/
        );
    }
}