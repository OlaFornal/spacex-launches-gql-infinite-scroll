import '../styles/globals.css'
import type {AppProps} from 'next/app'
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider
} from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                launchesPast: offsetLimitPagination(),
            },
        },
    },
});

const client = new ApolloClient({
    uri: 'https://api.spacex.land/graphql/',
    cache: cache
});

function MyApp({Component, pageProps}: AppProps) {
    return (
        <ApolloProvider client={client}>
            <Component {...pageProps} />
        </ApolloProvider>
    )
}

export default MyApp
