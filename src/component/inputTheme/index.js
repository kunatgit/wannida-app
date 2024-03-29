import * as Constants from "@/constant";
import { Box, Input, Text, VStack } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";

function InputTheme(props) {
    return <Input
        focusBorderColor={Constants.colorTheme600}
        {...props} 
    />;
}

export default InputTheme;
