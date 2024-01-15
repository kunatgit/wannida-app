import * as Constants from "@/constant";
import { Box, NumberInput, Text, VStack } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";

function InputNumberTheme(props) {
    return <NumberInput
        focusBorderColor={Constants.colorTheme600}
        {...props} 
    />;
}

export default InputNumberTheme;
