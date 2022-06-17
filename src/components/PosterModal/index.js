import { useSelector } from 'react-redux'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    Box,
    Image,
    Text
} from "@chakra-ui/react";

const PosterModal = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { movieDetail } = useSelector(state => state.movies )
    return (
        <>
            <Box w="90%" h="55vh" onClick={onOpen}>{ children }</Box>

            <Modal isOpen={isOpen} onClose={onClose} padding="2vmin !important">
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">
                        <Text fontSize="3xl">
                        {movieDetail?.Title}
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody margin="0 auto">
                        <Image src={movieDetail?.Poster} alt="poster"/>
                    </ModalBody>

                    <ModalFooter display="flex" justifyContent="center">
                        <Button colorScheme="teal" mr={3} onClick={onClose} width="30%" marginBottom="2vh !important">
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default PosterModal;
