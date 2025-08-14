"use server"
import {z} from 'zod'
import { redirect } from 'next/navigation'

const testUser = {
    id : 1,
    email : "something@gmail.com",
    password : "Password@123"
}