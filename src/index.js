import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./App";
import "assets/css/index.css";

// Redux
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "redux/store";

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ChakraProvider>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </ChakraProvider>
    </Provider>
);
