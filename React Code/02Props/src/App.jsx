import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      
      <Card user="Akshita" age={2}/>
      <Card user="Pihu" age={6}/>
      <Card user="Dipanshi" age={1}/>
    </div>
    
  )
}

export default App
