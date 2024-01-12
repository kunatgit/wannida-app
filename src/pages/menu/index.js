import ButtonMenu from '@/component/buttonMenu';
import * as Constants from '@/constant';
import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';
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
                padding={'10'}
                justifyContent={'center'}
            >
                <Box w={{ base: '100%', sm: '100%' ,md: '80%'}}>
                    <VStack
                        spacing={4}
                        align='center'
                        borderRadius={'30'}
                        boxShadow={'0px 0px 100px rgb(5 48 120)'}
                        padding={{ base: '5', sm: '5' ,md: '10'}}
                    >
                        <Box mb={'1'}>
                            <Heading
                                size={'md'}
                                textAlign={'center'}
                                color={Constants.colorTheme600}
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
                            </Heading>
                        </Box>
                        {Constants.constantMenu.map((item, index) => {
                            return (
                                <ButtonMenu
                                    key={'menu_' + index}
                                    text={item.text}
                                    onClick={() => {handleClick(item)}}
                                >
                                </ButtonMenu>
                            );
                        })}
                    </VStack>
                </Box>
            </Container>
        </Box>
    );
}

export default MenuPage;
