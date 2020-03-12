import React from 'react';
import '../App.scss';
import Counter from "../containers/Counter";
import SetCount from "../components/SetCount";

function App() {
  return (
    <div className="app">
      <div className="app__set-count">
        <SetCount />
      </div>
      <div className="app__counter">
        <Counter />
      </div>
    </div>
  );
}

export default App;
