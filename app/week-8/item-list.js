"use client"

import Item from "./item";
import { useState } from "react";

export default function ItemList( { items } ){
  let itemArray = items.map((item)=>({...item}))

  const [sortBy,setSortBy] = useState("name")

  const handleSortByChange = (event)=>{
    setSortBy(event.target.value);
  } 

  if (sortBy == "name"){
    itemArray.sort((itemA,itemB)=> {
      if(itemA.name < itemB.name) return -1;
      if (itemA.name > itemB.name) return 1;
      return 0;
    })
  }
  else if (sortBy == "category"){
    itemArray.sort((itemA,itemB)=> {
      if(itemA.category < itemB.category) return -1;
      if (itemA.category > itemB.category) return 1;
      return 0;
    })
  }

  const buttonStyleCheck=(buttonValue)=>{
    if (buttonValue == sortBy) return "bg-amber-600 ml-3 px-3 rounded hover:bg-amber-500"
    return "bg-slate-800 ml-3 px-3 rounded hover:bg-slate-700"
  }


  const groupedItems = itemArray.reduce((group, item)=>{

    const category = item.category //Get the item's category

    if (group[category]==null) group[category] = [] //Check if theres items in that category and create one if there isn't
   
    group[category].push(item) //Add the item to the group

    return group
  }, []) //{} is the initial value. An empty array

  let groups = Object.keys(groupedItems).sort()

return(
  <section>
      <header>
          <div className="flex px-5 py-3 bg bg-slate-900">
              <p>Sort by:</p>

              <button onClick={handleSortByChange} 
              value="name"
              className={buttonStyleCheck("name")}
              >Name</button>

              <button onClick={handleSortByChange} 
              value="category"
              className={buttonStyleCheck("category")}
              >Category</button>
{/* 
              <button onClick={handleSortByChange} 
              value="grouped-category"
              className={buttonStyleCheck("grouped-category")}
              >Grouped by Category</button> */}

          </div>
      </header>
      <div>
        {itemArray.map( (item)=> (
          <Item key={item.id} item={item}/>
        ))}     
      </div>
  </section>
);
}