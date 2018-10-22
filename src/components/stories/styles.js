import { withStyles } from '@material-ui/core/';

export const withIndexStyle = withStyles(theme => ({
  root: {
    width: '100%',
    height: theme.spacing.unit * 34,
    textAlign: 'end',
    background: theme.palette.common.black,
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing.unit * 50,
    }
  },
  storiesContainer: {
    height: '100%',
  },
  backdrop: {
    backgroundColor: theme.palette.grey[900],
  },
  paper: {
    backgroundColor: theme.palette.common.black,
    margin: '0 auto',
    maxWidth: theme.spacing.unit * 78,
    height: '100%',
    borderRadius: 0,
    flexGrow: 1,
    textAlign: 'right',
  },
  button: {
    margin: theme.spacing.unit * 2,
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
    boxShadow: 'none',
    position: 'relative',
    marginBottom: theme.spacing.unit * -8,
    zIndex: 1,
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    fontSize: theme.typography.display3.fontSize,
    textShadow: `1px 1px 4px ${theme.palette.common.black}`,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.display2.fontSize,
    }
  },
  swipeableViews: {
    height: '100%',
    marginTop: theme.spacing.unit * -2,
    padding: `${theme.spacing.unit * 2}px 0`,
    '&>div': {
      height: '100%',
    }
  },
  views: {
    overflow: "hidden",
    height: '100%',
    width: '98%',
    margin: `0 auto`,
    backgroundOrigin: 'initial',
    backgroundPosition: 'initial',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
  },
  img: {
    height: 'auto',
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    minWidth: "100%",
  },
  mobileStepper: {
    position: 'relative',
    bottom: theme.spacing.unit * 8,
    justifyContent: 'space-around',
    background: 'transparent',
  },
  progress: {
    width: '100%',
    height: theme.spacing.unit,
    backgroundColor: theme.palette.common.white,
  },
  dots: {
    width: '100%',
    height: theme.spacing.unit,
    justifyContent: 'space-around',
  },
  dot: {
    width: '100%',
    borderRadius: 0,
    background: theme.palette.grey[700],
  },
  dotActive: {
    background: theme.palette.primary.main,
  },
  arrows: {
    position: 'fixed',
    top: '40%',
    left: 0,
    width: '100%',
    display: 'inline-flex',
    justifyContent: 'space-between',
    zIndex: 1,
  },
  arrowButton: {
    margin: theme.spacing.unit * 2,
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));
