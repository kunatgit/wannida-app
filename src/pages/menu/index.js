import DefaultLayout from "@/component/defaultLayout";
import * as Constants from "@/constant";
import { Box, Text, VStack } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useRef, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

function MenuPage() {
    const router = useRouter();
    const colorInPage = Constants.colorTheme400;
    const colorBorder = Constants.colorBorder;
    const colorBoxShadow = Constants.colorBoxShadow;

    const handleClick = (item) => {
        console.log("item : ", item);
        if (item.directPath) {
            var path = "/" + item.directPath;
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
                    border={"2px solid"}
                    borderColor={Constants.colorTheme50}
                    sx={{
                        animation: "mymove 2s infinite",
                        "@keyframes mymove": {
                            "50%": {
                                borderColor: "var(--chakra-colors-blue-200)",
                            },
                        },
                    }}
                    borderRadius={"20"}
                    boxShadow={colorBoxShadow}
                    padding="10"
                >
                    <Box mb={"2"}>
                        <Text
                            textAlign={"center"}
                            color={colorInPage}
                            fontSize={"4vh"}
                        >
                            <TypeAnimation
                                sequence={[
                                    Constants.titleApp,
                                    500,
                                    "",
                                    500,
                                    Constants.titleApp,
                                    500,
                                ]}
                                cursor={true}
                                repeat={Infinity}
                            />
                        </Text>
                    </Box>
                    {Constants.constantMenu.map((item, index) => {
                        return (
                            <Box
                                key={"menu_" + index}
                                border={"2px solid"}
                                borderColor={colorBorder}
                                color={colorInPage}
                                borderRadius={"50"}
                                padding="4"
                                bg="white"
                                w={"100%"}
                                cursor="pointer"
                                _hover={{
                                    bgColor: colorInPage,
                                    color: "white",
                                    transition: "background-color 0.3s ease",
                                }}
                                onClick={() => handleClick(item)}
                            >
                                <Text textAlign={"center"}>{item.text}</Text>
                            </Box>
                        );
                    })}
                </VStack>
            }
        />
    );
}

export default MenuPage;
