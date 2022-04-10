import React, { Component } from 'react'

export class Nabvar extends Component {
  render() {
    return (
      <div>
       
      <header className='bg-black  items-center ' >
          
          <ul className='flex p-5  text-center items-center  text-white '>
             <h1 className='text-2xl  font-bold'>Tech News </h1>
              <div className=' flex  mx-auto items-center justify-between  gap-5'> 

              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              </div>
          </ul>
      </header>

      </div>
    )
  }
}

export default Nabvar