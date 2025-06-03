"use client"

import { useState } from "react";

export default function NewItem(){
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1)
    const [category, setCategory] = useState("Produce")


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

        const enabledButton = "bg-emerald-800 m-1 w-15 font-bold rounded text-white hover:bg-emerald-500 hover:text-emerald-800 active:bg-emerald-800 active:text-white focus:border-2 focus:border-emerald-100"
        const disabledButton = "bg-emerald-700 m-1 w-15 font-bold rounded text-emerald-800";

        if(quantity == 1){
            if(!buttonIncrements){return disabledButton;}
        }
        if(quantity == 20){
            if(buttonIncrements){return disabledButton;} 
        }
        
        return enabledButton;
    }

    const handleSubmit =(event)=>{
        event.preventDefault();

        let item = {
            Name: name,
            Quantity: quantity,
            Category: category
        }

        console.log(item);

        alert(`
            Item Name: ${item.Name} 
            Quantity: ${item.Quantity} 
            Category: ${item.Category} 
        `);

        setName("");
        setQuantity(1);
        setCategory("produce");
    };



    return(
        <form onSubmit={handleSubmit} className="bg-teal-900 p-4 rounded">
            <div>
                <input type="text"required placeholder="Item Name" onChange={nameChangeHandler} value={name}/>
            </div>

            <div className="flex bg-emerald-600 text-black text-2xl m-3 rounded w-75 p-2">
                <div className="bg-emerald-100 border-2 border-emerald-700 rounded p-3 w-50">
                {quantity}
                </div>

                <button type="button" className={checkQuantity(false)+" ml-3"} onClick={decrement} >-</button>
                <button type="button" className={checkQuantity(true)} onClick={increment}>+</button>
            </div>

            <div>
                <select onChange={categoryChangeHandler} value={category}>
                    <option>Produce</option>
                    <option>Dairy</option>
                    <option>Bakery</option>
                    <option>Meat</option>
                    <option>Frozen Foods</option>
                    <option>Canned Goods</option>
                    <option>Dry Goods</option>
                    <option>Beverages</option>
                    <option>Snacks</option>
                    <option>Household</option>
                    <option>Other</option>
                </select>
            </div>
            
            <div>
                <button type="submit">Add to List</button>
            </div>
        </form>
    );
}