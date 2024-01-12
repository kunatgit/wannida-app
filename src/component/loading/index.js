import * as React from "react";
import { Center, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import * as Constants from "@/constant";

const Loading = (WrappedComponent) => {
    return (props) => {
        const [loading, setLoading] = useState(true);

        useEffect(() => {
            const timeout = setTimeout(() => {
                setLoading(false);
            }, 500);

            return () => clearTimeout(timeout);
        }, []);

        return loading ? (
            <Center height="100vh">
                <Spinner size="xl" color={Constants.colorTheme600} />
            </Center>
        ) : <WrappedComponent {...props} />;
    };
};

export default Loading;