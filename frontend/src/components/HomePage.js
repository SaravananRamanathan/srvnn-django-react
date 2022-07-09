import React, {Component} from 'react'
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
import Room from './Room';
import { useParams } from 'react-router-dom';
import {BrowserRouter as Router, Routes, Route, Link, Redirect} from "react-router-dom";
export default class HomePage extends Component{
    constructor(props){
        super(props);//calling parent construct
    }
    
    CustomRoomWrapper = () => {
        const { roomCode } = useParams();
        return <Room roomCode={roomCode} />;
    };

    render(){
        return(
        //<p>this is the home page</p> 
        <Router>
            <Routes>
                <Route path="/" element={<p>This is the home page</p>} />
                <Route path="/join/*" element={<RoomJoinPage/>}/>
                <Route path="/create" element={<CreateRoomPage/>}/>  
                <Route path="/room/:roomCode" element={<this.CustomRoomWrapper/>}/>
            </Routes>
        </Router>
        )
    }
}