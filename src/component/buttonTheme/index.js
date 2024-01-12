
import * as Constants from '@/constant';
import { Box, Text, VStack } from '@chakra-ui/react';
import React, { useRef, useEffect } from 'react';

function ButtonTheme({ text,onClick }) {

    return (
        <Box
            border={'2px solid'}
            borderColor={Constants.colorTheme}
            color={Constants.colorTheme}
            borderRadius={'50'}
            padding='4'
            bg='white'
            w={{base:'100%',lg:'95%'}}
            cursor='pointer'
            sx={{
                
            }}
            _hover={{
                bgColor: 'blue.50',
                transition: '0.3s ease',
                // borderRadius:'0',
                w:'100%',
                animation: 'mymove 1s infinite linear',
                '@keyframes mymove': {
                    '50%': {
                        borderColor: 'var(--chakra-colors-blue-50)',
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
