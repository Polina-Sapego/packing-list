import React from "react"
import './body.css'
import {useState} from "react";




function Body({trip, setItem, sort}) {

    const shiftRight = trip.length / 2




        const handleCheckboxChange = (id) => {
        const checkbox = trip.map((item, index) => {
             if( item.id === id){

                return {...item, packed: !item.packed }

             }
                return item
         })
            setItem(checkbox)
        };



    function handleChange(id){
     setItem(trip.filter((item) => item.id !== id))

    }

    let sortedtrip = []
    if (sort === "order"){
        sortedtrip = trip
    }
    else if (sort === "packed"){
       sortedtrip = trip.sort((a, b) => a.packed - b.packed)

    }

 return(
     <div>
         <ul className="body column-list">



             {sortedtrip.map((item, index) => (
                 <label >
                     <h1 key={item.id}
                         className={shiftRight ? "column-list-item shift-right" : 'column-list-item'}>
                         <input
                             className='checkbox'
                             type="checkbox"
                             checked={item.packed}
                             onChange={() => handleCheckboxChange(item.id)}
                         />
                         <button onClick={() => handleChange(item.id)} className='delute'>❌</button>
                    <p className={item.packed ? 'check' : ''}>{item.inpNum} {item.addtripinput}</p>
                     </h1>
                 </label>

             ))}

         </ul>

     </div>
 )
}

export default Body;