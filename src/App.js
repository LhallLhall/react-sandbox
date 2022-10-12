// import logo from './logo.svg';
// import './App.css';

import { useState } from 'react';

function App(props) {
    const [count, setCount ] = useState(0);
    console.log('On RENDER', count);
    // const [name, setName ] = useState('dylan');

    const handleClick = (e) => {
        // console.log('BEFORE SET', count)
        setCount(count + 1)
        // console.log('AFTER SET', count)
    }


    return (
        <>
            {/* <h1>{name}</h1> */}
            <h1>{count}</h1>
            <button onClick={handleClick}>Increment count</button>
        </>
    )
}

export default App
