import prisma from "@/app/lib/db"
import { User } from "@prisma/client"

export async function ShowUsers(){
    // const prismaClient = new prisma
    const data: User[] = await prisma.user.findMany()

    return (
        <div>
            {data.map((item) => (
                <div className="text-white" key={item.id}>
                    <div className="flex gap-4">
                        {item.id}.
                        {item.username}
                    </div>
                </div>
            ))}
        </div>
    )
}