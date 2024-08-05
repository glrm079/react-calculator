import { useState } from 'react';
import './style.css';
import Button from './components/Button';
import { evaluate } from 'mathjs';

function App() {
  const [visorValue, setVisorValue] = useState("");
  const handleButtonClick = (number) => {
    const operatorRegex = /[\+\-\*\/]/;
    const endsWithOperator = operatorRegex.test(visorValue.slice(-1));

    if (number === "-" || number === "+" || number === "/" || number === "*") {
      if (endsWithOperator) {
        setVisorValue((prevValue) => prevValue.slice(0, -1) + number);
      } else {
        setVisorValue((prevValue) => prevValue + number);
      }
    } else {
      setVisorValue((prevValue) => prevValue + number);
    }
  };
  
  const clear = ()=>{
    setVisorValue("");
  }
  const calculate = () => {
    const result = evaluate(visorValue);
    setVisorValue(result.toString());
  };

  return (
    <>
      <input
        type="text"
        disabled
        className='w-96 bg-zinc-800 text-zinc-50 text-center p-5 rounded'
        value={visorValue}
      />
      <div className='py-3 grid grid-cols-4 gap-2 w-full'>
          <Button backgroundHover={"hover:bg-yellow-400"} backgroundColor={"bg-yellow-600"} number={"C"} onClick={clear}  />
          <Button backgroundColor={"bg-zinc-700"} number={"/"} onClick={handleButtonClick} />
          <Button backgroundColor={"bg-zinc-700"}number={"*"} onClick={handleButtonClick} />
          <Button backgroundColor={"bg-zinc-700"} number={"-"} onClick={handleButtonClick} />
          <Button number={7} onClick={handleButtonClick} />
          <Button number={8} onClick={handleButtonClick} />
          <Button number={9} onClick={handleButtonClick} />
          <Button backgroundColor={"bg-zinc-700"} number={"+"} onClick={handleButtonClick} />
          <Button number={4} onClick={handleButtonClick} />
          <Button number={5} onClick={handleButtonClick} />
          <Button number={6} onClick={handleButtonClick} />
          <Button backgroundColor={"bg-zinc-700"} number={"="} onClick={calculate} />
          <Button number={1} onClick={handleButtonClick} />
          <Button number={2} onClick={handleButtonClick} />
          <Button number={3} onClick={handleButtonClick} />
          <Button backgroundColor={"bg-zinc-700"} number={0} onClick={handleButtonClick} />
         
      </div>



    </>
  );
}

export default App;
