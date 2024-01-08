import DefaultLayout from "@/component/defaultLayout";
import * as Constants from "@/constant";
import { Box, Text, VStack } from "@chakra-ui/react";
import { useRouter } from 'next/router';

function MenuPage() {
    const router = useRouter();
    const handleClick = (item) => {
        console.log("item : ", item);
        if(item.directPath){
            var path = "/"+item.directPath;
            router.push(path);
        }
    };
    return (
        <DefaultLayout
            body={
                <VStack
                    spacing={4}
                    align="stretch"
                    w={{ base: "100%", sm: "50%" }}
                >
                    <Box>
                        <Text
                            textAlign={"center"}
                            color={Constants.colorTheme}
                            fontSize={"4vh"}
                        >
                            {Constants.titleApp}
                        </Text>
                    </Box>
                    {
                        Constants.constantMenu.map((item, index) => {
                            return (
                                <Box
                                    padding="4"
                                    bg={Constants.colorTheme}
                                    color="white"
                                    w={"100%"}
                                    cursor="pointer"
                                    _hover={{
                                        bgColor: "lightgreen",
                                        transition: "background-color 0.3s ease",
                                    }}
                                    onClick={() => handleClick(item)}
                                >
                                    <Text textAlign={"center"}>{item.text}</Text>
                                </Box>
                            );
                        })
                    }
                </VStack>
            }
        />
    );
}

export default MenuPage;
