import ButtonTheme from "@/component/butonTheme";
import DefaultLayout from "@/component/defaultLayout";
import InputTheme from "@/component/inputTheme";
import * as Constants from "@/constant";
import {
    Box,
    Heading,
    IconButton,
    SimpleGrid,
    Stack,
    Text,
    Tooltip,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { AddIcon, ArrowBackIcon, DeleteIcon, SearchIcon, SmallAddIcon } from "@chakra-ui/icons";
import ButtonMenu from "@/component/buttonMenu";
import FoodsPopup from "@/component/foodsPopup";
import { useRouter } from "next/router";

function FoodPage() {
    const router = useRouter();
    const [request, setRequest] = useState("");
    const [loading, setLoading] = useState(false);
    const [datas, setDatas] = useState([]);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [configPopup, setConfigPopup] = useState({
        title: "",
        confirmText: "",
        data: {},
    });

    const searchFoods = async () => {
        setLoading(true);
        setDatas([]);
        try {
            console.log("searchFoods");
            const response = await fetch("/api/foods/search", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: request }),
            });
            const res = await response.json();
            console.log("res => ", res);
            if (res.data) {
                setDatas(res.data);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <DefaultLayout
            body={
                <VStack spacing={2} align="stretch" h={"100vh"} padding={{ base: "5", sm: "5", md: "10" }}>
                    <Box>
                        <IconButton
                            colorScheme={Constants.colorTheme}
                            variant="outline"
                            onClick={() => {
                                router.replace('/menu')
                            }}
                            icon={<ArrowBackIcon></ArrowBackIcon>}
                        ></IconButton>
                    </Box>
                    <Box mb={"2"}>
                        <Heading size={"md"} textAlign={"center"} color={Constants.colorTheme600}>
                            <TypeAnimation
                                sequence={[Constants.foodsPageName, 500, "", 500, Constants.foodsPageName, 500]}
                                cursor={true}
                                repeat={Infinity}
                            />
                        </Heading>
                    </Box>
                    <Box>
                        <Stack flexDirection={"row"}>
                            <Box w={"100%"}>
                                <InputTheme
                                    placeholder={"ชื่ออาหาร"}
                                    value={request}
                                    onChange={(event) => {
                                        var value = event.target.value;
                                        setRequest(value);
                                    }}
                                    isDisabled={loading}
                                ></InputTheme>
                            </Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack flexDirection={"row"}>
                            <Stack justify={"center"} w={"50%"}>
                                <ButtonTheme leftIcon={<SearchIcon />} isLoading={loading} onClick={searchFoods}>
                                    ค้นหา
                                </ButtonTheme>
                            </Stack>
                            <Stack justify={"center"} w={"50%"}>
                                <ButtonTheme
                                    leftIcon={<SmallAddIcon />}
                                    isLoading={loading}
                                    onClick={() => {
                                        setConfigPopup({
                                            title: "เพิ่ม เมนูอาหาร",
                                            confirmText: "เพิ่ม",
                                            data: {},
                                        });
                                        onOpen();
                                    }}
                                >
                                    เพิ่มเมนูอาหาร
                                </ButtonTheme>
                            </Stack>
                        </Stack>
                    </Box>
                    {!loading & (datas.length >= 0) && (
                        <Box mb={"3"} pl={"3"} pr={"3"}>
                            <Text color={Constants.colorTheme600} fontSize={"12"}>
                                ผลการค้นหาจำนวน {datas.length} รายการ
                            </Text>
                        </Box>
                    )}
                    {!loading & (datas.length >= 0) && (
                        <Box>
                            <SimpleGrid columns={2} spacing="4" mb={"1"}>
                                {datas.map((item, index) => {
                                    return (
                                        <Tooltip key={"data_" + index} label="คลิกเพื่อแก้ไข">
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
                                                onClick={() => {
                                                    setConfigPopup({
                                                        title: "แก้ไข เมนูอาหาร",
                                                        confirmText: "แก้ไข",
                                                        data: item,
                                                    });
                                                    onOpen();
                                                }}
                                            >
                                                <Text color={Constants.colorTheme600}>{item.name}</Text>
                                            </Box>
                                        </Tooltip>
                                    );
                                })}
                            </SimpleGrid>
                        </Box>
                    )}
                    <FoodsPopup
                        isOpen={isOpen}
                        onOpen={onOpen}
                        onClose={onClose}
                        config={configPopup}
                        fetchFunction={searchFoods}
                        setLoading={setLoading}
                    ></FoodsPopup>
                </VStack>
            }
        ></DefaultLayout>
    );
}

export default FoodPage;
