import { render } from "@testing-library/react";
import PosterModal from "./index";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";

describe(PosterModal, () => {
    const initialState = {
        Title: "Batman & Robin",
        Year: "1997",
        Rated: "PG-13",
        Released: "20 Jun 1997",
        Runtime: "125 min",
        Genre: "Action, Sci-Fi",
        Director: "Joel Schumacher",
        Writer: "Bob Kane, Akiva Goldsman",
        Actors: "Arnold Schwarzenegger, George Clooney, Chris O'Donnell",
        Plot: "Batman and Robin try to keep their relationship together even as they must stop Mr. Freeze and Poison Ivy from freezing Gotham City.",
        Language: "English",
        Country: "United States, United Kingdom",
        Awards: "10 wins & 22 nominations",
        Poster: "https://m.media-amazon.com/images/M/MV5BMGQ5YTM1NmMtYmIxYy00N2VmLWJhZTYtN2EwYTY3MWFhOTczXkEyXkFqcGdeQXVyNTA2NTI0MTY@._V1_SX300.jpg",
        Ratings: [
            {
                Source: "Internet Movie Database",
                Value: "3.7/10",
            },
            {
                Source: "Rotten Tomatoes",
                Value: "12%",
            },
            {
                Source: "Metacritic",
                Value: "28/100",
            },
        ],
        Metascore: "28",
        imdbRating: "3.7",
        imdbVotes: "250,440",
        imdbID: "tt0118688",
        Type: "movie",
        DVD: "21 Oct 1997",
        BoxOffice: "$107,353,792",
        Production: "N/A",
        Website: "N/A",
        Response: "True",
    };

    const mockStore = configureStore();
    let store;

    const ReduxProvider = ({ children, reduxStore }) => (
        <Provider store={reduxStore}>{children}</Provider>
    );
    /**
     * Check if element exists
     */
    it("<div> Movie Poster should be exists.", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                {" "}
                <PosterModal />
            </Provider>
        );
        const divTitle = getByTestId("divMoviePoster");
        expect(divTitle).toBeTruthy();
    });
    it("<div> Movie Title should be exists.", () => {
        const { getByTestId } = render(
            <Provider store={store}>
                {" "}
                <PosterModal />
            </Provider>
        );
        const divTitle = getByTestId("divMovieTitle");
        expect(divTitle).toBeTruthy();
    });

    it("<div> Movie Btn Type should be exists.", () => {
        store = mockStore(initialState);
        // const { getByTestId } = render(<ReduxProvider reduxStore={reduxStoreData}> <PosterModal /> </ReduxProvider>)
        const { getByTestId } = render(
            <Provider store={store}>
                {" "}
                <PosterModal />
            </Provider>
        );
        const divTitle = getByTestId("divMovieBtn");
        expect(divTitle).toBeTruthy();
    });

    // it("Test Props Already Passed", () => {
    //     const data = {
    //         "Title": "Batman: Year One",
    //         "Year": "2011",
    //         "imdbID": "tt1672723",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BNTJjMmVkZjctNjNjMS00ZmI2LTlmYWEtOWNiYmQxYjY0YWVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
    //     }
    //     render(<MovieBox movieData={data}/>)
    //     expect.objectContaining({
    //         movieData:data
    //     })
    // })
});
