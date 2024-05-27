import React from 'react';

import Output from './components/Output/Output';
import Input from './components/Input/Input';
import Panel from './components/Panel/Panel';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  const [isOpen, setIsOpen] = React.useState(false)

  const toggleOpen = () => {
    setIsOpen(prev=> !prev)
  }

  return (
    <main>
      <Panel/>
      <Output />
      <Input/>
      <Sidebar open={isOpen} toggleOpen={toggleOpen} />
    </main>
  )
}

export default App
