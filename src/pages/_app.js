import * as React from 'react'
import { ChakraProvider, omitThemingProps } from "@chakra-ui/react";
import '../styles/global.css';

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap" rel="stylesheet" />
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
