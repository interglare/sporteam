import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  appBar: {
    position: 'relative',
  },
  toolbarTitle: {
    flex: 1,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(900 + theme.spacing.unit * 3 * 2)]: {
      width: 900,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  heroContent: {
    maxWidth: 600,
    margin: '0 auto',
    padding: `${theme.spacing.unit * 8}px 0 ${theme.spacing.unit * 6}px`,
  },
  cardHeader: {
    backgroundColor: theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing.unit * 2,
  },
  cardActions: {
    [theme.breakpoints.up('sm')]: {
      paddingBottom: theme.spacing.unit * 2,
    },
  },
  footer: {
    marginTop: theme.spacing.unit * 8,
    borderTop: `1px solid ${theme.palette.divider}`,
    padding: `${theme.spacing.unit * 6}px 0`,
  },
});

function Mockup(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Typography component="h1" variant="h4" align="center" color="textPrimary" gutterBottom>
            Приложение для Android
          </Typography>
          <Typography variant="h6" align="center" color="textSecondary" component="p">
            <Button href="https://firebasestorage.googleapis.com/v0/b/sportreact-526d8.appspot.com/o/sportcalendar-557d2998f5eb49cea87038d91fe96f52.apk?alt=media&token=f495bfc9-63a3-4aee-a607-39d34df367de" variant="contained" color="primary" className={classes.button}>
                <i className="fab fa-google-play" style={{ fontSize: '18px'}}></i>
                &nbsp; Установить
            </Button>
          </Typography>
        </div>
        {/* End hero unit */}
        <Grid container alignItems="center" justify='center'>
            {
                <img src='./img/mockup.png' alt="Android App" height='551'/>
            }
        </Grid>
            
      </main>
    </React.Fragment>
  );
}

Mockup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Mockup);