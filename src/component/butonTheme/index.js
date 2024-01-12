import * as Constants from "@/constant";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";

function ButtonTheme(props, text) {
    return (
        <Button
            fontWeight="normal"
            w={"100%"}
            colorScheme={'blue'}
            variant="outline"
            {...props}
        ></Button>
    );
}

export default ButtonTheme;
