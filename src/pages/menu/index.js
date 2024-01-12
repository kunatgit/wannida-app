import ButtonTheme from '@/component/buttonTheme';
import * as Constants from '@/constant';
import { Box, Container, Text, VStack } from '@chakra-ui/react';
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
        <Box>
            <Container
                maxW='3xl'
                centerContent
                height="100vh"
                padding={{ base: '0', sm: '0' ,md: '10'}}
                justifyContent={'center'}
            >
                <Box w={{ base: '100%', sm: '100%' ,md: '80%'}}>
                    <VStack
                        spacing={4}
                        align='center'
                        borderRadius={'30'}
                        boxShadow={'0px 0px 100px rgb(105 186 219)'}
                        padding={{ base: '5', sm: '5' ,md: '10'}}
                    >
                        <Box mb={'1'}>
                            <Text
                                textAlign={'center'}
                                color={Constants.colorTheme400}
                                fontSize={{ base: '3vh', sm: '3vh' ,md: '3vh',xl: '5vh'}}
                            >
                                <TypeAnimation
                                    sequence={[
                                        Constants.appName,
                                        500,
                                        '',
                                        500,
                                        Constants.appName,
                                        500,
                                    ]}
                                    cursor={true}
                                    repeat={Infinity}
                                />
                            </Text>
                        </Box>
                        {Constants.constantMenu.map((item, index) => {
                            return (
                                <ButtonTheme
                                    key={'menu_' + index}
                                    text={item.text}
                                    onClick={() => {handleClick(item)}}
                                >
                                </ButtonTheme>
                            );
                        })}
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
}

export default MenuPage;
