
import {makeExecutableSchema} from "@graphql-tools/schema" ; 
import {PrismaClient} from "@prisma/client"; 

const prisma =  new PrismaClient(); 












































/*

const typeDefs = [
`

  type Todo {
    id: String!
    task: String! 
    date: String!
    status: Boolean! 

  }
  type Query {
    todos: [Todo]
    todo(id:String!): Todo 
  
  }
  schema {
  query: Query
   
}

`
]


const resolvers  = {
  Query : {
    allTodo: () => prisma.Todo.findMany(); 

  }
};




const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});




export default schema;





































/*
const TodoType = new GraphQLObjectType({
  name:"todo",
  fields:() => ({
    id:{type:GraphQLInt}, 
    task:{type:GraphQLString},
    status:{type:GraphQlBoolean} 
    
  })
});

const RootQuery = new GraphQLObjectType({
  name:"rootQuerry", 
  fields:  {
    Todo:{
      type: TodoType,
      args:{id:{type:GraphQLInt}},
      resolve(parent, args){
        // resolve code 
        return _.find(Todo,{id:args.id});

      }

    }

  }
});


module.exports = new GraphQLSchema({
  query:RootQuery

});


*/















