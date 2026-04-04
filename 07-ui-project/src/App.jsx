import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {img:'https://images.pexels.com/photos/8133893/pexels-photo-8133893.jpeg',
     color: 'lightblue',
     intro:'',
     tag:'Satisfied'
    },
    {img:'https://images.pexels.com/photos/5717546/pexels-photo-5717546.jpeg',
     color: 'lightgreen',
     intro:'',
     tag:'Undeserved'
    },
    {img:'https://images.pexels.com/photos/9040288/pexels-photo-9040288.jpeg',
     color: 'yellow', 
     intro:'',
     tag:'Underbanked'
    },
    {img:'https://images.pexels.com/photos/6964327/pexels-photo-6964327.jpeg',
     color: 'aqua', 
     intro:'',
     tag:'Unbanked'
    },
    {img:'https://images.pexels.com/photos/8278965/pexels-photo-8278965.jpeg',
     color: 'pink', 
     intro:'',
     tag:'Average'
    }
  ]
  return (
    <div>
      <Section1 users = {users} />
      <Section2 />
    </div>
  )
}

export default App