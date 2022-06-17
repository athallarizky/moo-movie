import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetail, set_detail_movie } from "redux/actions/movies";
import { Box, Text, Tag, Button } from "@chakra-ui/react";
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
        dispatch(set_detail_movie("movieDetail", false));
        history.goBack();
    };

    const mapTag = (genres) => {
        const genre = genres?.split(",");
        return genre.map((g) => (
            <Tag
                size="sm"
                background="teal"
                color="#FFFFFF"
                borderRadius="3px"
                margin=".1vw"
            >
                {g}
            </Tag>
        ));
    };
    return (
        <Box className="movie-detail-page" height="100%">
            <Box mb="2vh">
                <Button
                    leftIcon={<ArrowBackIcon />}
                    colorScheme="teal"
                    variant="solid"
                    onClick={handleGoBack}
                >
                    Go Back
                </Button>
            </Box>
            <Box display="flex">
                <Box
                    className="left-panel poster-box-shadow"
                    width="45%"
                    display="flex"
                    justifyContent="center"
                    padding="2% 0"
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
                        marginBottom="1vh"
                    >
                        {movieDetail?.Title} ({movieDetail?.Year})
                    </Text>
                    <Box
                        className="tag-wrapper"
                        width="38vw"
                        marginBottom="2vh"
                    >
                        {movieDetail && mapTag(movieDetail?.Genre)}
                    </Box>
                    <Box className="description" padding="1.5%">
                        <Text>{movieDetail?.Plot}</Text>
                    </Box>
                    <Box
                        className="information"
                        padding="1.5%"
                        display="flex"
                        justifyContent="space-between"
                        width="40vw"
                    >
                        <Box width="60%">
                            <Box display="flex" mb="1vh">
                                <Text fontWeight="bold">Director:</Text>
                                <Text>{movieDetail?.Director}</Text>
                            </Box>
                            <Box display="flex" mb="1vh">
                                <Text fontWeight="bold">Writer:</Text>
                                <Text>{movieDetail?.Writer}</Text>
                            </Box>
                            <Box display="flex" mb="1vh">
                                <Text fontWeight="bold">Actors:</Text>
                                <Text>{movieDetail?.Actors}</Text>
                            </Box>
                            <Box display="flex" mb="1vh">
                                <Text fontWeight="bold">Country:</Text>
                                <Text>{movieDetail?.Country}</Text>
                            </Box>
                        </Box>
                        <Box width="50%">
                            <Box display="flex" mb="1vh">
                                <Text fontWeight="bold">Runtime:</Text>
                                <Text>{movieDetail?.Runtime}</Text>
                            </Box>
                            <Box display="flex" mb="1vh">
                                <Text fontWeight="bold">Released:</Text>
                                <Text>{movieDetail?.Released}</Text>
                            </Box>
                            <Box display="flex" mb="1vh">
                                <Text fontWeight="bold">Language:</Text>
                                <Text>{movieDetail?.Language}</Text>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default MovieDetail;
