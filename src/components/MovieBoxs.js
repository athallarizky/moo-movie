import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'

const MovieBox = (movieData) => {
    const history = useHistory()

    const handleRedirect = (id) => {
        history.push({
            pathname:`/detail/${id}`
        })
    }   
  return (
    <Box
        className='movie-box'
        background="#FFF"
        marginRight="1.2vw !important"
        marginBottom="2vh !important"
        padding="1.5%"
        height="45vh"
        // width="calc(98%/5)"
        cursor="pointer"
        borderRadius="5px"
        _hover={{
            background:"#212121",
            color:"#FFF"
        }}
        onClick={() => handleRedirect(movieData?.imdbID)}
    >
        <Box
            width="100%"
            height="30vh"

            backgroundImage={movieData?.Poster}
            backgroundRepeat="no-repeat"
            backgroundSize="100% 100%"
            marginBottom="1vh"
        />
        <Text fontSize='md' fontWeight="bold" textAlign="center">
            {movieData?.Title}
        </Text>
        <Text fontSize='sm' textAlign="center">
            {movieData?.Year}
        </Text>
    </Box>
  )
}

export default MovieBox