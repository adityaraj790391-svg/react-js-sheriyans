import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [data, setData] = useState([])

  async function getData () {
      const response = await fetch('https://jsonplaceholder.typicode.com/users')

      const data = await response.json()
      console.log(data)
      }

      const getdata = async () => {
      const responsee = await axios('https://jsonplaceholder.typicode.com/albums')
      console.log(responsee.data)
      setData(responsee.data)
      }

  return (
    <div>
      <button onClick={getData}>Click me</button>
      <button onClick={getdata}>Click me</button>
      <div>
        {data.map(function(elem,idx) {
          return <h1 key={idx}>{elem.title}</h1>
        })}
      </div>
    </div>
  )
}

export default App
