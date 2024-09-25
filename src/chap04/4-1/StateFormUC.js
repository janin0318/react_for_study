import {useRef} from "react";

export default function StateFormUC() {
  const name = useRef(null);
  const age = useRef(null);

  const show = () => {
    console.log(`こんにちは、${name.current.value} (${age.current.value})さん！`);
  };

  return (
      <form>
        <div>
          <label htmlFor="name">名前：</label>
          <input id="name" name="name" type="text" ref={name}
                 defaultValue="田中太郎"/>
        </div>
        <div>
          <label htmlFor="age">年齢：</label>
          <input id="age" name="age" type="number" ref={age}
                 defaultValue="21"/>
        </div>
        <div>
          <button type="button" onClick={show}>
            送信
          </button>
        </div>
      </form>
  );
}
