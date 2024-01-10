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
                    w={{ base: '100%', sm: '100%' ,md: '80%'}}
                    // border={'2px solid'}
                    // borderColor={'blue.400'}
                    // sx={{
                    //     animation: 'mymove 2s infinite linear',
                    //     '@keyframes mymove': {
                    //         '50%': {
                    //             borderColor: 'var(--chakra-colors-blue-50)',
                    //         },
                    //     },
                    // }}
                    // boxShadow={'0px 0px 100px rgba(190, 227, 248, 1)'}
                    padding={{ base: '2', sm: '2' ,md: '10'}}
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
                                    bgColor: Constants.colorTheme,
                                    color: 'white',
                                    transition: '0.9s ease',
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
