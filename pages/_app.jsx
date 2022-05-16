import 'tailwindcss/tailwind.css';
import MainLayout from '@/layouts/MainLayout';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider
} from "@apollo/client";

const client = new ApolloClient({
  uri: "https://charitybase.uk/api/graphql",
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Apikey ${process.env.CHARITYBASE_API_KEY}`,
  },
})

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || MainLayout;

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}
