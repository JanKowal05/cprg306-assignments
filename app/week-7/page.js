"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";

export default function Page(){
    let itemsArray = itemsData.map((item)=>({...item}))
    const [items, setItems] = useState(itemsArray)

    const handleAddItem=(newItem)=>{
        setItems([...items, newItem])
    }

   return(
    <main className="bg-slate-950">
        <h1 className="text-3xl font-bold m-2">Shopping List</h1>
        <NewItem onAddItem={handleAddItem}/>
        <ItemList items={items}/>
    </main>
   );
}

  