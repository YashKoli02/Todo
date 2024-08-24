//import React from 'react'
import Addtodo from './components/Addtodo'
import Todos from './components/todos'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <main>
    <h1> 
      TODO-LIST REACT+TYPESCRIPT
    </h1>
    <Navbar/>
   <Addtodo/>
   <Todos/>
    </main>
    
  )
}

export default App