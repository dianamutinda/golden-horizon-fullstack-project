import { Router } from 'express';
import {PrismaClient} from '@prisma/client'
const router = Router();
const prisma = new PrismaClient;

router.post("/register", async (req, res) =>{
    try {
        const {firstName, lastName, email, phone, password} = req.body;
        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                password
            }
        })
        res.json(newUser)
    } catch (error) {
        res.status(500).json({successs:false, message:error.message})
    }
})

export default router;