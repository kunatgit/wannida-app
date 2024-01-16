import {
    Box,
    FormControl,
    FormLabel,
    HStack,
    IconButton,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    NumberInputField,
    Spinner,
    Stack,
    Text,
    VStack,
} from "@chakra-ui/react";
import React, { useRef, useEffect, useState } from "react";
import * as Constants from "@/constant";
import ButtonTheme from "@/component/butonTheme";
import InputTheme from "@/component/inputTheme";
import InputNumberTheme from "@/component/inputNumberTheme";
import { AddIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";

function FoodsPopup({ isOpen, onOpen, onClose, config, fetchFunction, setLoading }) {
    const requestDefualt = {
        _id: "",
        name: "",
        calorie: "",
        ingredients: [],
    };
    const [request, setRequest] = useState(requestDefualt);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        console.log("config = ", config);
        if (!(Object.keys(config.data).length === 0)) {
            setRequest(config.data);
        } else {
            setRequest(requestDefualt);
        }
    }, [config]);

    useEffect(() => {
        setIsError(false);
    }, [isOpen]);

    const handleChange = (property, value) => {
        setRequest((prevRequest) => ({
            ...prevRequest,
            [property]: value,
        }));
    };

    const handleChangeIngredients = (property, index, value) => {
        const updatedIngredients = [...request.ingredients];
        updatedIngredients[index][property] = value;

        setRequest({
            ...request,
            ingredients: updatedIngredients,
        });
    };

    const handleDeleteIngredient = (index) => {
        const updatedIngredients = [...request.ingredients];
        updatedIngredients.splice(index, 1);

        setRequest({
            ...request,
            ingredients: updatedIngredients,
        });
    };

    const handleAddIngredient = () => {
        const newIngredient = { name: "", amount: "", unit: "" };

        setRequest({
            ...request,
            ingredients: [...request.ingredients, newIngredient],
        });
    };

    function validateSubmit(obj) {
        if (obj === undefined || obj === null) return false;

        for (const key in obj) {
            if (key === "_id") continue;
            if (obj[key] === "" || obj[key] === undefined) return false;
            if (Array.isArray(obj[key]) || typeof obj[key] === "object") {
                if (!validateSubmit(obj[key])) return false;
            }
        }

        return true;
    }

    const callDB = (mode) => async (event) => {
        const c = await validateSubmit(request);
        console.log("validate = ", c);
        if (c) {
            setLoading(true);
            onClose();
            var path = "/api/foods/manage";
            if (mode == "delete") {
                path = "/api/foods/remove";
            }
            try {
                console.log("callDB mode = ", mode);
                const response = await fetch(path, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(request),
                });
                const res = await response.json();
                console.log("res => ", res);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                fetchFunction();
            }
        } else {
            setIsError(true);
        }
    };

    return (
        <>
            <Modal isCentered isOpen={isOpen} onClose={onClose} size={"3xl"}>
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(2px)" />
                <ModalContent>
                    <ModalHeader color={Constants.colorTheme600}>{config.title}</ModalHeader>
                    <ModalBody>
                        <VStack spacing={2} align="stretch" mb={5}>
                            {/* <Text>{JSON.stringify(config.data)}</Text>
                                <Text>{JSON.stringify(request)}</Text>
                                <Text>
                                    =
                                    {JSON.stringify(config.data) === JSON.stringify(request) ? "true" : "false"}
                                </Text> */}
                            <FormControl isRequired>
                                <FormLabel color={Constants.colorTheme600}>ชื่ออาหาร</FormLabel>
                                <InputTheme
                                    value={request.name}
                                    isInvalid={isError && !request.name}
                                    onChange={(e) => handleChange("name", e.target.value)}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel color={Constants.colorTheme600}>พลังงานทั้งหมด (kcal)</FormLabel>
                                <InputNumberTheme
                                    min={0}
                                    value={request.calorie}
                                    isInvalid={isError && !request.calorie}
                                    onChange={(value) => handleChange("calorie", value)}
                                >
                                    <NumberInputField />
                                </InputNumberTheme>
                            </FormControl>
                            <Stack flexDirection={"row"} alignItems={"center"}>
                                <Text color={Constants.colorTheme600}>วัตถุดิบ</Text>
                                <IconButton
                                    size="xs"
                                    colorScheme="green"
                                    icon={<AddIcon></AddIcon>}
                                    variant="outline"
                                    onClick={() => handleAddIngredient()}
                                ></IconButton>
                            </Stack>
                            {request.ingredients.map((item, index) => {
                                return (
                                    <Stack key={"ingredients_" + index} flexDirection={"row"} alignItems={"center"}>
                                        <Box>
                                            <InputTheme
                                                placeholder={"ชื่อวัตถุดิบ"}
                                                value={request.ingredients[index].name}
                                                isInvalid={isError && !request.ingredients[index].name}
                                                onChange={(e) => handleChangeIngredients("name", index, e.target.value)}
                                            />
                                        </Box>
                                        <Box>
                                            <InputNumberTheme
                                                value={request.ingredients[index].amount}
                                                isInvalid={isError && !request.ingredients[index].amount}
                                                onChange={(value) => handleChangeIngredients("amount", index, value)}
                                            >
                                                <NumberInputField placeholder={"จำนวน"} />
                                            </InputNumberTheme>
                                        </Box>
                                        <Box>
                                            <InputTheme
                                                placeholder={"หน่วย"}
                                                value={request.ingredients[index].unit}
                                                isInvalid={isError && !request.ingredients[index].unit}
                                                onChange={(e) => handleChangeIngredients("unit", index, e.target.value)}
                                            />
                                        </Box>
                                        <IconButton
                                            size="xs"
                                            colorScheme="red"
                                            icon={<CloseIcon></CloseIcon>}
                                            variant="outline"
                                            onClick={() => handleDeleteIngredient(index)}
                                        ></IconButton>
                                    </Stack>
                                );
                            })}
                        </VStack>
                    </ModalBody>
                    <ModalFooter>
                        <HStack>
                            <ButtonTheme onClick={callDB(config.confirmText)} customColor={"green"}>
                                {config.confirmText}
                            </ButtonTheme>
                            {config.confirmText != "เพิ่ม" && (
                                <ButtonTheme onClick={callDB("delete")} customColor={"red"}>
                                    ลบ
                                </ButtonTheme>
                            )}
                            <ButtonTheme onClick={onClose}>ปิด</ButtonTheme>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default FoodsPopup;
