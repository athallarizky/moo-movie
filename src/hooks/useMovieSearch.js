import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { set_movies, set_loading, set_total_result, set_error, set_page } from 'redux/actions/movies'
import axios from "axios";
// loading:false,
//     error:false,
//     movies:[],
//     totalResult:0,

//     searchKey:"",
//     activePage:1,
//     movieDetail:false
export default function useMovieSearch(pageNumber) {
    const dispatch = useDispatch()
    const { loading, movies, totalResult, error, searchKey } = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(set_movies([]))
        dispatch(set_page(1))
    }, [searchKey]);

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
                        // console.log(res.data)
                        // const newData = (prevMovies) => {
                        //     return [
                        //         ...new Set([
                        //             ...prevMovies,
                        //             ...res.data.Search.map((b) => b),
                        //         ]),
                        //     ];
                        // }
                        // console.log("dasads",newData)
                        const updateData = movies.concat(res.data.Search)
                        console.log(updateData)
                        dispatch(set_movies(updateData));
                        dispatch(set_total_result(parseInt(res.data.totalResults)))
                        // setTotalResult(parseInt(res.data.totalResults));
                        // setHasMore(parseInt(res.data.totalResults) > 0);
                    }
                    dispatch(set_loading(false))
                })
                .catch((e) => {
                    if (axios.isCancel(e)) return;
                    dispatch(set_error(true))
                });

        requestMovie();

        return () => cancel();
    }, [searchKey, pageNumber]);

    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);
    // const [movies, setMovies] = useState([]);
    // const [totalResult, setTotalResult] = useState(0);

    // useEffect(() => {
    //     setMovies([]);
    // }, [query]);

    // useEffect(() => {
    //     setLoading(true);
    //     setError(false);
    //     let cancel;
    //     const OMDB_API = process.env.REACT_APP_OMDB_API_KEY;

    //     const requestMovie = () =>
    //         axios({
    //             method: "GET",
    //             url: `${process.env.REACT_APP_BASE_API_URL}?apikey=${OMDB_API}`,
    //             params: { s: query, page: pageNumber },
    //             cancelToken: new axios.CancelToken((c) => (cancel = c)),
    //         })
    //             .then((res) => {
    //                 if (res?.data.Response !== "False") {
    //                     setMovies((prevMovies) => {
    //                         return [
    //                             ...new Set([
    //                                 ...prevMovies,
    //                                 ...res.data.Search.map((b) => b),
    //                             ]),
    //                         ];
    //                     });
    //                     setTotalResult(parseInt(res.data.totalResults));
    //                     // setHasMore(parseInt(res.data.totalResults) > 0);
    //                 }
    //                 setLoading(false);
    //             })
    //             .catch((e) => {
    //                 if (axios.isCancel(e)) return;
    //                 setError(true);
    //             });

    //     requestMovie();

    //     return () => cancel();
    // }, [query, pageNumber]);

    return { loading, error, movies, totalResult };
}
