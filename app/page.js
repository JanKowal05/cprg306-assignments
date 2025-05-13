import Link from "next/link";

export default function Home(){
  return(
    <main>
      <h className="text-2xl align">CPRG 306: Web Development 2 - Assignments</h>
      <br/>
      <Link 
      className="hover:text-green-400 hover:underline"
      href="/week-2/"
      >Week 2 Assignment</Link>
    </main>
  );
}