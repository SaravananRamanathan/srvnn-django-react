import React, {Component,useState} from 'react'
import { TextField,Button,Grid,Typography } from '@mui/material';
import {Link} from 'react-router-dom';
import { useNavigate} from 'react-router-dom'
function RoomJoinPage(props){
    const navigate = useNavigate();
    /*constructor(props){
        super(props);//calling parent construct
        this.state={
            roomCode:"",
            error:""
        };
        this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
        this._roomButtonPressed = this._roomButtonPressed.bind(this);
    }*/
    
    const [roomCode,setRoomCode]=useState("");
    const [error,setError] = useState("");

    function _handleTextFieldChange(e){
        //console.log(e.target.value)//test ok.
        /*this.setState({
            roomCode:e.target.value,
        });*/
        setRoomCode(e.target.value);
    }

    function _roomButtonPressed(){
        //console.log(this.state.roomCode)
        console.log(roomCode)
        const requestOptions={
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
                code:roomCode
            })
        };
        fetch('/api/join-room/',requestOptions).then((response)=>{
            if(response.ok){
                //valid case
                navigate('/room/'+roomCode);        
            }
            else{
                setError("Room Not Found");
            }
        }).catch((error)=>{
            console.log(error);
        });
    }

        return(
            <Grid container spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography variant='h4' component='h4'>
                        Join a Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <TextField
                        error={!!error}
                        label="Code"
                        placeholder="Enter a room code"
                        value={roomCode}
                        helperText={error}
                        variant="outlined"
                        onChange={_handleTextFieldChange}
                    >

                    </TextField>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={_roomButtonPressed} 
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
export default RoomJoinPage;