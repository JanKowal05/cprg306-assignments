"use client"

import Item from "./item";
import itemData from "./items.json";

import { useState } from "react";

export default function ItemList(){
  let itemArray = itemData.map((item)=>({...item}))

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

          </div>
      </header>
      <div>
          {itemArray.map( (item)=> (
              <Item key={item.id} item={item}/>
          ) )}
      </div>
  </section>
);
}