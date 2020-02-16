import React from "react";
import withStyles from "@material-ui/styles/withStyles";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    root: {
        width: '100%',
        height: '90%'
    },
    grid: {
        flex: 'auto',
        width: '100%',
        height: '33.3%',
        padding: '5%',
    },
    content: {
        flex: 'auto',
        width: '70%',
        height: '100%',
        paddingRight: '5%',
    },
    image: {
        flex: 'auto',
        width: '30%',
        height: '100%'
    },
    cover: {
        width: '90%',
        height: '100%',
        borderRadius: 5
    },
});

class PresentationCard extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <Grid container spacing={0} justify="center" className={classes.root}>
                <Grid item>
                    <Paper elevation={3}>
                        <Grid container className={classes.grid}>
                            <Grid item className={classes.content}>
                                {this.props.children}
                            </Grid>
                            <Grid item className={classes.image}>
                                <Avatar src="/images/profile.jpg" variant="square" className={classes.cover}/>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        );
    }
}

export default withStyles(styles, {withTheme: true})(PresentationCard);