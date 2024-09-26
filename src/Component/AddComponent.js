import React from "react"
import './AddComponent.css'
import {useState} from "react";
import Body from "./body";



function AddComp() {

    const [addtripinput, setAddtripinput] = useState('')
    const [addtrip, setAddtrip] = useState([])
    const [inpNum, setInpNum] = useState(0);
    const [sort,setSort] = useState("order")

    function addTripinput(e) {
            setAddtripinput(e.target.value)
    }

    function addTrip() {
        if (addtripinput.trim().length === 0){
            return;
        }
        // const trip1 = {inpNum, addTripinput}
        setAddtrip([...addtrip, {id: Date.now(), inpNum, addtripinput, packed: false}])
        setAddtripinput('')
    }

    function Clear(){
        console.log("Clear clicked ")
        setAddtrip([])

    }

    function setNumber(event) {
        setInpNum(event.target.value)
    }

    function Sort(event) {
        setSort(event.target.value)
    }

    return(
        <div className='rectangle1'>
            <h2>What do you need for your trip?
                <input className='inputnamber' value={inpNum} onChange={setNumber} type='number'/>
                <input className='oval-input' value={addtripinput} onChange={addTripinput} placeholder='Item..'/>
                <button className='oval-button' onClick={addTrip}>ADD</button>
            </h2>
            <Body trip={addtrip}  setItem={setAddtrip} sort={sort}/>
            <select className='oval-option' onChange={Sort}>
                <option value='order'>SORT BY INPUT ORDER</option>
                <option value='packed'>SORT BY PACKED STATUS</option>
            </select>
            {addtrip.length !== 0 && (
                <button onClick={Clear} className='oval1-button'>CLEAR LIST</button>
            )}

        </div>
    )
}

export default AddComp;