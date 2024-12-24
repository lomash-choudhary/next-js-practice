import { PrismaClient } from "@prisma/client";

export async function ShowUsers(){
    const prismaClient = new PrismaClient
    const data = await prismaClient.user.findMany()

    return (
        <div>
            {data.map((item):any => (
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