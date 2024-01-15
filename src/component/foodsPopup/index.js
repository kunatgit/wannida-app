import {
    Button,
    HStack,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
    VStack,
    useDisclosure,
} from "@chakra-ui/react";
import React, { useRef, useEffect, useState } from "react";
import * as Constants from "@/constant";
import ButtonTheme from "@/component/butonTheme";

function FoodsPopup({ isOpen, onOpen, onClose, config}) {
    useEffect(()=>{
        console.log("config = ",config)
    },[config])
    return (
        <>
            <Modal isCentered isOpen={isOpen} onClose={onClose} size={'3xl'}>
                <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(2px)" />
                <ModalContent>
                    <ModalHeader>{config.title}</ModalHeader>
                    {/* <ModalCloseButton /> */}
                    <ModalBody>
                        <VStack spacing={2} align="stretch">
                            <Text>{JSON.stringify(config.data)}</Text>
                        </VStack>
                        
                    </ModalBody>
                    <ModalFooter>
                        <HStack>
                            <ButtonTheme onClick={onClose} customColor={'green'}>
                                {config.confirmText}
                            </ButtonTheme>
                            <ButtonTheme onClick={onClose} customColor={'red'}>ปิด</ButtonTheme>
                        </HStack>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
}

export default FoodsPopup;
