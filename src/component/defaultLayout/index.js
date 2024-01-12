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
                maxW='6xl'
                centerContent
                height="100vh"
                padding={{ base: '0', sm: '0' ,md: '10'}}
                justifyContent={'center'}
            >
                <Box w={{ base: '100%', sm: '100%' ,md: '80%'}}>
                    {body}
                </Box>
            </Container>
        </Box>
    );
}

export default DefaultLayout;
