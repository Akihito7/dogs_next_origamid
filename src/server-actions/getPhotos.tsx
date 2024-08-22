'use server'
import { Photo } from "@/components/feed";
import { revalidateTag } from "next/cache";
import { cookies } from "next/headers"
import { UserType } from "./getUser";
const NAMETOKEN = "@dog:token"
const USER = "@dog:user"


export async function getPhotosFeed() {
  const token = cookies().get(NAMETOKEN)?.value
  const response = await fetch("https://dogsapi.origamid.dev/json/api/photo", {
    next: {
      revalidate: 100,
      tags: ['photos']
    },
    method: 'GET',
  });
  const data = await response.json();
  return data;
}


export async function getPhotosUser() {

  const token = cookies().get(NAMETOKEN)?.value
  if (!token) return {
    message: "Inválid token"
  };

  let Cookieuser = cookies().get(USER)?.value;
  const user: UserType = Cookieuser ? JSON.parse(Cookieuser) : null;

  if (!user) return []
  const response = await fetch("https://dogsapi.origamid.dev/json/api/photo", {
    next: {
      revalidate: 100,
      tags: ['photos']
    },
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  const data: Photo[] = await response.json();
  const photosFiltered = data.filter(item => item.author === user.nicename)
  return photosFiltered;
}

export async function revalidatePhotosFeedAction() {
  revalidateTag("photos")
}