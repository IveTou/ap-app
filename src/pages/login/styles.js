
import { withStyles } from '@material-ui/core/styles';

const backgroundZIndex = -101;

export const withIndexStyle = withStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
    maxWidth: theme.spacing.unit * 125,
    padding: `0 ${theme.spacing.unit * 3}px`,
    margin:  `${theme.spacing.unit * 15}px auto`,
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      margin:  `${theme.spacing.unit * 3}px auto ${theme.spacing.unit * 10}px`,
    }
  },
  title: {
    padding: `0 ${theme.spacing.unit *2}px`,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  background: {
    position: 'absolute',
    zIndex: backgroundZIndex,
    left: theme.spacing.unit * 30,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  }
}));
