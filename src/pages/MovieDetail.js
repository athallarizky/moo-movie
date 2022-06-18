import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail, set_detail_movie, set_movies } from "redux/actions/movies";
import {
    Box,
    Text,
    Tag,
    Button,
    Table,
    Tr,
    Td,
    Tbody,
    Spinner
} from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import PosterModal from "components/PosterModal";

const MovieDetail = () => {
    const dispatch = useDispatch();
    const { movieDetail } = useSelector((state) => state.movies);
    const { movieId } = useParams();
    const history = useHistory();

    useEffect(() => {
        if (movieId) {
            dispatch(getMovieDetail(movieId));
        }
    }, [movieId, dispatch]);

    const handleGoBack = () => {
        dispatch(set_detail_movie(false));
        dispatch(set_movies([]));
        history.goBack();
    };

    const mapTag = (genres) => {
        const genre = genres?.split(",");
        return genre.map((g, index) => (
            <Tag
                key={index}
                size="md"
                background="teal"
                color="#FFFFFF"
                borderRadius="3px"
                marginRight=".5vw !important"
                padding="0 1% !important"
                marginBottom="2vh !important"
            >
                {g}
            </Tag>
        ));
    };
    if(!movieDetail) return (
        <Box w="100%" h="80vh" display="flex" justifyContent="center" alignItems="center">
            <Spinner size="lg"/>
        </Box>
    )
    return (
        <Box
            className="movie-detail-page"
            padding="2% !important"
            height="100%"
        >
            {/* Back Button */}
            <Box mb="2vh">
                <Button
                    leftIcon={<ArrowBackIcon />}
                    colorScheme="teal"
                    variant="solid"
                    onClick={handleGoBack}
                    padding="1% 2% !important"
                >
                    Go Back
                </Button>
            </Box>

            <Box
                display={{
                    base: "flex-column",
                    md: "flex-column",
                    lg: "flex",
                    sm: "flex-column",
                }}
                marginTop="3vh !important"
            >
                <Box
                    className="left-panel poster-box-shadow"
                    width={{
                        lg:'40%',
                        base:'80%'
                    }}
                    display="flex"
                    justifyContent="center"
                    padding="2% 0 !important"
                    marginRight="2vw !important"
                    margin={{
                        sm:'0 auto !important',
                        base:'0 auto !important',
                        lg:'0 2vw 0 0 !important '
                    }}
                >
                    <PosterModal>
                        <Box
                            className="poster-wrapper "
                            width="100%"
                            height="100%"
                            backgroundImage={movieDetail?.Poster}
                            backgroundRepeat="no-repeat"
                            backgroundSize="100% 100%"
                        />
                    </PosterModal>
                </Box>
                <Box className="right-panel" width="100%" padding="1%">
                    <Text
                        fontSize="4xl"
                        fontWeight="extrabold"
                        marginBottom="2vh !important"
                        textAlign={{
                            sm:'center',
                            base:'center'
                        }}
                    >
                        {movieDetail?.Title} ({movieDetail?.Year})
                    </Text>
                    <Box
                        className="tag-wrapper"
                        width={{
                            lg:"38vw",
                            base:'80%'
                        }}
                        display={{
                            sm:'flex',
                            base:'flex',
                        }}
                        justifyContent={{
                            sm:'center',
                            base:'center'
                        }}
                        marginBottom="2vh !important"
                        margin={{
                            sm:'0 auto !important',
                            base:'0 auto !important',
                        }}
                    >
                        {movieDetail && mapTag(movieDetail?.Genre)}
                    </Box>
                    <Box
                        className="description"
                        padding="1.5%"
                        marginBottom="2vh !important"
                    >
                        <Text>{movieDetail?.Plot}</Text>
                    </Box>
                    <Box
                        className="information"
                        padding="1.5%"
                        display="flex"
                        justifyContent="space-between"
                        width={{
                            lg:'40vw',
                            sm:'90vw'
                        }}
                    >
                        <Box width="60%">
                            <Table>
                                <Tbody size="md">
                                    <Tr>
                                        <Td>
                                            <Text fontWeight="bold">
                                                Director
                                            </Text>
                                        </Td>
                                        <Td>&nbsp;:&nbsp;</Td>
                                        <Td>
                                            <Text>{movieDetail?.Director}</Text>
                                        </Td>
                                    </Tr>
                                    <Tr placeItems={"end"}>
                                        <Td>
                                            <Text fontWeight="bold">
                                                Writer
                                            </Text>
                                        </Td>
                                        <Td>&nbsp;:&nbsp;</Td>
                                        <Td>
                                            <Text>{movieDetail?.Writer}</Text>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Text fontWeight="bold">
                                                Actors
                                            </Text>
                                        </Td>
                                        <Td>&nbsp;:&nbsp;</Td>
                                        <Td>
                                            <Text>{movieDetail?.Actors}</Text>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Text fontWeight="bold">
                                                Country
                                            </Text>
                                        </Td>
                                        <Td>&nbsp;:&nbsp;</Td>
                                        <Td>
                                            <Text>{movieDetail?.Country}</Text>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Box>
                        <Box width="50%">
                            <Table>
                                <Tbody size="md">
                                    <Tr>
                                        <Td>
                                            <Text fontWeight="bold">
                                                Runtime
                                            </Text>
                                        </Td>
                                        <Td>&nbsp;:&nbsp;</Td>
                                        <Td>
                                            <Text>{movieDetail?.Runtime}</Text>
                                        </Td>
                                    </Tr>
                                    <Tr placeItems={"end"}>
                                        <Td>
                                            <Text fontWeight="bold">
                                                Released
                                            </Text>
                                        </Td>
                                        <Td>&nbsp;:&nbsp;</Td>
                                        <Td>
                                            <Text>{movieDetail?.Released}</Text>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Text fontWeight="bold">
                                                Language
                                            </Text>
                                        </Td>
                                        <Td>&nbsp;:&nbsp;</Td>
                                        <Td>
                                            <Text>{movieDetail?.Language}</Text>
                                        </Td>
                                    </Tr>
                                    <Tr>
                                        <Td>
                                            <Text fontWeight="bold">
                                                Language
                                            </Text>
                                        </Td>
                                        <Td>&nbsp;:&nbsp;</Td>
                                        <Td>
                                            <Text>{movieDetail?.Country}</Text>
                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MovieDetail;
