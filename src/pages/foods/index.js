import DefaultLayout from "@/component/defaultLayout";
import * as Constants from "@/constant";
import { Box, Text, VStack } from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { TypeAnimation } from "react-type-animation";

function FoodPage() {
    useEffect(() => {
        
        console.log("asd");
    }, []);

    return (
        <DefaultLayout
            body={
                <VStack
                    spacing={4}
                    align="stretch"
                    h={"100vh"}
                    padding={{ base: "5", sm: "5", md: "10" }}
                >
                    <Box mb={"1"}>
                        <Text
                            textAlign={"center"}
                            color={Constants.colorTheme400}
                            fontSize={{
                                base: "3vh",
                                sm: "3vh",
                                md: "3vh",
                                xl: "3vh",
                            }}
                        >
                            <TypeAnimation
                                sequence={[Constants.foodsPageName,500,"",500,Constants.foodsPageName,500]}
                                cursor={true}
                                repeat={Infinity}
                            />
                        </Text>
                    </Box>
                </VStack>
            }
        />
    );
}

export default FoodPage;
