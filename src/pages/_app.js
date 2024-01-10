import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "../styles/global.css";
import * as Constant from "@/constant";

function MyApp({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <title>{Constant.titleApp}</title>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap"
                rel="stylesheet"
            />
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
