import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Hidden from "@material-ui/core/Hidden";
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import IconButton from "@material-ui/core/IconButton";
import {withStyles} from "@material-ui/core";

const styles = theme => ({
    root: {
        flex: 1,
        flexBasis: 'auto',
        flexGrow: 0,
        flexShrink: 1,
        aspectRatio: 'auto',
        width: '100%',
        height: '100%'
    },
    paper: {
        padding: '5%',
        margin: 'auto',
    },
    description: {
        height: '93%',
    },
    buttons: {
        height: '7%',
        marginLeft: '-2.5%'
    },
    image: {
        marginLeft: '2%',
        width: '35%',
        height: '100%',
        flexGrow: 1,
        flexShrink: 0,
    },
});

class PresentationCard extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <Grid container justify="center">
                <Grid item xs={12} sm={9} lg={6} className={classes.root}>
                    <Paper elevation={3} className={classes.paper}>
                        <Grid container direction="row" justify="flex-start"
                              alignItems="stretch" alignContent="stretch" wrap="nowrap">
                            <Grid item container direction="column" justify="flex-start" alignItems="stretch"
                                  alignContent="stretch" className={classes.content}>
                                <Grid item className={classes.description}>
                                    {this.props.children}
                                </Grid>
                                <Grid item className={classes.buttons}>
                                    <IconButton href="https://github.com/Adamaq01">
                                        <GitHubIcon/>
                                    </IconButton>
                                    <IconButton href="https://twitter.com/adamaq01">
                                        <TwitterIcon/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Hidden smDown>
                                <Grid item className={classes.image}>
                                    <Avatar src="/images/profile.jpg" variant="square"
                                            style={{height: '100%', width: '100%', borderRadius: 5}}/>
                                </Grid>
                            </Hidden>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles, {withTheme: true})(PresentationCard);