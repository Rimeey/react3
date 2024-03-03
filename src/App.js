import './app.css';
import { useState } from "react";
import Counter from "./Components/Counter";
import Output from "./Components/Output";

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Output count={count} />
      <div className='Counter'>
        <Counter count={count} setCount={setCount} number={10}/>
        <Counter count={count} setCount={setCount} number={5}/>
        <Counter count={count} setCount={setCount} number={1}/>
        <Counter count={count} setCount={setCount} number={-1}/>
        <Counter count={count} setCount={setCount} number={-5}/>
        <Counter count={count} setCount={setCount} number={-10}/>
      </div>
    </>
  );
}
