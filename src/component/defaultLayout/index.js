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
        <Box>
            <Container
                maxW="3xl"
                centerContent
                height="100vh"
                padding="10"
                justifyContent={'center'}
            >
                {body}
            </Container>
        </Box>
    );
}

export default DefaultLayout;
