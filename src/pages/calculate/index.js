import Navbar from "@/component/navbar";
import {
    Box,
    Center,
    Container,
    FormControl,
    FormLabel,
    Input,
} from "@chakra-ui/react";

function CalPage() {
    return (
        <Box
            height="100vh"
            display="flex"
            justifyContent="center"
            alignItems="center"
            bg="green.50"
        >
            <Box>
                <FormControl isRequired>
                    <FormLabel>ชื่ออาหาร</FormLabel>
                    <Input placeholder="First name" />
                </FormControl>
            </Box>
        </Box>
    );
}

export default CalPage;
