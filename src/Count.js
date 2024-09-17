import {useState} from "react";

function Counter() {
  const [count, setState] = useState('a');
  return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setState(count + 'a')}>Increment</button>
        <button onClick={() => setState('a')}>Reset</button>
      </div>
  )
}

export default Counter;
