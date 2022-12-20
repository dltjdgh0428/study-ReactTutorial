import React from 'react';
import CounterContainer from './containers/CounterContainers';
import TodosContainer from './containers/TodosContainer';

const App = () => {
  return (
    <div>
      <CounterContainer/>
      <hr/>
      <TodosContainer/>
    </div>
  );
};

export default App;
