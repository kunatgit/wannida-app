
import * as Constants from '@/constant';
import { Box, Input, Text, VStack } from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';

function InputTheme({ placeholder,value}) {

    return (
        <Box>
            <Input placeholder={placeholder} value={value} />
        </Box>
    );
}

export default InputTheme;
