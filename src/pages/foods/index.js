import DefaultLayout from "@/component/defaultLayout";
import * as Constants from "@/constant";
import {
    Box,
    Text,
    VStack,
} from "@chakra-ui/react";

import React, { useState, useEffect } from 'react';

function FoodPage() {
    const fetchData = async () => {
        try {
            const response = await fetch('/api/datatest');
            const result = await response.json();
            console.log("result => ",result)
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

      
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
