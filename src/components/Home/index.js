import React from "react";
import Typography from "@material-ui/core/Typography";
import WaveBorder from "../WaveBorder";
import {withStyles} from "@material-ui/styles";
import {Box} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import PresentationCard from "./PresentationCard";

const styles = theme => ({
    topBox: {
        height: '50vh',
        [theme.breakpoints.up('xs')]: {
            height: '60vh'
        },
    },
    presentationCard: {
        minHeight: '58vh',
        [theme.breakpoints.up('xs')]: {
            minHeight: '68vh'
        },
    }
});

class Home extends React.Component {

    render() {
        const {classes, theme} = this.props;

        return (
            <Box>
                <Box bgcolor={theme.palette.secondary.main} className={classes.topBox}>
                    <Grid container
                          alignItems="center"
                          justify="center"
                          alignContent="center"
                          direction="column" className={classes.presentationCard}>
                        <Grid item style={{width: '90%'}}>
                            <PresentationCard>
                                <Grid container justify="space-around" direction="column" alignItems="flex-start">
                                    <Grid item xs={12}>
                                        <Typography variant="h4">
                                            Adamaq01
                                        </Typography>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Typography variant="body1" color="textSecondary">
                                            Yeah I love gaming and developing stuff.
                                        </Typography>
                                        <br/>
                                        <Typography variant="body1" color="textSecondary">
                                            Mainly playing Minecraft, osu! and CS:GO, though I like other games too.
                                        </Typography>
                                        <br/>
                                        <Typography variant="body1" color="textSecondary">
                                            Developing things in Java because why not ¯\_(ツ)_/¯.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </PresentationCard>
                        </Grid>
                    </Grid>
                </Box>
                <WaveBorder upperColor={theme.palette.secondary.main} lowerColor={theme.palette.background.default}/>
                <Grid container justify="center" direction="column" alignItems="center">
                    {['Normalement', 'là', 'y\'a', 'des', 'trucs', 'mais', 'wow', 'la', 'flemme', 'de', 'remplir'].map(value => (
                        <Grid item key={value}>
                            <Typography variant="h6">
                                {value}
                            </Typography>
                            <br/>
                            <br/>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        );
    }
}

export default withStyles(styles, {withTheme: true})(Home);