import ButtonTheme from "@/component/butonTheme";
import DefaultLayout from "@/component/defaultLayout";
import InputTheme from "@/component/inputTheme";
import * as Constants from "@/constant";
import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    HStack,
    Heading,
    Stack,
    Text,
    Tooltip,
    VStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { SearchIcon } from "@chakra-ui/icons";
import ButtonMenu from "@/component/buttonMenu";

function FoodPage() {
    return (
        <DefaultLayout
            body={
                <VStack
                    spacing={2}
                    align="stretch"
                    h={"100vh"}
                    padding={{ base: "5", sm: "5", md: "10" }}
                >
                    <Box mb={"2"}>
                        <Heading
                            size={"md"}
                            textAlign={"center"}
                            color={Constants.colorTheme600}
                        >
                            <TypeAnimation
                                sequence={[
                                    Constants.foodsPageName,
                                    500,
                                    "",
                                    500,
                                    Constants.foodsPageName,
                                    500,
                                ]}
                                cursor={true}
                                repeat={Infinity}
                            />
                        </Heading>
                    </Box>
                    <Box>
                        <Stack flexDirection={"row"}>
                            <Box w={"75%"}>
                                <InputTheme
                                    placeholder={"ชื่ออาหาร"}
                                ></InputTheme>
                            </Box>
                            <Stack justify={"center"} w={"25%"}>
                                <ButtonTheme leftIcon={<SearchIcon />}>
                                    ค้นหา
                                </ButtonTheme>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box mb={"3"} pl={"3"} pr={"3"}>
                        <Text color={Constants.colorTheme600} fontSize={"12"}>
                            ผลการค้นหาจำนวน 10 รายการ
                        </Text>
                    </Box>
                    <Box>
                        <Stack spacing="4" mb={"1"}>
                            <Tooltip label="คลิกเพื่อแก้ไข">
                                <Box
                                    padding={"5"}
                                    border={"1px solid"}
                                    borderRadius={"10"}
                                    borderColor={"gray.200"}
                                    cursor="pointer"
                                    textAlign={"center"}
                                    _hover={{
                                        bgColor: Constants.colorTheme50,
                                        borderColor: Constants.colorTheme600,
                                    }}
                                >
                                    <Text color={Constants.colorTheme600}>
                                        name
                                    </Text>
                                </Box>
                            </Tooltip>
                        </Stack>
                    </Box>
                </VStack>
            }
        />
    );
}

export default FoodPage;
