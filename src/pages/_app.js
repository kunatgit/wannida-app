import * as React from "react";
import { Center, ChakraProvider, Spinner } from "@chakra-ui/react";
import "../styles/global.css";
import * as Constant from "@/constant";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Loading from "@/component/loading"

function MyApp({ Component, pageProps }) {
    const LoadingLayout = Loading(Component);

    return (
        <ChakraProvider>
            <Head>
                <title>{Constant.titleApp}</title>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap"
                    rel="stylesheet"
                />
            </Head>
            <LoadingLayout {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;




