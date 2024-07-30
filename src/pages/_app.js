import "@/styles/globals.css";
import Head from "next/head";
import { Fragment } from "react";
import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();
export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <title>Event Management App</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
        <ReactQueryDevtools style={{ fontFamily: "SF Mono" }} initialIsOpen={false} />
      </QueryClientProvider>
    </Fragment>
  );
}
