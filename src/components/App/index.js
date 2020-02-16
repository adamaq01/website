import React, {Fragment, Suspense} from 'react';
import {ThemeProvider} from '@material-ui/styles';
import {createMuiTheme} from '@material-ui/core/styles'
import {indigo} from '@material-ui/core/colors'
import Routes from "../../routes";
import CssBaseline from "@material-ui/core/CssBaseline";
import {BrowserRouter} from "react-router-dom";
import Bar from "../Bar";
import WaveBorder from "../WaveBorder";
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

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
    },
    bottomBox: {
        height: '5vh'
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
                    <WaveBorder upperColor={theme.palette.background.default}
                                lowerColor={theme.palette.background.paper}
                                offset={16}/>
                    <Box bgcolor={theme.palette.background.paper} className={theme.bottomBox}>
                        <Grid container justify="space-between" alignItems="center" direction="column">
                            <Grid item>
                                <Typography variant="overline" color="textSecondary">
                                    Adamaq01 - 2020
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant="overline" color="textSecondary">
                                    <Link href="https://github.com/Adamaq01/website">
                                        Sources
                                    </Link>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Box>
                </BrowserRouter>
            </ThemeProvider>
        );
    }
}

export default App;
