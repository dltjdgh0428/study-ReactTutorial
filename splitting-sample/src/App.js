
import React, {useState,Suspense} from 'react';
import './App.css';

const SplitMe = React.laze(()=> import('./SplitMe'))

function App() {
  const [visible, setVisible] = useState(false);
  const onClick= () =>{
    setVisible(true);
  }
  return (
    <div className="App">
      <p onClick={onClick} >HELLO REACT</p>
      <Suspense fallback={<div>loading...</div>}>
        {visible && <SplitMe/>}
      </Suspense>
    </div>
  );
}

export default App;
