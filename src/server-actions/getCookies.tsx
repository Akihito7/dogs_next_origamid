'use server'

import { cookies } from "next/headers";

const NAMETOKEN = "@dog:token"
export async function getCookies(){
  const token = cookies().get(NAMETOKEN)?.value
  return token;
}