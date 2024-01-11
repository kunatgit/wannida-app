import DefaultLayout from '@/component/defaultLayout';
import * as Constants from '@/constant';
import { Box, Text, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import React, { useRef, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

function MenuPage() {
    const router = useRouter();

    const handleClick = (item) => {
        console.log('item : ', item);
        if (item.directPath) {
            var path = '/' + item.directPath;
            router.push(path);
        }
    };

    return (
        <DefaultLayout
            body={
                <VStack
                    spacing={4}
                    align='stretch'
                    borderRadius={'30'}
                    boxShadow={'0px 0px 100px rgb(105 186 231)'}
                    padding={{ base: '5', sm: '5' ,md: '10'}}
                >
                    <Box mb={'2'}>
                        <Text
                            textAlign={'center'}
                            color={Constants.colorTheme}
                            fontSize={'5vh'}
                        >
                            <TypeAnimation
                                sequence={[
                                    Constants.titleApp,
                                    500,
                                    '',
                                    500,
                                    Constants.titleApp,
                                    500,
                                ]}
                                cursor={true}
                                repeat={Infinity}
                            />
                        </Text>
                    </Box>
                    {Constants.constantMenu.map((item, index) => {
                        return (
                            <Box
                                key={'menu_' + index}
                                border={'2px solid'}
                                borderColor={Constants.colorTheme}
                                color={Constants.colorTheme}
                                borderRadius={'50'}
                                padding='4'
                                bg='white'
                                w={'100%'}
                                cursor='pointer'
                                sx={{
                                    animation: 'mymove 3s infinite linear',
                                    '@keyframes mymove': {
                                        '50%': {
                                            borderColor: 'var(--chakra-colors-blue-50)',
                                        },
                                    },
                                }}
                                _hover={{
                                    bgColor: 'blue.50',
                                    transition: '0.3s ease',
                                    borderRadius:'0',
                                }}
                                onClick={() => handleClick(item)}
                            >
                                <Text textAlign={'center'}>{item.text}</Text>
                            </Box>
                        );
                    })}
                </VStack>
            }
        />
    );
}

export default MenuPage;
