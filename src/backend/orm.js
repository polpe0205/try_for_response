 



import{ PrismaClient} from '@prisma/client' 

const prisma = new PrismaClient() ;


async function  Orm( ) {
   const todos = await prisma.todo.findUnique({
    where: {
      id : 3,
    },
})

  console.log(todos);
  return todos ; 
}







Orm()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })


