import React, {useRef, useState} from 'react';
import { useDispatch } from 'react-redux';
import io from "socket.io-client"
import {updateHorsesDistance, pushToPlacesQueue, clearHorsesByPlace} from '../../store/reducers/horseSlice';
import "./style.css"


const WebSocket = () => {

    const dispatch = useDispatch()

    const [connected, setConnected] = useState(false);

    const ref = useRef();
    
    function disconnect () {
        ref.current.disconnect();
        setConnected(false)
    }

    async function connect () {
        dispatch(clearHorsesByPlace());
        const socket = await io('http://localhost:3002');

        socket.on('connect', () => 
            setConnected(true)  
        );
        
        socket.emit("start")

        socket.on('ticker',  function (horses) {
            horses.forEach(horse => {
                if(horse.distance === 1000){
                    dispatch(pushToPlacesQueue(horse))
                }})
            
            dispatch(updateHorsesDistance(horses));
            
          });

          ref.current = socket
      
        return () => socket.disconnect();
    }

    if(connected){
        return (
            <div>
                <p className="race-title">You are connected to live stream</p>
                <button className="race-button" onClick={()=> disconnect()}>Disconnect</button>
            </div>
        )
    } 

    return (
        <div>
            <p className="race-title">Click the button to start race!</p>
            <button className="race-button" onClick={()=> connect()}>Start Race!</button>
        </div>
    )
};

export default WebSocket;