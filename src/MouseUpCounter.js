import React from 'react'
import {UpdateCounter} from './UpdateCounter';

 const MouseUpCounter = ({handler,count}) => {
    return (
       <button onMouseUp={handler}>mouse up {count} times</button>
    )
}

export default UpdateCounter(MouseUpCounter);
