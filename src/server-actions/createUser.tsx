'use server'

type CreateUserParams = {
    username: string;
    email: string;
    password: string;
}
export async function createUser(user: CreateUserParams) {
    const response = await fetch("https://dogsapi.origamid.dev/json/api/user/", {
        method : 'POST',
        body: JSON.stringify(user)
    })

}