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
    Image
} from "@chakra-ui/react";

const PosterModal = ({ children }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const { movieDetail } = useSelector(state => state.movies )
    return (
        <>
            <Box className="asdaads" w="90%" h="55vh" onClick={onOpen}>{ children }</Box>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign="center">{movieDetail?.Title}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody margin="0 auto">
                        <Image src={movieDetail?.Poster} alt="poster"/>
                    </ModalBody>

                    <ModalFooter display="flex" justifyContent="center">
                        <Button colorScheme="teal" mr={3} onClick={onClose}>
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default PosterModal;
