import ButtonTheme from "@/component/butonTheme";
import DefaultLayout from "@/component/defaultLayout";
import InputTheme from "@/component/inputTheme";
import * as Constants from "@/constant";
import {
    Box,
    FormControl,
    Heading,
    IconButton,
    Input,
    InputGroup,
    InputLeftElement,
    Select,
    SimpleGrid,
    Stack,
    Text,
    Tooltip,
    VStack,
    background,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";
import { AddIcon, ArrowBackIcon, CalendarIcon, DeleteIcon, SearchIcon, SmallAddIcon } from "@chakra-ui/icons";
import ButtonMenu from "@/component/buttonMenu";
import FoodsPopup from "@/component/foodsPopup";
import { useRouter } from "next/router";

function MonthlyFoods() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [request, setRequest] = useState({
        month: "01",
        year: Constants.thisYear.toString(),
    });

    const handleChange = (property, value) => {
        setRequest((prevRequest) => ({
            ...prevRequest,
            [property]: value,
        }));
    };

    useEffect(() => {
        console.log("request => ",request)
    }, [request]);

    return (
        <DefaultLayout
            body={
                <VStack spacing={2} align="stretch" h={"100vh"} padding={{ base: "5", sm: "5", md: "10" }}>
                    <Box>
                        <IconButton
                            colorScheme={Constants.colorTheme}
                            variant="outline"
                            onClick={() => {
                                router.replace("/menu");
                            }}
                            icon={<ArrowBackIcon></ArrowBackIcon>}
                        ></IconButton>
                    </Box>
                    <Box mb={"2"}>
                        <Heading size={"md"} textAlign={"center"} color={Constants.colorTheme600}>
                            <TypeAnimation
                                sequence={[Constants.monthlyFoodsPageName, 500, "", 500, Constants.monthlyFoodsPageName, 500]}
                                cursor={true}
                                repeat={Infinity}
                            />
                        </Heading>
                    </Box>
                    <Box>
                        <Stack flexDirection={"row"}>
                            <Box w={"50%"}>
                                <Select
                                    focusBorderColor={Constants.colorTheme600}
                                    cursor={"pointer"}
                                    value={request.month}
                                    onChange={(e) => handleChange("month", e.target.value)}
                                >
                                    {Constants.monthsInThai.map((item, index) => (
                                        <option key={item.label + "_" + index} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))}
                                </Select>
                            </Box>
                            <Box w={"50%"}>
                                <Select
                                    focusBorderColor={Constants.colorTheme600}
                                    cursor={"pointer"}
                                    value={request.year}
                                    onChange={(e) => handleChange("year", e.target.value)}
                                >
                                    {Constants.yearsArr.map((item, index) => (
                                        <option key={item + "_" + index} value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </Select>
                            </Box>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack flexDirection={"row"}>
                            <Stack justify={"center"} w={"50%"}>
                                <ButtonTheme leftIcon={<SearchIcon />}>ค้นหา</ButtonTheme>
                            </Stack>
                            <Stack justify={"center"} w={"50%"}>
                                <ButtonTheme leftIcon={<SmallAddIcon />}>เพิ่มรายการประจำวัน</ButtonTheme>
                            </Stack>
                        </Stack>
                    </Box>
                </VStack>
            }
        ></DefaultLayout>
    );
}

export default MonthlyFoods;
