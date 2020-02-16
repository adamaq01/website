import React from "react";
import {withStyles} from "@material-ui/styles";
import {withRouter} from "react-router";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AppBar from "@material-ui/core/AppBar";

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    bar: {
        colorDefault: theme.palette.background.default,
    },
    title: {
        flexGrow: 1,
        fontStyle: 'bold',
    },
});

class Bar extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <AppBar position="fixed" color="default" className={classes.bar}>
                    <Toolbar>
                        <Typography variant="h5" className={classes.title}>
                            Adamaq01
                        </Typography>
                        <Button color="inherit" onClick={() => this.props.history.push("/")}>Home</Button>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default withRouter(withStyles(styles, {withTheme: true})(Bar))