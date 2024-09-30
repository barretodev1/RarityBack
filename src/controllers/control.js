import prisma from '../server.js'

export const createUser = async (req,res) => {
    try {
        const user = req.body
        const userDB = await prisma.user.create({
            data: {
                name: user.name,
                email: user.email,
                cell: user.email,
                service: user.email,
                message: user.message
            }
        })
        res.status(201).json(userDB)
    } catch (error) {
        res.status(400).json(error)
    }
} 

