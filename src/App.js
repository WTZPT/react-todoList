import React from 'react';
import './App.css';
import  TodoFromContainer from './containers/TodoFromContainer'
import TodoListContainer from './containers/TodoListContainer'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoListContainer></TodoListContainer>
        <TodoFromContainer></TodoFromContainer>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
