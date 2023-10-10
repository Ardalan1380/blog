import React from 'react';
import ReactDOM from 'react-dom/client';
import { ApolloProvider , ApolloClient , InMemoryCache} from '@apollo/client';
import { ThemeProvider } from '@mui/material';
import them from './mui/them';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './style/index.css'
import './style/fonts.css'


const client = new ApolloClient({
  uri :  process.env.REACT_APP_GRAPHCMS_URI,
  cache : new InMemoryCache()
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
    <ThemeProvider theme={them}>
    <App />
    </ThemeProvider>
    </BrowserRouter>
  </ApolloProvider>
);