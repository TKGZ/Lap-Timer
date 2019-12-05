import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';

import * as helpers from '../../helpers/helpers';


export default function TimeBox() {

    const [currentInterval, setCurrentInterval] = useState();


    const [startTime, setStartTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);

    //time in miliseconds
    const [time, setTime] = useState(1);
    const [previousTime, setPreviousTime] = useState(0);
    const [displayedTime, setDisplayedTime] = useState(0);
    
    const [color, setColor] = useState('#95a5a6');
    const [delay, setDelay] = useState(10);


    var currentTime = new Date().getTime();

    //store more accurate information!
    useInterval(() => {
        setElapsedTime(currentTime - startTime);
    }, delay);
    
    //display less accurate information (less updates!)
    useInterval(() => {
        setDisplayedTime((elapsedTime - (elapsedTime % 1000))/1000)
    }, 100);
    
    function restartTimer()
    {
        setStartTime(currentTime);
    }

    useEffect(() => {
    }, [elapsedTime])

    useEffect(() => {
        setStartTime(currentTime);
    },[])

    var mainStyle = {
        backgroundColor: color,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

    var timeStyle = {
        fontSize: 100,
    }

    return (
        <TouchableOpacity style={mainStyle} onPress={restartTimer}>
            <Text style={timeStyle}>{displayedTime}</Text>
        </TouchableOpacity>
    );
}

function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }