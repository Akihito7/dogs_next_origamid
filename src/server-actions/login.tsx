'use server'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type DataType = {
  token: string;
  user_email: string;
  user_nicename: string;
  user_display_name: string
}

const NAMETOKEN = "@dog:token"
const USER = "@dog:user"

export async function login(username: string, password: string) {

  const response = await fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token", {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify({
      username,
      password
    })
  })

  if (!response.ok) return "Inválid credentials"

  const data: DataType = await response.json();

  cookies().set(NAMETOKEN, data.token, {
    httpOnly: true,
    secure: true
  });

  const user = {
    email: data.user_email,
    nicename: data.user_nicename,
    displaName: data.user_display_name
  }

  cookies().set(USER, JSON.stringify(user), {
    httpOnly: true,
    secure: true
  })

  redirect("/")
}

export async function verifyToken(token: string) {
  const response = await fetch("https://dogsapi.origamid.dev/json/jwt-auth/v1/token/validate", {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify(token)
  })

  const isValid = await response.json();
  return isValid
}


export async function lostPassword(login: string, urlLost: string) {
  const response = await fetch("https://dogsapi.origamid.dev/json/api/password/lost",
    {
      method: 'POST',
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        login,
        url: urlLost
      })
    }
  )
  return response.ok
}

export async function resetPassword(form: FormData) {
  const response = await fetch("https://dogsapi.origamid.dev/json/api/password/reset", {
    method: 'POST',
    body: form
  })
  if (!response.ok) return false
  return true;
}