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
                    w={{ base: "100%", sm: "60%" }}
                    border={'2px solid'}
                    borderColor={Constants.colorTheme700}
                    borderRadius={'20'}
                    boxShadow={'10px 10px 20px rgba(0, 0, 0, 0.3)'}
                    padding="10"
                >
                    <Box>
                        <Text
                            textAlign={"center"}
                            color={Constants.colorTheme700}
                            fontSize={"4vh"}
                        >
                            {Constants.titleApp}
                        </Text>
                    </Box>
                    {
                        Constants.constantMenu.map((item, index) => {
                            return (
                                <Box
                                     border={'1px solid'}
                                    borderColor={Constants.colorTheme700}
                                    color={Constants.colorTheme700}
                                    borderRadius={'50'}
                                    padding="4"
                                    bg="white"
                                    w={"100%"}
                                    cursor="pointer"
                                    _hover={{
                                        bgColor: Constants.colorTheme700,
                                        color: "white",
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
