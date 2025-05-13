import Link from "next/link";

export default function StudentInfo(){
    return(
    <main>
        <h1>Jan Kowal</h1>
        <Link
        className="hover:text-green-500 hover:underline"
        href="https://github.com/JanKowal05/cprg306-assignments"
        >https://www.github.com</Link>
    </main>
    );
}