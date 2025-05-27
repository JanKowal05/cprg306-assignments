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
    



    return(
        <div className="flex bg-emerald-600 text-black text-2xl m-3 rounded w-75 p-2">
            <div className="bg-emerald-100 border-2 border-emerald-700 rounded p-3 w-50">
               {quantity}
            </div>

            <button
            className={checkQuantity(false)+" ml-3"}
            onClick={decrement}>-</button>

            <button 
            className={checkQuantity(true)}
            onClick={increment}>+</button>

    
        </div>
    );
}