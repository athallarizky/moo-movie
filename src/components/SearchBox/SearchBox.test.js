import { render } from "@testing-library/react";
import SearchBox from "./index";

describe(SearchBox, () => {
    /**
     * Check if element exists
     */
    it("Input Form should be exists.", () => {
        const { getByTestId } = render(<SearchBox />);
        const divTitle = getByTestId("inputForm");
        expect(divTitle).toBeTruthy();
    });
    
});
