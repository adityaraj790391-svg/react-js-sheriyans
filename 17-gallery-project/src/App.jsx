import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card';

const App = () => {

  const [userData, setuserData] = useState([]);


  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)

    setuserData(response.data);
    console.log(response.data);
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData = <h1 className='text-xl font-bold'>No User Available</h1>

  if(userData.length>0) {
    printUserData = userData.map(function(elem,idx){

      return <div key = {idx}>
       <Card elem={elem}/>
      </div>

    })
  }

  return (
    <div className='bg-black h-screen p-4 overflow-auto text-white'>
      <h1 className='fixed bg-green-300 text-4xl'>{index}</h1>
      {/* <button onClick={getData}
      className='bg-cyan-400 active:scale-90 mb-3 px-5 py-2 rounded text-white '> Get Data </button> */}

      <div className='flex flex-wrap gap-4'> 
        {printUserData}
      </div>

      <div className='flex justify-center gap-6 items-center p-4'>
        <button className='bg-amber-300 text-sm cursor-pointer active:scale-90 text-black rounded px-4 py-2 font-semibold' onClick={() => {
          if(index>1) {
            setIndex(index-1)
          }
        }}>Prev</button>

        <h3> Page {index} </h3>
         <button className='bg-amber-300 text-sm cursor-pointer active:scale-90 text-black rounded px-4 py-2 font-semibold' onClick={() => {
            setIndex(index+1)
          }}> Next </button>
      </div>
    </div>
  )
}

export default App

