import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import io from "socket.io-client"
import {updateHorsesDistance, pushToPlacesQueue} from '../../store/reducers/horseSlice';


const WebSocket = () => {

    const dispatch = useDispatch()

    const [connected, setConnected] = useState(false);
    
    useEffect(() => {
       connect();
    } , []);


    async function connect () {

        const socket = await io('http://localhost:3002');

        socket.on('connect', () => 
            socket.connected 
            ? setConnected(true) 
            : setConnected(false)
        );
        
        socket.emit("start")

        socket.on('ticker',  function (horses) {
            horses.forEach(horse => {
                if(horse.distance === 1000){
                    dispatch(pushToPlacesQueue(horse))
                }})

            dispatch(updateHorsesDistance(horses))
            
          });
      
        return () => socket.disconnect();
    }
    if(connected){
        return (
            <div>You are connected to live stream</div>
        )
    }

    return (
        <div>You are not connected yet</div>
    )
};

export default WebSocket;