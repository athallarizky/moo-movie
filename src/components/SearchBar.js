import React, { useState } from 'react'
import { Input, InputGroup, InputLeftElement, Box, Button } from '@chakra-ui/react'
import { SearchIcon } from '@chakra-ui/icons'

import { searchMovie } from 'redux/actions/movies'
import { useDispatch } from 'react-redux'

const SearchBox = ({ handleChangeKey, valueKey }) => {
  const dispatch = useDispatch()
  const [keyword, setKeyword] = useState("")
  const handleChange = (event) => setKeyword(event.target.value)
  
  
  
  const handleSubmit = () => {
    if(keyword.length >= 5){
      dispatch(searchMovie(keyword))
    }
  }
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="space-between"
    >
      <InputGroup>
      <InputLeftElement
        pointerEvents='none'
        top=".5vmin"
        left="1vmin"
        children={<SearchIcon color='gray.300' />}
      />
        <Input
            className='search-box'
            width="98%"
            borderRadius="6px"
            padding="2% 5%"
            color="#FFFFFF"
            border="2px solid #212121"
            background="#212121"
            value={keyword}
            onChange={(e) => handleChange(e)}
        />
      
      </InputGroup>
      <Button
        width="16%"
        background="#212121"
        variant='outline'
        fontWeight="bold"
        color="#FFFFFF"
        borderRadius="6px"
        padding="1.7% 0"
        _hover={{
          color:"#212121",
          background:"#FFF",
          border:"2px solid #212121"
        }}
        onClick={handleSubmit}
      >
        Search
      </Button>
    </Box>
  )
}

export default SearchBox