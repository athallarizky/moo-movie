import { render } from "@testing-library/react"
import MovieBox from './index'

describe(MovieBox, () => {
    /**
     * Check if element exists
     */
    it("<div> Movie Poster should be exists.", () => {
        const { getByTestId } = render(<MovieBox />)
        const divTitle = getByTestId("divMoviePoster")
        expect(divTitle).toBeTruthy()
    })
    it("<div> Movie Title should be exists.", () => {
        const { getByTestId } = render(<MovieBox />)
        const divTitle = getByTestId("divMovieTitle")
        expect(divTitle).toBeTruthy()
    })

    it("<div> Movie Tag Type should be exists.", () => {
        const { getByTestId } = render(<MovieBox />)
        const divTitle = getByTestId("divMovieTagType")
        expect(divTitle).toBeTruthy()
    })

    it("Test Props Already Passed", () => {
        const data = {
            "Title": "Batman: Year One",
            "Year": "2011",
            "imdbID": "tt1672723",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNTJjMmVkZjctNjNjMS00ZmI2LTlmYWEtOWNiYmQxYjY0YWVhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"
        }
        render(<MovieBox movieData={data}/>)
        expect.objectContaining({
            movieData:data
        })
    })
    
})