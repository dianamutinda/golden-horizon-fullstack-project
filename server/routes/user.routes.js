import { Router } from 'express';
import {PrismaClient} from '@prisma/client'
import bcrypt from 'bcrypt'
const router = Router();
const prisma = new PrismaClient;

router.post("/register", async (req, res) =>{
    try {
        const {firstName, lastName, email, phone, password} = req.body;

        if (!firstName) return res.status(400).json({success:false, message:"firstName is required"})
        if (!lastName) return res.status(400).json({success:false, message:"lastName is required"})
        if (!email) return res.status(400).json({success:false, message:"email is required"})
        if (!phone) return res.status(400).json({success:false, message:"phone is required"})
        if (!password) return res.status(400).json({success:false, message:"password is required"})




        const hashedPassword =  bcrypt.hashSync(password, 10)
        const newUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                email,
                phone,
                password:hashedPassword
            }
        })
        res.status(201).json({success:true, message: "user registered successfully"})
    } catch (error) {
        res.status(500).json({success:false, message:error.message})
    }
})

export default router;