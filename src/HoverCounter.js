import React from 'react'
import {UpdateCounter} from './UpdateCounter'
 const HoverCounter = ({handler,count}) => {
    
    return (
        <div>
                <button onMouseOver={handler}>hovered {count} times</button>
        </div>
    )
}

export default UpdateCounter(HoverCounter);
