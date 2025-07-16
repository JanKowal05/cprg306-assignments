"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import { useState } from "react";
import MealIdeas from "./meal-ideas";
import { userUserAuth, useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

export default function Page(){
    const {user} = useUserAuth();

    console.log(user)


    let itemsArray = itemsData.map((item)=>({...item}))

    const [items, setItems] = useState(itemsArray)

    const handleAddItem=(newItem)=>{
        setItems([...items, newItem])
    }

    


    if (user){
        return(    
            <main className="bg-black">
                    <h1 className="text-4xl font-bold py-5 text-center">Shopping List</h1>
                    <NewItem onAddItem={handleAddItem}/>
                    <ItemList items={items}/>
                    <MealIdeas ingredient="chicken"/>
            </main>
        );
    }else{
        return(    
            <main className="bg-black m-2">
                    <h1 className="text-xl">Unauthorized User</h1>
                    <p>Please Log-in with your credentials!</p>
                    <Link href="/week-9/" className="bg-amber-700 p-1 mt-2 rounded hover:bg-amber-500">Back to log-in page</Link>

            </main>
        );
    }

}

  