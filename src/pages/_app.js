import * as React from "react";
import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import "../styles/global.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Loading from "@/component/loading"
import Head from "next/head";
import * as Constant from "@/constant";

function MyApp({ Component, pageProps }) {
    const LoadingLayout = Loading(Component);

    return (
        <ChakraProvider>
            <Head>
                <title>{Constant.appName}</title>
            </Head>
            <LoadingLayout {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;




