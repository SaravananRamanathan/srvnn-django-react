import React, {Component, useState} from 'react'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import {Link} from "react-router-dom"
import Radio from "@mui/material/Radio"
import RadioGroup from  "@mui/material/RadioGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Box from '@mui/material/Box'
import { useNavigate} from 'react-router-dom'
//import Grid from '@mui/material/Grid'
//import Typography from '@mui/material/Typography'

function CreateRoomPage(props){
    const navigate = useNavigate();
    const defaultVotes=1;
    /*useEffect(() => {  // something like this to use for a initialization logic
        this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this)
        this.handleVotesChange = this.handleVotesChange.bind(this)
        this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this)
    },[]);*/

    const [guestCanPause,setGuestCanPause] = useState(true);
    const [votesToSkip,setVotesToSkip] = useState(defaultVotes)

    function handleVotesChange(e){
        // this.setState({
        //     votesToSkip: e.target.value,
        // })
        setVotesToSkip(e.target.value);
    }

    function handleGuestCanPauseChange(e){
        // this.setState({
        //     guestCanPause: e.target.value==="true"?true:false,
        // })
        setGuestCanPause(e.target.value==="true"?true:false)
    }

    function handleRoomButtonPressed(){
        // console.log(this.state);
        const requestOptions = {
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify({
                votes_to_skip: votesToSkip,
                guest_can_pause: guestCanPause,
            }),
        };
        fetch("/api/create-room/",requestOptions)
            .then((response) => response.json())
            .then((data)=>{
                console.log(data);
                //navigate = useNavigate();
                //const { navigate } = useNavigate();
                //console.log(navigate);
                //navigate('/room/'+data.code);
                console.log(props)
                
                navigate('/room/'+data.code);
                 //this.props.history.push('/room/'+data.code)
                //const { history } = this.props;
                //history.push("/room/"+data.code);
                //this.props.history.push('/room/'+data.code);
            });
    }
        return(
        /*<p>Hello testing craete room page</p>*/
        /*<Box sx={{ width: '100%'}}>*/
            <Grid container direction={'row'} spacing={1}>
                <Grid item xs={12} align="center">
                    <Typography component='h4' variant="h4">
                        Create A Room
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <FormControl component='fieldset'>
                        <FormHelperText component={'span'}>
                            <div align="center">
                            Guest Control of playback state
                            </div>
                        </FormHelperText>
                        <RadioGroup row defaultValue="true" onChange={handleGuestCanPauseChange}>
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
                            defaultValue={defaultVotes}
                            inputProps={{
                                min:1,
                                style:{textAlign:"center"}
                            }}
                            onChange={handleVotesChange}
                        />
                        <FormHelperText component={'span'}>
                            <div align="center">
                                Votes Required to skip songs
                            </div>
                        </FormHelperText>
                            
                    </FormControl>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="secondary" variant="contained" onClick={handleRoomButtonPressed}>
                        Create a room
                    </Button>
                </Grid>
                <Grid item xs={12} align="center">
                    <Button color="primary" variant="contained" to="/" component={Link}>
                        Back
                    </Button>
                </Grid>
            </Grid>
        /*</Box>*/
        );
}
export default CreateRoomPage