//after we have created the room...
import React, {Component,useState} from 'react';
import {useMatch} from 'react-router-dom';
function Room(props){
    //const match = useMatch();
    console.log(props)
    const [votesToSkip] = useState(1);
    //const[votesToSkip,setVotes]=useState(1);
    //later can use setVotes to set the votesToSkip values
    // example : setVotes(votesToSkip+1)
    const [guestCanPause] = useState(true);
    const [isHost] = useState(false);
    const printFalse="False";
    const printTrue="True";
    return (
        <div>
            <h3>Room-code: {props.item} </h3>
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