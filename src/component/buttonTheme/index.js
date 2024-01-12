
import * as Constants from '@/constant';
import { Box, Text, VStack } from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';

function ButtonTheme({ text,onClick }) {

    return (
        <Box
            border={'2px solid'}
            borderColor={Constants.colorTheme400}
            color={Constants.colorTheme400}
            borderRadius={'50'}
            padding='4'
            bg='white'
            w={{base:'100%',lg:'95%'}}
            cursor='pointer'
            sx={{
                
            }}
            _hover={{
                bgColor: Constants.colorTheme50,
                transition: '0.3s ease',
                w:'100%',
                animation: 'mymove 1s infinite linear',
                '@keyframes mymove': {
                    '50%': {
                        borderColor: Constants.colorTheme50,
                        w:'95%'
                    },
                },
            }}
            onClick={onClick}
        >
            <Text textAlign={'center'}>{text}</Text>
        </Box>
    );
}

export default ButtonTheme;
