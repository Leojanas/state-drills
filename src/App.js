import React from 'react';
import Split from './composition/Split';
import './App.css';
import Tooltip from './composition/Tooltip';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter/Counter';

const firstTooltip = (
  <Tooltip message='tooltip message' color='hotpink'>
   ipsum
  </Tooltip>
)
const secondTooltip = (
  <Tooltip message='another tooltip message'color='#126BCC'>
    officiis
  </Tooltip>
)

function App() {
  return (
    <main className='App'>
      <TheDate />
      <Counter count={123} />
    </main>
  )
}

export default App;