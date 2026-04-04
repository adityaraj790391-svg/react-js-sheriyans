import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user = 'Aman' age = {18} img = ' https://images.unsplash.com/photo-1773534847233-4fe884f29ad7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D '/>
      <Card user = 'Shaurya' age = {19} img = ' https://images.unsplash.com/photo-1773091374080-37210994a0d5?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D '/>
      <Card user = 'Ayush' age = {21} img = ' https://images.unsplash.com/photo-1771280718598-377b96776c9b?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ' />
    </div>
  )
}

export default App

