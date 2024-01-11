import DefaultLayout from "@/component/defaultLayout";
import * as Constants from "@/constant";
import {
    Box,
    Text,
    VStack,
} from "@chakra-ui/react";

function FoodPage() {
    return (
        <DefaultLayout
            body={
                <VStack
                    spacing={4}
                    align="stretch"
                    bg='blue.50'
                >
                    <Box>
                        <Text
                            textAlign={"center"}
                            color={Constants.colorTheme}
                            fontSize={"4vh"}
                        >
                            Food Page
                        </Text>
                    </Box>
                </VStack>
            }
        />
    );
}

export default FoodPage;
