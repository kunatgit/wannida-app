import * as Constants from "@/constant";
import { Box, Button, Input, Text, VStack } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";

function ButtonTheme({ customColor, ...props }) {
    return (
        <Button
            fontWeight="normal"
            w={"100%"}
            colorScheme={customColor || Constants.colorTheme}
            variant="outline"
            {...props}
        ></Button>
    );
}

export default ButtonTheme;
