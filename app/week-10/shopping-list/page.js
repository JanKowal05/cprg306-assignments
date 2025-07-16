"use client"

import ItemList from "./item-list";
import NewItem from "./new-item";
import { useState, useEffect } from "react";
import { userUserAuth, useUserAuth } from "../_utils/auth-context";
import Link from "next/link";
import { getItems, addItem } from "../_services/shopping-list-service";


export default function Page(){
    const {user} = useUserAuth();
    const [items, setItems] = useState([])
   
    async function loadItems(){
        const userId = await user.uid;
        const fetchedItems = await getItems(userId);
        setItems(fetchedItems);
    }

    useEffect( ()=>{
        if (user){
            loadItems()
        }
    },[user]);

    const handleAddItem=(newItem)=>{
        addItem(user.uid, newItem)
        setItems([...items,newItem])
    }

    if(user){
        return(
            <main className="bg-black">
                <h1 className="text-4xl font-bold py-5 text-center">Shopping List</h1>
                <NewItem onAddItem={handleAddItem}/>
                <ItemList items={items}/>
            </main>
        );
    }else{
        return(
            <main className="bg-black m-2">
                <h1 className="text-xl">Unauthorized User</h1>
                <p>Please Log-in with your credentials!</p>
                <Link href="/week-10/" className="bg-amber-700 p-1 mt-2 rounded hover:bg-amber-500">Back to log-in page</Link>
            </main>
        );
    }

    //let itemsArray = itemsData.map((item)=>({...item}))
    //const [items, setItems] = useState(itemsArray)
}

  