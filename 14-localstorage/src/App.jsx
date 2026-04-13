import React from 'react'

const App = () => {

  localStorage.clear()

  localStorage.setItem('name', 'Aditya')
  localStorage.setItem('age', '22')

  const name = localStorage.getItem('name')
  const age = localStorage.getItem('age')

  console.log(name, age)

  localStorage.setItem('name', 'Jinwoo')
  const newName = localStorage.getItem('name')
  console.log(newName, age)

  localStorage.removeItem('age')

  const user = {
    name: 'Aditya',
    age: 22,
    city: 'Delhi'
  }

  localStorage.setItem('user', JSON.stringify(user))

  const users = JSON.parse(localStorage.getItem('user'))
  console.log(users)

  return (
    <div>App</div>
  )
}

export default App
