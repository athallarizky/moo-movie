import React from "react";
import {
    Input,
    InputGroup,
    InputLeftElement,
    Box,
} from "@chakra-ui/react";

import { SearchIcon } from '@chakra-ui/icons'

const SearchBox = ({ handleChange, inputVal}) => {

    return (
        <Box display="flex" justifyContent="space-between">
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.800' 
                    marginTop="1vh !important"
                    marginLeft="1vh !important"
                    />}
                />
            <Input
                type="text"
                // value={inputVal}
                value={inputVal}
                width="100%"
                size="lg"
                placeholder="Search some movies..."
                paddingLeft="3vw !important"
                onChange={handleChange}
                background="#FFF"
                borderRadius="0"
            />
            </InputGroup>
        </Box>
    );
};

export default SearchBox;
