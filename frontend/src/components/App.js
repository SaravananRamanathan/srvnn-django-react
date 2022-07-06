import React, {Component} from 'react';
import {render} from "react-dom";
import HomePage from "./HomePage"
import RoomJoinPage from './RoomJoinPage';
import CreateRoomPage from './CreateRoomPage';
//compnent 1
export default class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        //must be one element to return ,,in here we have multiple element with in 1 parent element div
        return(
            <HomePage />
        );
    }
}

const appDiv = document.getElementById("app");
render(<App/>,appDiv);