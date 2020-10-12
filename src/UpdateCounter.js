import React,{useState} from 'react'


export const UpdateCounter = (Component) => {
    const NewComponent = (props)=>{
        const [count, setCount] = useState(0);
        const incrementHandler = ()=>{
            setCount(count+1);
        }
        return <Component handler={incrementHandler} count={count} {...props}/>
    }
    return NewComponent;
}
