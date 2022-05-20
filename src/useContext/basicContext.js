import { useState, createContext } from 'react'
import { A, Header } from './basicContextComp'

export const StateContext = createContext()

function App() {
  const [state, setState] = useState('')

  return (
    <StateContext.Provider value={{ state, setState }}>
      <Header />
      <A />
    </StateContext.Provider>
  )
}

export default App
