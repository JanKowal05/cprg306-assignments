import { db } from "../_utils/firebase";
import { collection, getDocs, addDoc, query, deleteDoc } from "firebase/firestore";

export async function getItems(userId){
    const ref = collection(db,"users", userId, "items")
    const docs = await getDocs(ref);

    console.log(docs)

    const items = [];

    docs.forEach((doc)=>(
        items.push(doc.data()),
        console.log(doc.data())
    ));

    return items;
}

export function addItem(userId, item){
    const itemsRef = collection(db,"users",userId,"items")
    const docRef = addDoc(itemsRef,item);
    
    return docRef.id;
}