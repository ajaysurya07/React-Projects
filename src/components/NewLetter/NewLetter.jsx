import React from 'react'
import "./NewLetter.css"
const NewLetter = () => {
  return (
    <main className="NewLetter">
         <h1>Get Exclusive Offers on your email</h1>
         <p>subscribe to our news letter ans stay updated</p>
         <div>
               <input type="email" 
               placeholder='Your Email Id'
               />
               <button>subscrilbe</button>
         </div>
    </main>
  )
}

export default NewLetter