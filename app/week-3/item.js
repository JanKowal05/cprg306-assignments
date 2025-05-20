export default function Item({item}){
    return(
        <li className="bg-slate-900 w-100 p-2 m-4">
            <h3 className="text-2xl font-bold">{item.name}</h3>
            <p>Buy {item.quantity} in {item.category}</p>
        </li>
    );
}