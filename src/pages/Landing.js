import React, { useRef, useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { set_movies, set_search_key, set_page } from 'redux/actions/movies'
// Libraries
import { Box } from "@chakra-ui/react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Custom Hooks
import useMovieSearch from "hooks/useMovieSearch";

// Components
import MovieBox from "components/MovieBox";
import SearchBox from "components/SearchBox";

const Landing = () => {
    // const [query, setQuery] = useState("");
    // const [pageNumber, setPageNumber] = useState(1);
    const dispatch = useDispatch()
    const { searchKey, activePage } = useSelector(state => state.movies)

    const { movies, loading, error, totalResult } = useMovieSearch(
        activePage
    );

    useEffect(() => {
        if(movies?.length){
            window.localStorage.setItem("movies", JSON.stringify(movies))
        }
    }, [movies])

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
            console.log("DASADSADSASDADS")
            if (loading) return;
            if (observer.current) observer.current.disconnect();
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting && (totalResult !== movies.length)) {
                    console.log('activePage', activePage)
                    dispatch(set_page(activePage + 1))
                    // setPageNumber(activePage + 1);
                }
            });
            if (node) observer.current.observe(node);
        },
        [loading, movies, totalResult, activePage]
    );

    function handleSearch(e) {
        dispatch(set_search_key(e.target.value))
        dispatch(set_page(activePage + 1))
        // setQuery(e.target.value);
        // setPageNumber(1);
    }

    return (
        <Box className="landing-page" padding="2% !important" height="100%">
            <Box
                className="searchbox-wrapper"
                width="60%"
                margin="0 auto 3vh !important"
            >
                <SearchBox handleChange={handleSearch} inputVal={searchKey} />
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
            {movies &&
                movies?.map((movieData, index) => {
                    if (movies.length === index + 1) {
                        return (
                            <React.Fragment>
                                <MovieBox
                                    // ref={lastMovieElement}
                                    key={index}
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
