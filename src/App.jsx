import { useState } from 'react'

import Navbar from './components/Navbar-Menu/Index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        
          <Navbar/>

      </header>
    </div>
  )
}

export default App
