'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type DataType = {
  token : string;
  user_email : string;
  user_nicename : string;
  user_display_name : string
}

const NAMETOKEN = "@dog:token"

export async function login(username : string, password : string){

  const response = await fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
    method : 'POST',
    headers : {
      'Content-Type' : "application/json"
    },
    body : JSON.stringify({
      username,
      password
    })
  })
  
  if(!response.ok) return "Inválid credentials"

  const data : DataType = await response.json();

  cookies().set(NAMETOKEN, data.token, {
    httpOnly : true,
    secure : true
  });

  redirect("/")
}