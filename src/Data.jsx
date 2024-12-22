

import { makeExecutableSchema } from '@graphql-tools/schema';
import { gql, useQuery} from "@apollo/client"; 
import React from 'react'; 

const GET_ALL = gql `
  query  all {
    alltry1 {

      id 
      message 
      status 
  }
}


`;



export function Data() { 
    const {loading, error, data } = useQuery(GET_ALL); 
    if (loading) return <p>loading ... </p>;
    if (error) return <p> Error: {error.message}</p>;
    console.log(data.alltry1.message);

    return( 
      <div>
        
      {data.alltry1.map(try1 => (
        <h3>{try1.message}</h3>


      ))}

      </div>


    )


}

































/*
import {react} from "react" ; 
import {gql, useQuery} from "@apollo/client";  
let a ; 

const GRAPHQL_URL = 'http://localhost:9000/';








export function  Data() {
  const {data, loading , error} = useQuery(GREETING);
  
  if (loading) return "is loading..." ; 
  if (error) return <pre>{error.message}</pre>




  return (
  <div>
    <p>{data.greeting}</p>
  </div>

  );

}


export const GREETING   = gql  ` {
    greeting
}
 `;





const typeDefs = `
  type try1 {
    id: Integer!
    message: String
    statud: Boolean
  }

  type Query {
    message: [try1!]!
  }
`;

const resolvers = {
  Query: {
    message: () => {
      return prisma.try1.findMany();
    }
  }
};

export const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

const app = express();
app.use('/graphql', graphqlHTTP({
  schema,
}));

app.listen(4000);


export async function Data() {



  return <p></p>;

}










































/*
function  Resp() { 
  Fetch().then(({ greeting}) => {
    a =  greeting ; 
  })
  return(a) ; 

}
*/



/*
export async function Fetch() {
  fetch (GRAPHQL_URL, {
    method: 'POST ' ,
    headers: {'content-type': 'application/json'},
    body: JSON.stringify({
      query:   `{
          greeting

      } `


    })
  }
)}



*/














/*
export async function Fetch() {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: `
        query {
          greeting
        }
      `,
    }),
  });

  const { data } = await response.json();
  return data;
}

*/







/*
Fetch().then(({ greeting }) => {
  const title = document.querySelector('h1');
  title.textContent = greeting;
});




*/
















/*



const GRAPHQL_URL = "http://localhost:9000/"; 

async function Fetch() {
  
  const response = await fetch(GRAPHQL_URL), {
    method: 'POST', 
    headers : {
      'content-type'  : 'application/json',
      
    }
    body: JSON.stringify({
      query: `
        query {
           greeting
        } 
      `,
    });
  }
  const responseBody=  await response.json(); 
  console.log(responseBody); 



}

Fetch(); 

export default Fetch ; 






*/





































