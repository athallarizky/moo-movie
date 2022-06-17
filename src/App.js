import {
    Switch,
    BrowserRouter as Router,
    Route,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

// Pages
import Landing from "pages/Landing";
import MovieDetail from "pages/MovieDetail";
import SearchBox from "components/SearchBox";

const App = () => {
    return (
        <Box
            className="App"
            width="100%"
            height="100%"
        >
            <Box
                className="navbar"
                background="#FFF"
                width="100%"
                height="12vh"
                position="fixed"
                display="flex"
                justifyContent="center"
                alignItems="center"
                zIndex="99"
                shadow="base"
            >
                <Box className="searchbox-wrapper" width="50%">
                    <SearchBox />
                </Box>
            </Box>

            <Box
                className="content-container"
                paddingTop="12vh !important"
                width="90%"
                height="100%"
                margin="0 auto !important"
            >
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing} />
                    <Route
                        exact
                        path="/detail/:movieId"
                        component={MovieDetail}
                    />
                </Switch>
            </Router>
            </Box>
            {/* </Box> */}
        </Box>
    );
};

export default App;
