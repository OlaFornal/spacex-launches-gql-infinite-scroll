import {ApolloClient, InMemoryCache} from "@apollo/client";
import {offsetLimitPagination} from "@apollo/client/utilities";

const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                launchesPast: offsetLimitPagination(),
            },
        },
    },
});

export const getApolloClient = (ssr = false) => {
    return new ApolloClient({
        ssrMode: ssr,
        uri: 'https://api.spacex.land/graphql/',
        cache: cache
    });
};
