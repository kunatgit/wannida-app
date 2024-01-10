import * as Constants from "@/constant";
import {
    Box,
    Center,
    Container,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Text,
    VStack,
} from "@chakra-ui/react";

function DefaultLayout({ body }) {
    return (
        <Box bg="blue.100">
            <Container
                maxW="3xl"
                centerContent
                height="100vh"
                bg="white"
                padding="10"
                justifyContent={'center'}
            >
                {body}
            </Container>
        </Box>
    );
}

export default DefaultLayout;
