import React, {useState} from 'react';

function Clock() {
    setInterval(() => {
        const newTime = new Date().toLocaleTimeString()
        setClock(newTime)
    }, 1000);

    const now = new Date().toLocaleTimeString()

    const [clock, setClock] = useState(now)

    return (
        <div>
        <h1 style={{fontSize: '7em'}}>{clock}</h1>
        </div>
    )
}

export default Clock;