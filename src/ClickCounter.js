import React from 'react'
import {UpdateCounter} from './UpdateCounter';

const ClickCounter = ({handler,count,name}) => {

    return (
        <div>
                <button onClick={handler}>{name} clicked {count} times</button>
        </div>
    )
}
export default  UpdateCounter(ClickCounter);
