import React from "react";
import { Box, Text, Tag } from "@chakra-ui/react";
import { text_truncate  } from 'utils/textTruncate'

const MovieBox = (movieData) => {
    // console.log("movieData", movieData);
    return (
        <Box
            background="#FFF"
            shadow="lg"
            marginRight="2vh !important"
            marginBottom="2vh !important"
            height="57vh"
            padding="2vmin !important"
            cursor="pointer"
            position="relative"
            flex={{
                base: "0 0 90%",
                md: "0 0 30%",
                lg: "0 0 18.5%",
                sm: "0 0 90%",
            }}
            _hover={{
                background: "gray.300",
            }}
        >
            <Box
                width="100%"
                height="40vh"
                backgroundImage={movieData?.Poster}
                backgroundRepeat="no-repeat"
                backgroundSize="100% 100%"
                marginBottom="1vh"
            />
            <Box height="28%" position="relative">
                <Text
                    // fontSize={() =>
                    //     movieData?.Title.length > 28 ? "sm" : "md"
                    // }
                    fontSize="md"
                    fontWeight="bold"
                    textAlign="center"
                    marginBottom="1vmin !important"
                >
                    {movieData && text_truncate(movieData?.Title)} ({movieData.Year})
                </Text>
                <Text
                    fontSize="sm"
                    textAlign="center"
                    position="absolute"
                    bottom="0"
                    left="50%"
                    transform="translate(-50%, -50%)"
                >
                    {/* {movieData?.Year} */}
                    <Tag
                        textTransform="capitalize"
                        size="sm"
                        variant="solid"
                        colorScheme="teal"
                        padding="1vmin 2vmin !important"
                    >
                        Movie
                    </Tag>
                </Text>
            </Box>
        </Box>
    );
};

export default MovieBox;
