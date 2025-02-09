import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider, ApolloClient, InMemoryCache,HttpLink} from"@apollo/client";
import Header from"./other/Header.jsx";
import fetch from 'cross-fetch' ;
import "./site.css";
import Timer from "./Timer.jsx";
import Clock from "./Clock.jsx";

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
      <Clock/>
      <Timer/>
  </React.StrictMode>
  </ApolloProvider>
); 



export default client; 
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";

loadDevMessages();
loadErrorMessages();


