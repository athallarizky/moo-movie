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
import { isValidHttpUrl } from 'utils/helpers'
import ImgNotFound from 'assets/images/ImgNotFound.jpg'

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
                        <Text fontSize="3xl" data-testid="divMovieTitle">
                            { movieDetail?.Title}
                        </Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody margin="0 auto">
                        <Image src={isValidHttpUrl(movieDetail?.Poster) ? movieDetail?.Poster : ImgNotFound} alt="poster" data-testid="divMoviePoster"/>
                    </ModalBody>

                    <ModalFooter display="flex" justifyContent="center">
                        <Button colorScheme="teal" mr={3} onClick={onClose} width="30%" marginBottom="2vh !important" data-testid="divMovieBtn">
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default PosterModal;
