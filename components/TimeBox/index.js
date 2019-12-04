import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Vibration } from 'react-native';

export default function TimeBox() {



    const [previousLap, setPreviousLap] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [displayedSeconds, setDisplayedSeconds] = useState(0);

    const [color, setColor] = useState('#95a5a6')


    function restartTimer()
    {
        setPreviousLap(seconds);
        setSeconds(0);
        Vibration.vibrate([100,100,50,50]);

    }

    useEffect(()=>{
        var interval = setInterval(() => {
            setSeconds(seconds + 1);
            clearInterval(this);

            if (seconds < 2)
            {
                setColor(getColor(previousLap));
                setDisplayedSeconds(previousLap);
            }
            else if (seconds < 120)
            {
                setColor(getColor(seconds));
                setDisplayedSeconds(seconds);
            }
            else
            {
                displayedSeconds = "120+";
            }
        }, 1000);
        return() => clearInterval(interval);
    }, [seconds]);

    function getColor(time)
    {
        if (time < 20)
        {
            if (time % 2 == 0)
                return ("#ecf0f1");
            return ("#bdc3c7");
        }
        else if (time < 25)
        {
            return("#27ae60");
        }
        else if (time < 30)
        {
            return ("#2ecc71");
        }
        else if (time < 35)
        {
            return ("#c0392b");
        }
        else if (time < 40)
        {
            return ("#e74c3c");
        }
        else if (time < 45)
        {
            return ("#2980b9")
        }
        else if (time < 50)
        {
            return("#3498db");
        }
        else if (time < 55)
        {
            return("#f39c12");
        }
        else if (time < 60)
        {
            return ("#f1c40f");
        }
        else
        {
            if (time % 2 == 0)
                return ("#ecf0f1");
            return ("#bdc3c7");
        }
    }

    var mainStyle = {
        backgroundColor: color,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }

    var timeStyle = {
        fontSize: 250,
    }

    return (
        <TouchableOpacity style={mainStyle} onPress={restartTimer}>
            <Text style={timeStyle}>{displayedSeconds}</Text>
        </TouchableOpacity>

    );
}