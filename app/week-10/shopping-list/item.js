export default function Item({item}){
    return(
        <div className="bg-slate-900 p-2 m-4 w-100">
            <h3 className="text-2xl font-bold">{item.name}</h3>
            <p>Buy {item.quantity} in {item.category}</p>
        </div>
    );
}