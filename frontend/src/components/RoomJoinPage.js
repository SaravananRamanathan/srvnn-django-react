import React, {Component} from 'react'
import { TextField,Button,Grid,Typography } from '@mui/material';
import {Link} from 'react-router-dom';

export default class RoomJoinPage extends Component{
    constructor(props){
        super(props);//calling parent construct
        this.state={
            roomCode:"",
            error:""
        };
        this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
        this._roomButtonPressed = this._roomButtonPressed.bind(this);
    }
    
     _handleTextFieldChange(e){
        //console.log(e.target.value)//test ok.
        this.setState({
            roomCode:e.target.value,
        });
    }

    _roomButtonPressed(){
        console.log(this.state.roomCode)
    }

    render(){
        return(
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography variant='h4' component='h4'>
                        Join a Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <TextField
                        error={!!this.state.error}
                        label="Code"
                        placeholder="Enter a room code"
                        value={this.state.roomCode}
                        helperText={this.state.error}
                        variant="outlined"
                        onChange={this._handleTextFieldChange}
                    >

                    </TextField>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={this._roomButtonPressed} 
                        >
                        Enter Room
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button 
                        variant="contained" 
                        color="secondary" 
                        to="/"
                        component={Link}>
                            Back
                    </Button>
                </Grid>
            </Grid>
        );
    }

   
}