import React, { useState } from 'react'

const App = () => {

  const [title, settitle] = useState("")
  const [details, setdetails] = useState("")

  const [task, settask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(title,details);

    const copytask = [...task];

    copytask.push ({title, details});

    settask(copytask);

    console.log(task);
    

    setdetails("");
    settitle("");
  }

  const deleteNote = (idx) => {
    const copytask = [...task];
    copytask.splice(idx, 1);
    settask(copytask);
  }

  return (
    <div className='h-screen lg:flex bg-black text-white'>
      
      <form onSubmit = {(e) => {
        submitHandler(e)
      }} className='flex lg:w-1/2 p-10 items-start flex-col gap-4'>

        <h1 className='text-4xl mb-2 font-bold'>Add Notes</h1>

        {/* PEHLA INPUT FOR HEADING */}
        <input type="text" placeholder='Enter Notes Heading' className='px-5 w-full py-2 border-2 rounded font-medium' value={title} onChange = {(e) => {
          settitle(e.target.value)
        }}></input>


        {/* DETAIL INPUT */}
        <textarea type='text' placeholder='Write Details' className='px-5 h-35 py-2 border-2 w-full items-start flex flex-row rounded' value={details} onChange={(e) => {
          setdetails(e.target.value);
        }}></textarea>

        <button className='bg-white w-full text-black px-5 py-2 font-medium active:scale-99 rounded'>Add Note</button>
      </form>

      <div className='lg:w-1/2 lg:border-l-2 p-10'>
        <h1 className='text-3xl font-bold'>Recent Notes</h1>
        <div className='flex flex-wrap items-start gap-4 mt-5 justify-start overflow-auto h-[90%]'>
          {task.map(function(elem,idx){
            return <div key={idx} className="h-52 w-40 flex flex-col justify-between relative rounded-xl bg-cover px-4 py-6 text-black bg-[url('https://images.pexels.com/photos/7965804/pexels-photo-7965804.jpeg')]">
              <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
              <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
              <button onClick={() => deleteNote(idx)} className='mt-4 bg-red-500 text-white px-4 py-1 rounded'>Delete</button>
            </div>

          })}

        </div>
      </div>
    </div>
  )
}

export default App
