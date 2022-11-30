import { useState } from "react";

export const CounterApp = () => {

    const count = {
        counter1: 10,
        counter2: 20,
        counter3: 30
    }

    const [ counter, setCounter ] = useState(count);
    const { counter1, counter2, counter3 } = counter;

    const handleClick = () => {
        setCounter({
            ...counter,
            counter1: counter1 + 1
        })
    }

    return (
        <>
            <h1>Counter1: { counter1 } </h1>
            <h1>Counter2: { counter2 } </h1>
            <h1>Counter3: { counter3 } </h1>

            <hr/>

            <button
                className='btn'
                onClick={ handleClick }>
                +1
            </button>
        </>
    );
};