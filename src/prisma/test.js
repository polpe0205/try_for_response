
import { PrismaClient } from "@prisma/client"  ; 

const prisma = new PrismaClient() ; 

const usr =  await  prisma.usr.create({
  data: {
    name : "polpe",
    password: "fava"
  }, 
})
