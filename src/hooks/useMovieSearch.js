import { useEffect, useState } from "react";
import axios from "axios";

export default function useMovieSearch(query, pageNumber) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [movies, setMovies] = useState([]);
    const [hasMore, setHasMore] = useState(false);
    const [totalResult, setTotalResult] = useState(0)

    useEffect(() => {
        setMovies([]);
    }, [query]);

    useEffect(() => {
        setLoading(true);
        setError(false);
        let cancel;
        const OMDB_API = process.env.REACT_APP_OMDB_API_KEY;

        const requestMovie = () => axios({
            method: 'GET',
            url: `${process.env.REACT_APP_BASE_API_URL}?apikey=${OMDB_API}`,
            params: { s: query, page: pageNumber },
            cancelToken: new axios.CancelToken(c => cancel = c)
        }).then(res => {
              if(res?.data.Response !== "False"){
                  setMovies(prevMovies => {
                    return [...new Set([...prevMovies, ...res.data.Search.map(b => b)])]
                  })
                  setTotalResult(parseInt(res.data.totalResults))
                  setHasMore(parseInt(res.data.totalResults) > 0)
              }
            setLoading(false)
          }).catch(e => {
            if (axios.isCancel(e)) return
            setError(true)
          })

        //   if(hasMore){
            //   console.log('hasMore', hasMore)
              requestMovie()
        //   }

        // const fetchMovies = async () => {
        //     const OMDB_API = process.env.REACT_APP_OMDB_API_KEY;
        //     try {
        //         const data = await axios.get(
        //             `?apikey=${OMDB_API}&s=${query}&page=${pageNumber}`, {
        //                 cancelToken: new axios.CancelToken(c => cancel = c)
        //             }
        //         );
        //         console.log({data})
        //         if (data.Response !== "False") {
        //             setMovies((prevMovies) => {
        //                 return [
        //                     ...new Set([
        //                         ...prevMovies,
        //                         ...data.map((d) => d.title),
        //                     ]),
        //                 ];
        //             });
        //             setHasMore(parseInt(data?.totalResults) > 0);
        //             setLoading(false);
        //         }
        //     } catch (error) {
        //         if (axios.isCancel(error)) return;
        //         setError(true);
        //         console.log({ error });
        //         throw new Error();
        //     }
        // };

        // if(query !== ''){
        //     fetchMovies()
        // }

        return () => cancel();
    }, [query, pageNumber]);

    return { loading, error, movies, hasMore, totalResult };
}
