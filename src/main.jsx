import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider, ApolloClient, InMemoryCache,HttpLink} from"@apollo/client";
import Header from"./Header.jsx";
import {Data} from "./Data.jsx";
import fetch from 'cross-fetch' ; 
import Banner from  './Banner.jsx'; 
  import Todo from './Todo.jsx'; 
// import './index.css'




const client = new ApolloClient({

  link: new HttpLink({
    uri: 'http://localhost:4000/graphql',
    fetch,
  }),
  cache: new InMemoryCache()  
}); 


ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}> 
  <React.StrictMode>
      <Header/>
      <Todo/>
      <div className="main">

      </div>
  </React.StrictMode>
  </ApolloProvider>
); 



export default client; 
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

loadDevMessages();
loadErrorMessages();


