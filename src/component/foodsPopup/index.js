import {
    Button,
    FormControl,
    FormHelperText,
    FormLabel,
    HStack,
    IconButton,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    NumberInput,
    NumberInputField,
    SimpleGrid,
    Stack,
    Text,
    Textarea,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useEffect, useState } from "react";
import * as Constants from "@/constant";
import ButtonTheme from "@/component/butonTheme";
import InputTheme from "@/component/inputTheme";
import InputNumberTheme from "@/component/inputNumberTheme";
import { AddIcon, CloseIcon, DeleteIcon } from "@chakra-ui/icons";

function FoodsPopup({ isOpen, onOpen, onClose, config, fetchFunction }) {
    const requestDefualt = {
        _id: "",
        name: "",
        calorie: "",
        ingredients: [],
    };
    const [request, setRequest] = useState(requestDefualt);

    useEffect(() => {
        console.log("config = ", config);
        if (!(Object.keys(config.data).length === 0)) {
            setRequest(config.data);
        } else {
            setRequest(requestDefualt);
        }
    }, [config]);

    const handleChange = (property) => (event) => {
        var value = event.target.value;
        setRequest((prevRequest) => ({
            ...prevRequest,
            [property]: value,
        }));
    };

    const handleChangeValue = (property) => (value) => {
        setRequest((prevRequest) => ({
            ...prevRequest,
            [property]: value,
        }));
    };

    const handleChangeIngredients = (property, index, event) => {
        const updatedIngredients = [...request.ingredients];
        updatedIngredients[index][property] = event.target.value;
      
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

    const callDB = (mode) => async (event) => {
        var path = "/api/foods/manage";
        if(mode == "delete"){
            path = "/api/foods/remove"
        }
        try {
            console.log("callDB mode = ",mode);
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
            onClose();
            fetchFunction();
        }
    };
      
    

    return (
        <>
            <Modal isCentered isOpen={isOpen} onClose={onClose} size={"3xl"}>
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(2px)" />
                <ModalContent>
                    <ModalHeader color={Constants.colorTheme600}>
                        {config.title}
                    </ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <ModalBody>
                        <VStack spacing={2} align="stretch" mb={5}>
                            {/* <Text>{JSON.stringify(config.data)}</Text> */}
                            <Text>{JSON.stringify(request)}</Text>
                            <FormControl isRequired>
                                <FormLabel color={Constants.colorTheme600}>
                                    ชื่ออาหาร
                                </FormLabel>
                                <InputTheme
                                    value={request.name}
                                    onChange={handleChange("name")}
                                />
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel color={Constants.colorTheme600}>
                                    พลังงานทั้งหมด (kcal)
                                </FormLabel>
                                <InputNumberTheme
                                    min={0}
                                    value={request.calorie}
                                    onChange={handleChangeValue("calorie")}
                                >
                                    <NumberInputField />
                                </InputNumberTheme>
                            </FormControl>
                            <Stack flexDirection={"row"} alignItems={'center'}>
                                <Text color={Constants.colorTheme600}>
                                    วัตถุดิบ
                                </Text>
                                <IconButton
                                    size="xs"
                                    colorScheme='green'
                                    icon={<AddIcon></AddIcon>}
                                    variant="outline"
                                    onClick={() => handleAddIngredient()}
                                >
                                    
                                </IconButton>
                            </Stack>
                            {
                                request.ingredients.map((item,index)=>{
                                    return (
                                        <Stack key={'ingredients_'+index} flexDirection={"row"} alignItems={'center'}>
                                            <InputTheme placeholder={"ชื่อวัตถุดิบ"} value={request.ingredients[index].name} onChange={(e) => handleChangeIngredients("name", index, e)}/>
                                            <InputTheme placeholder={"จำนวน"} value={request.ingredients[index].amount} onChange={(e) => handleChangeIngredients("amount", index, e)}/>
                                            <InputTheme placeholder={"หน่วย"} value={request.ingredients[index].unit} onChange={(e) => handleChangeIngredients("unit", index, e)}/>
                                            <IconButton
                                                size="xs"
                                                colorScheme='red'
                                                icon={<CloseIcon></CloseIcon>}
                                                variant="outline"
                                                onClick={() => handleDeleteIngredient(index)}
                                            ></IconButton>
                                        </Stack>
                                    )
                                })
                            }
                            
                        </VStack>

                    </ModalBody>
                    <ModalFooter>
                        <HStack>
                            <ButtonTheme
                                onClick={callDB(config.confirmText)}
                                customColor={"green"}
                            >
                                {config.confirmText}
                            </ButtonTheme>
                            {
                                config.confirmText != "เพิ่ม" && (
                                    <ButtonTheme
                                        onClick={callDB("delete")}
                                        customColor={"red"}
                                    >
                                        ลบ
                                    </ButtonTheme>
                                )
                                
                            }
                            <ButtonTheme onClick={onClose}>
                                ปิด
                            </ButtonTheme>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default FoodsPopup;
