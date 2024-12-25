import prisma from "@/app/lib/db"


export async function POST(req:Request) {
    try{
        const {username, password} = await req.json()
    await prisma.user.create({
        data:{
            username:username,
            password:password
        }
    }) 

    return new Response("User Signed Up on the app successfully", {status:200})
    }catch(err){
        return new Response("Unable to sign up right now try again later", {status:500})
    }
    

}