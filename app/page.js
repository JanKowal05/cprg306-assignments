import Link from "next/link";

export default function Home(){
  return(
    <main>
      <h1 className="text-2xl align">CPRG 306: Web Development 2 - Assignments</h1>
      <ul>
        <li><Link className="hover:text-green-400 hover:underline" href="/week-2/">Week 2 Assignment</Link></li>
        <li><Link className="hover:text-green-400 hover:underline" href="/week-3/">Week 3 Assignment</Link></li>    
      </ul>
     </main>
  );
}