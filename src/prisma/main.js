
import { PrismaClient } from"@prisma/client";
import { ApolloServer, gql  } from"apollo-server";

const prisma = new PrismaClient();





const typeDefs = `
  type try1{ 
    id : Int
    message: String
    status: Boolean
  }

  type Query {
    alltry1: [try1!]
  } 


`;

const resolvers = {
  Query: {
    alltry1: async () => await prisma.try1.findMany()
  },


}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {prisma}, 

});

server.listen({ port:4000 }).then(({ url}) => {
  console.log(`server ready at ${url}`);
});










//export default schema;















/*
const message = await prisma.try1.findMany({
  where: {
    status : false,
  },
  select: {
    message: true, 
  }
})







/*
async function  todos() {
  return (await prisma.try1.findMany());
}

/*
async function main() {
  await prisma.try1.create({
    data: {
      id: 3,
      message: "fava",
      status: false 
    }
  })

  

  
}
*/


























