import { auth } from "@clerk/nextjs/server"

const adminIds = ["user_2jWYEcJiLm9Jgpq4jOrqQJXSz3F",]

export const isAdmin = () => {
    const {userId} = auth();

    if(!userId){
        return false
    }

    return adminIds.indexOf(userId) !== -1
}