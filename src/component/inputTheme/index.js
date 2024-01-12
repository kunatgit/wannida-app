import * as Constants from "@/constant";
import { Box, Input, Text, VStack } from "@chakra-ui/react";
import React, { useRef, useEffect } from "react";

function InputTheme(props) {
    return <Input
        color={Constants.colorTheme600}
        focusBorderColor={Constants.colorTheme600}
        _placeholder={{ color: Constants.colorTheme600 }}
        {...props} 
    />;
}

export default InputTheme;
