import React, { useRef, useCallback, useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import MovieBox from "components/MovieBox";
import SearchBox from "components/SearchBox";
import useMovieSearch from "hooks/useMovieSearch";

// Components

const Landing = () => {
    const [query, setQuery] = useState("");
    const [pageNumber, setPageNumber] = useState(1);
    // const toast = useToast()
    const { movies, loading, error, totalResult } = useMovieSearch(
        query,
        pageNumber
    );

    useEffect(() => {
        if (loading && movies.length) {
            const customId = "toastify-landing";
            toast.info("Fetching Data...", {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                toastId: customId,
            });
        } else if (error) {
            const customId = "toastify-landing";
            toast.error("Error...", {
                position: "bottom-center",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                toastId: customId,
            });
        }
    }, [loading, error, movies]);

    const observer = useRef();
    const lastMovieElement = useCallback(
        (node) => {
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && (totalResult !== movies.length)) {
                    setPageNumber((prevPageNumber) => prevPageNumber + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, movies, totalResult]
    );

    function handleSearch(e) {
        setQuery(e.target.value);
        setPageNumber(1);
    }

    return (
        <Box className="landing-page" padding="2% !important" height="100%">
            <Box
                className="searchbox-wrapper"
                width="60%"
                margin="0 auto 3vh !important"
            >
                <SearchBox handleChange={handleSearch} inputVal={query} />
            </Box>

            <Box
                className="movie-lists-wrapper"
                width="100%"
                padding="2vw !important"
                margin="2vh auto"
                height="100vh"
                borderRadius="5px"
                display="flex"
                justifyContent={{
                    base: "center",
                    md: "flex-start",
                    lg: "flex-start",
                    sm: "center",
                }}
                flexWrap="wrap"
            >
                {/* <MovieBox/>
                <MovieBox/>
                <MovieBox/>
                <MovieBox/>
                <MovieBox/>
                <MovieBox/>
                <MovieBox/>
                <MovieBox/>
                <MovieBox/>
                <MovieBox/>
                <MovieBox/> */}
                {movies &&
                    movies?.map((movieData, index) => {
                        if (movies.length === index + 1) {
                            return (
                                <React.Fragment>
                                    <MovieBox
                                        ref={lastMovieElement}
                                        key={`movie-${movieData.Title}`}
                                        {...movieData}
                                    />
                                    <div
                                        ref={lastMovieElement}
                                        style={{
                                            height: "15vh",
                                            width: "100%",
                                        }}
                                    />
                                </React.Fragment>
                            );
                        } else {
                            return (
                                <MovieBox
                                    key={`movie-${movieData.Title}`}
                                    {...movieData}
                                />
                            );
                        }
                    })}
            </Box>
            {/* { loading && ToastExample} */}
            <ToastContainer />
        </Box>
    );
};

export default Landing;
