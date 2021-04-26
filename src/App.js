// import Sessions from './components/globomantics/Sessions';
// import Speakers from './components/globomantics/Speakers';

import {ApolloClient, ApolloProvider, HttpLink, InMemoryCache} from '@apollo/client';
import Conferences from './components/globomantics/Conferences';

// Initialize Apollo Client
const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
        uri: 'http://localhost:4000/graphql' //graphql server url
    }),
    credentials: 'same-origin'
});

const App = () => (
        <ApolloProvider client={client}>
            <Conferences />
        </ApolloProvider>
    );

export default App;