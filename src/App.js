import React from 'react';
import './App.css';
import Counter from './components/counter/Counter'
import TodoApp from "./components/todo/TodoApp";

function App() {
  return (
    <div className="App">
      <TodoApp/>
      {/*<Counter />*/}
    </div>
  );
}

export default App;
