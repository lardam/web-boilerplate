"use client"

import { LogOut } from "lucide-react"
import { signOut } from "next-auth/react"
import { AuthError } from "next-auth"
 
export default function SignOut() {
  return (
    <div className="" onClick={async () => signOut()} >
        <LogOut />
    </div>
  )
}