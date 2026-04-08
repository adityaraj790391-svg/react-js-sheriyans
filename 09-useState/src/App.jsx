import React, { useState } from 'react'

const App = () => {

  const [num, setnum] = useState(10)
  const [username, setusername] = useState('Sarthak')
  const [users, setusers] = useState([10,20,30])

  const [nums, setnums] = useState(0)

  function changeNum() {
    setnum(20);
    setusername('Jinwoo')
    setusers([40,50,60])
  }

  function increaseNum() {
    setnums(nums+1)
  }

  function decreaseNum() {
    setnums(nums-1)
  }

  function jump5Num() {
    setnums(nums+5)
  }

  return (
    <div>
      <h1>Value of num is {num} <br /> {users} <br /> Value of user is {username} </h1>
      <button onClick={changeNum}>Click</button>
      <h1>{nums}</h1>
      <button onClick={increaseNum}> Increase </button>
      <button onClick={decreaseNum}> Decrease </button>
      <button onClick={jump5Num}> Increase by 5 </button>
    </div>
  )
}

export default App