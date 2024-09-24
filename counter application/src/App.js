
import React, { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(0);
    const [error, setError] = useState('');

    const getRandomColor = () => {
        return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    };

    const increment = () => {
        setCount(count + 1);
        setError('');
        document.body.style.backgroundColor = getRandomColor();
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
            setError('');
            document.body.style.backgroundColor = getRandomColor();
        } else {
            setError('Count cannot be negative');
        }
    };

    const reset = () => {
        setCount(0);
        setError('');
        document.body.style.backgroundColor = getRandomColor();
    };

    return (
        <div className="App">
            <h1>Counter: {count}</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default App;
