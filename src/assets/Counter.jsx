import { useState } from "react";

export default function Counter() {
    const [count,setCount] = useState(0);

    function increment() {
        setCount(count + 1)
    }

    function increment() {
        setCount(count - 1)
    }

    return (
        <div>
            <h1><center> count value is {count} </center></h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>               
        </div>
    )
}