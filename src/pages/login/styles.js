
import { withStyles } from '@material-ui/core/styles';

export const withIndexStyle = withStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: theme.spacing.unit * 125,
    padding: `0 ${theme.spacing.unit * 3}px`,
    margin:  `${theme.spacing.unit * 15}px auto`,
    display: 'grid',
    justifyContent: 'center',
    [theme.breakpoints.down('sm')]: {
      margin:  `${theme.spacing.unit * 3}px auto`,
    }
  },
}));
