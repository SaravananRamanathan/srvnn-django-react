//after we have created the room...
import React, {Component,useState} from 'react';
import {useMatch} from 'react-router-dom';
function Room(props){
    //const match = useMatch();
    console.log(props)
    const [votesToSkip,setVotesToSkip] = useState(1);
    //const[votesToSkip,setVotes]=useState(1); //here setVotes is the function that is going to be used to alter this state value afterwards
    //later can use setVotes to set the votesToSkip values
    // example : setVotes(votesToSkip+1)
    const [guestCanPause,setGuestCanPause] = useState(true);
    const [isHost,setIsHost] = useState(false);
    const printFalse="False";
    const printTrue="True";
    
    // roomDetailsGuestCanPuase=guestCanPause;
    // roomDetailIsHost=isHost;
    // roomDetailVotesToSkip=votesToSkip;

    function getRoomDetails(){
        fetch('/api/get-room'+'?code='+props.roomCode).then((response)=>
            response.json()
        ).then((data)=>{
            console.log(data)
            setGuestCanPause(data.guest_can_pause);
            setVotesToSkip(data.votes_to_skip);
            setIsHost(data.is_host);
        });
    }
    getRoomDetails();
    return (
        <div>
            <h3>Room-code: {props.roomCode} </h3>
            <p>Votes: {votesToSkip}</p>
            <p>Guest can pause: {guestCanPause===false?printFalse:printTrue}</p>
            <p>Host?: {isHost===false?printFalse:printTrue}</p>
        </div>
        );
}
export default Room;
/*export default class Room extends Component{
    match=useMatch();
    constructor(props){
        super(props);
        this.state={
            votesToSkip:2,
            guestCanPause:false,
            isHost:false,
        };
        //this.roomCode = this.props.match.params.roomCode;
        console.log(this.props.match)
        console.log(match)
    } 
    render(){
        return (
        <div>
            <h3>Room-code: {this.roomCode}</h3>
            <p>Votes: {this.state.votesToSkip}</p>
            <p>Guest can pause: {this.state.guestCanPause}</p>
            <p>Host: {this.isHost}</p>
        </div>
        );
    }
}*/