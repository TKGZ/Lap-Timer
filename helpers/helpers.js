
export function getColor(time)
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

export function getMinutesFraction(seconds)
{
    return (Math.round((seconds / 60) - (seconds % 60)));
}

export function getSecondsFraction(seconds)
{
    return (seconds % 60);
}

export function timeToSeconds(time)
{
    
}
//custom hook for intervals! https://overreacted.io/making-setinterval-declarative-with-react-hooks/
