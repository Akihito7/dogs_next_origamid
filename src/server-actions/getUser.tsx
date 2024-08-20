'use server'

import { cookies } from "next/headers"
import { redirect } from "next/navigation";

export type UserType = {
  email : string;
  nicename : string;
  displayName : string;
}

const NAMETOKEN = "@dog:token"
const USER = "@dog:user"

export async function GetUser(){
  const user  = cookies().get(USER)?.value;
  if(user) return JSON.parse(user) as UserType;
}


export async function Logout(){
  cookies().delete(USER)
  cookies().delete(NAMETOKEN)
  redirect("/login")
}
