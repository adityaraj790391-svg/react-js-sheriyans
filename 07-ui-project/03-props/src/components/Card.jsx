import React from 'react'

const Card = (props) => {

    console.log(props);

    console.log(props.user, props.age);

  return (
        <div className='card'>
        <img src = {props.img} ></img>
        <h1> {props.user}, {props.age} </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit beatae.</p>
        <button> View profile </button>
      </div>
  )
}

export default Card
