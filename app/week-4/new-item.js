"use client"

import { useState } from "react";

export default function NewItem(){
    const [quantity, setQuantity] = useState(1)


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

    const buttonStyles = "bg-"

    return(
        <div className="bg-slate-500 text-black m-3 rounded w-50">
            {quantity}
            <button 
            className={buttonStyles} 
            onClick={decrement}>-</button>

            <button
            className={buttonStyles}
            onClick={increment}>+</button>
        </div>
    );
}