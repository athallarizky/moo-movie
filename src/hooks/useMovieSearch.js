import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { set_movies, set_loading, set_total_result, set_error, set_page } from 'redux/actions/movies'
import axios from "axios";

export default function useMovieSearch(pageNumber) {
    const dispatch = useDispatch()
    const { loading, movies, totalResult, error, searchKey } = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(set_movies([]))
        dispatch(set_page(1))
    }, [searchKey, dispatch]);

    useEffect(() => {
        dispatch(set_loading(true))
        dispatch(set_error(false))

        let cancel;
        const OMDB_API = process.env.REACT_APP_OMDB_API_KEY;

        const requestMovie = async () =>
            axios({
                method: "GET",
                url: `${process.env.REACT_APP_BASE_API_URL}?apikey=${OMDB_API}`,
                params: { s: searchKey, page: pageNumber },
                cancelToken: new axios.CancelToken((c) => (cancel = c)),
            })
                .then((res) => {
                    if (res?.data.Response !== "False") {
                        const updateData = movies.concat(res.data.Search)
                        dispatch(set_movies(updateData));
                        dispatch(set_total_result(parseInt(res.data.totalResults)))
                    }
                    dispatch(set_loading(false))
                })
                .catch((e) => {
                    if (axios.isCancel(e)) return;
                    dispatch(set_error(true))
                });

        requestMovie();

        return () => cancel();
        // eslint-disable-next-line
    }, [searchKey, pageNumber, dispatch]);

    return { loading, error, movies, totalResult };
}
