import React, {useState, useEffect} from 'react'

export default function Stopwatch(props) {

    const [time, setTime] = useState(0);
    
    useEffect(() => {
        let interval = null;
    
        if (props.timerOn) {
            // setInterval takes a function and the number of miliseconds
            // each 10 miliseconds, our time increases 10 miliseconds.
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 10);
        } else {
          clearInterval(interval);
        }
    
        // return cleanup function. Stop the interval 
        // when user leaves the page
        return () => clearInterval(interval);
    }, [props.timerOn]);

    return (
        <div>
            <span>Time: </span> 
            {/* time / 60000 transforma o número em segundos */}
            {/* % 100 pega os números de 1 a 60 apenas */}
            {/* splice(-2) impede que haja 3 casas de números */}
            {/* Math.floor() arredonda os números e impede que haja numeral */}
            <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
            {/* time / 1000 transforma o número em segundos */}
            <span>{("0" + Math.floor(time / 1000) % 60).slice(-2)}:</span>
            {/* time / 10 transforma o número em milisegundos */}
            {/* % 100 pega os números de 1 a 99 apenas */}
            <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
        </div>
    )
}