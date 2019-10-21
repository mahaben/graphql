import ApolloClient from 'apollo-client';
import fetch from 'cross-fetch';
import 'cross-fetch/polyfill'; // polyfill for TS
import { ApolloLink } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

async function tasks() {
  setInterval(() => {
    const startingDate = new Date();
    console.log('query tasks...');
    const httpUri = 'http://localhost:4000';
    const client = new ApolloClient({
      link: ApolloLink.from([
        new HttpLink({
          fetch,
          uri: httpUri,
        }),
      ]),
      cache: new InMemoryCache(),
    });

    client
      .query({
        query: gql`
          query {
            fetchTasks {
              title
            }
          }
        `,
      })
      .then(data => {
        console.log('got fetchTasks.length:', data.data.fetchTasks.length);
        console.log(
          'processing time:',
          new Date().getTime() - startingDate.getTime(),
        );
      })
      .catch(error => console.error('got error:', error));
  }, 10 * 1000);
}

tasks();
