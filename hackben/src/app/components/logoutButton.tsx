
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export default function LogoutButton(){

    async function LogoutAction(){
        'use server'

        cookies().get('Authorization') && cookies().delete('Authorization')

        return redirect('/')
    }
    return(
        <form action={LogoutAction}>
            <button type="submit" onClick={LogoutAction}>Logout</button>
        </form>
    )
}