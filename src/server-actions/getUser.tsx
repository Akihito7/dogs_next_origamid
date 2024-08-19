'use server'

import { cookies } from "next/headers"

export type UserType = {
  email : string;
  nicename : string;
  displayName : string;
}

const USER = "@dog:user"

export async function GetUser(){
  const user  = cookies().get(USER)?.value;
  if(user) return JSON.parse(user) as UserType;
}
