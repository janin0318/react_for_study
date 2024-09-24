import {useState} from "react";

export default function StateBasic({init}) {
  const [count, setCount] = useState(init);

  const handleClick = () => {
    setCount(count => count + 1);
    // setCount(count => count + 1);
  }

  return (
      <>
        <button onClick={handleClick}>カウント</button>
        <button onClick={() => setCount(0)}>リセット</button>
        <p>{count}回、クリックされました。</p>
      </>
  )
}
