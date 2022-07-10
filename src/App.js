import Calculator from "./Calculator";
import { useState } from 'react';
import {calculTable} from "./calculating";
import SheduleTable from "./SheduleTable";

function App() {
  const [sum, setSum] = useState(10000);
  const [rate, setRate] = useState(1);
  const [term, setTerm] = useState(1);
  const calculating = calculTable(sum,term * 12, rate);

  return (
    <div>
    <Calculator sum={sum} rate={rate} term={term} setSum={setSum} setRate={setRate} setTerm={setTerm}/>
    <SheduleTable data={calculating}/>

    </div>
  );
}

export default App;
