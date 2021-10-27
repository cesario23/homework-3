import React, {useState} from 'react'

const Counter = () => {

    const [state, setState] = useState(0);
    
    const onRemove = () => setState(state-1)
    const onAdd = () => setState(state+1);
  
 

    return (
        <div>
            <button onClick= {onRemove}>
              Remove 1
            </button>
            <h1>{state}</h1>
            <button onClick={onAdd}>
              Add 1
            </button>
         
        </div>
    )
}

export default Counter;