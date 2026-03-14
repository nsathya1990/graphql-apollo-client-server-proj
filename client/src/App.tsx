import './App.css';
import {
  ApolloClient,
  CombinedGraphQLErrors,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client';
import { ErrorLink } from '@apollo/client/link/error';
import { ApolloProvider } from '@apollo/client/react';
import GetUsers from './components/GetUsers';
import Form from './components/Form';

const errorLink = new ErrorLink(({ error }) => {
  if (CombinedGraphQLErrors.is(error)) {
    error.errors.forEach(({ message, locations, path }) => {
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
      );
    });
  } else if (error) {
    console.log(`[Network error]: ${error.message}`);
  }
});

const link = from([
  errorLink,
  new HttpLink({
    uri: 'http://localhost:6969/graphql',
    credentials: 'include',
  }),
]);
const client = new ApolloClient({ cache: new InMemoryCache(), link });

function App() {
  return (
    <ApolloProvider client={client}>
      {/* <GetUsers /> */}
      <Form />
    </ApolloProvider>
  );
}

export default App;
