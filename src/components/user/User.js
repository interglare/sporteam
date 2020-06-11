import React from 'react';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid, Avatar } from '@material-ui/core';
import 'moment/locale/ru';
import Paper from '@material-ui/core/Paper'

const styles = theme => ({
    icon: {
        marginRight: theme.spacing.unit * 2,
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(500 + theme.spacing.unit * 3 * 2)]: {
            width: '70%',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    card: {
        display: 'flex',

    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 'auto',
        height: '100px'
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    smallAvatar: {
        margin: 2,
        width: 20,
        height: 20,
    },
    
    [theme.breakpoints.down('sm')]: {
        imageEvent: {
            maxHeight: '300px',
            overflow: 'hidden',
            position: 'relative'
        }
    },
    [theme.breakpoints.up('md')]: {
        imageEvent: {
            maxHeight: '390px',
            overflow: 'hidden',
            position: 'relative'
        }
    },
});

class User extends React.Component {
    render() {

        const { classes } = this.props;

        return <React.Fragment> 
            <div className={classNames(classes.layout, classes.cardGrid)}><br/>
                <Grid container spacing={24}>
                    <Grid item xs={12} md={4}>
                    <Avatar src="https://i.pinimg.com/originals/ad/f6/5e/adf65ef5b98019f8f35b29e31db4edb7.jpg" style={{width:'100%',height:'100%'}}></Avatar>
                    </Grid> 
                    <Grid item xs={12} md={8}>

                    
                        <Paper className={classes.root} elevation={1}>
                            
                            <Typography component="h3" style ={{textAlign:'justify',padding:'10px'}}>
                           kostya-konst
                            </Typography>
                            <Typography component="h4" style ={{textAlign:'justify',padding:'10px'}}>
                           Константин Константинович Константинопольский
                            </Typography>
                            <Typography component="h4" style ={{textAlign:'justify',padding:'10px'}}>
                            <i className="fas fa-location-arrow"></i>Астана
                            </Typography>
                            <Typography component="h4" style ={{textAlign:'justify',padding:'10px'}}>
                            8777 777 77 77
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </React.Fragment>
    }
}

export default withStyles(styles)(User)