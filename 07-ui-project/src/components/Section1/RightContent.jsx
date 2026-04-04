import React from 'react'
import RightCard from './RightCard'


const RightContent = (props) => {

  console.log(props.users);
  
  return (
    <div id = 'right' className='h-full w-2/3 p-7 overflow-x-auto flex-nowrap rounded-4xl flex gap-8'>
      {props.users.map(function(elem, idx){

        return <RightCard key = {idx} id = {idx} img = {elem.img} tag = {elem.tag} color ={elem.color} />
      })}

        
    </div>
  )
}

export default RightContent