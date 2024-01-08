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
        <Box bg={Constants.colorTheme}>
            <Container
                maxW="2xl"
                centerContent
                height="100vh"
                bg="white"
                padding="10"
            >
                {body}
            </Container>
        </Box>
    );
}

export default DefaultLayout;
