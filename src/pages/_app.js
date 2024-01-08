import Navbar from "@/component/navbar";
import * as React from 'react'
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }) {
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;700&display=swap" />
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
