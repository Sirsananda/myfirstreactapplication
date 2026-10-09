import React, { useState } from 'react'

const State = () => {
    const [num, setNum] = useState(0);
    const btnClick = () => setNum(num + 1);
    return (
        <div>
            <h3>{num}</h3>
            <button className='w-20 h-10 bg-blue-600 rounded-full' onClick={btnClick}>click</button>
        </div>
    )
}

export default State