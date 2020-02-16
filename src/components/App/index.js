import React, {Fragment, Suspense} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles'
import {indigo} from '@material-ui/core/colors'
import Routes from "../../routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import {BrowserRouter} from "react-router-dom";
import Bar from "../Bar";

const theme = createMuiTheme({
    palette: {
        type: 'dark',
        secondary: {
            main: '#0050B2'
        },
        primary: {
            main: indigo[700]
        },
        background: {
            default: '#181a1b',
            paper: '#252729'
        }
    }
});

class App extends React.Component {

    render() {
        return (
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <BrowserRouter>
                    <Bar/>
                    <Suspense fallback={<Fragment/>}>
                        <Routes/>
                    </Suspense>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}

export default App;
