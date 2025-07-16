"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page(){
    const {user, gitHubSignIn, firebaseSignOut} = useUserAuth();

    console.log(user)


    return(
        <div className="p-2">
            <h1 className="text-2xl">Log-In</h1>

            {user ? (
                <p className="p-1 mb-2">

                Welcome, {user.displayName}!<br/>

                <i>({user.email})</i><br/>
                </p>
            ):(
                <p className="p-1 mb-2">Unauthorized user</p>
            )}
        
        
            <div className="">
                    
                {user ? (
                    <button onClick={firebaseSignOut} className="p-1 bg-red-500 rounded text-white hover:bg-red-300">Sign Out</button>
                ):(
                    <button onClick={gitHubSignIn} className="p-1 bg-green-500 rounded text-black hover:bg-green-300">Sign In</button>
                )}

                {user && 
                <Link href="week-10/shopping-list" className="bg-cyan-800 rounded p-1 ml-2 hover:bg-cyan-600">Go to shopping list</Link>
                }
            </div>
        </div>
    );
}
