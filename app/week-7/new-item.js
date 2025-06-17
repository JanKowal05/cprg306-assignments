"use client"

import { useState } from "react";

export default function NewItem({ onAddItem }){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory] = useState("produce")


    const nameChangeHandler=(event)=>{setName(event.target.value)}
    const categoryChangeHandler=(event)=>{setCategory(event.target.value)}

    const increment = () =>{
        if (quantity < 20){
            setQuantity(quantity + 1);
        }
    }

    const decrement = () =>{
        if (quantity > 1){
            setQuantity(quantity - 1);
        }
    }

    const checkQuantity = (buttonIncrements) =>{
        //if buttonAction is to increment and quantity is 20 => disable increment button
        //if buttonAction is to decrement and quantity is 1 => disable decrement button

        const enabledButton = "bg-amber-600 m-1 w-10 h-10 font-bold rounded text-white hover:bg-amber-500 active:bg-amber-700"
        const disabledButton = "bg-slate-800 m-1 w-10 h-10 font-bold rounded text-slate-600";

        if(quantity == 1){
            if(!buttonIncrements){return disabledButton;}
        }
        if(quantity == 20){
            if(buttonIncrements){return disabledButton;} 
        }
        
        return enabledButton;
    }


    //Define possible characters for ID
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";
    
    const generateId=(length)=>{
        let generatedString = "" //Initialize the ID
 
        for(let i=0; i<length;i++){
            // This loop will pick a random character from 'chars',
            // and add it to the 'generatedString' for the length specified.

            let rand = Math.floor(Math.random() * chars.length)

            generatedString += chars[rand]
        }

        return generatedString; //Return the generated ID
    }


    const handleSubmit =(event)=>{
        event.preventDefault();

        let item = {
            id: generateId(16),
            name: name,
            quantity: quantity,
            category: category
        }

        console.log(item);

        onAddItem(item)

        /*
        alert(`
            Item Name: ${item.Name} 
            Quantity: ${item.Quantity} 
            Category: ${item.Category} 
        `);
        */

        setName("");
        setQuantity(1);
        setCategory("produce");
    };



    return(
        <section className="flex items-center justify-center mb-5">
            <form onSubmit={handleSubmit} className="bg-slate-900 p-4 rounded">
                <div className="mb-3">
                    <input type="text" required placeholder="Item Name"
                    onChange={nameChangeHandler} value={name}
                    className="bg-white rounded border border-slate-200 text-black w-full p-2"/>
                </div>
                

                <div className="flex mb-3 w-100">
                    <div className="flex bg-slate-800 text-black rounded w-75 p-2 mr-3">
                        <div className="bg-white border-2 border-slate-700 rounded p-2 w-30">{quantity}</div>
                        <button type="button" className={checkQuantity(false)+" ml-3"} onClick={decrement} >-</button>
                        <button type="button" className={checkQuantity(true)} onClick={increment}>+</button>
                    </div>

                    <div>
                        <select className="h-16 bg-slate-800 rounded text-white p-2" onChange={categoryChangeHandler} value={category}>
                            <option>produce</option>
                            <option>dairy</option>
                            <option>bakery</option>
                            <option>meat</option>
                            <option>frozen foods</option>
                            <option>canned goods</option>
                            <option>dry goods</option>
                            <option>beverages</option>
                            <option>snacks</option>
                            <option>household</option>
                            <option>other</option>
                        </select>
                    </div>
                </div>
                
                
                <div>
                    <button type="submit" className="w-full text-2xl font-bold p-2 bg-amber-600 rounded hover:bg-amber-500 active:bg-amber-700">Add to List</button>
                </div>
            </form>
        </section>
    );
}