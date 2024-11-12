import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [pass, setPass] = useState("");

  const passwordGenerator = useCallback(() => {
    let generatedPass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";

    if (numAllowed) {
      str += "1234567890";
    }
    if (charAllowed) {
      str += "!@#$%^&*_+-";
    }

    for (let i = 1; i <= length; i++) {
      const charIndex = Math.floor(Math.random() * str.length);
      generatedPass += str.charAt(charIndex);
    }
    setPass(generatedPass);
  }, [length, numAllowed, charAllowed, setPass]);

  //useRed hook 
  const passwordRef = useRef(null)

  useEffect(() => {
    passwordGenerator();
  }, [length, numAllowed, charAllowed]);


  const copyPassToClipboard = () => {
    window.navigator.clipboard.writeText(pass)
  }
  return (
    <>
      <div className="w-full  mx-auto shadow-sm rounded-2xl p-1 px-4 pb-6 my-8 bg-slate-900 text-orange-500">
        <h1 className="mt-4">Password Generator</h1>
        <div className="flex shadow-lg rounded-lg overflow-hidden">
          <input
            type="text"
            value={pass}
            className="outline-none w-full pl-4 size-8"
            placeholder="password "
            readOnly
            ref = {passwordRef}
          />
          <button onClick={copyPassToClipboard} className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 " >
            copy
          </button>
        </div>
        <div className="flex items-center gap-x-2 mt-4">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={20}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label>length : {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
              setNumAllowed(((prev)=> !prev));
              }}
            />
            <label>include Number</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed(((prev => !prev)));
              }}
            />
            <label> include Char</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
