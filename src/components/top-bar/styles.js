import { withStyles } from '@material-ui/core/styles';

export const withIndexStyle = withStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: theme.spacing.unit * 125,
    padding: `0 ${theme.spacing.unit * 3}px`,
    margin: `0 auto`,
    display: 'flex',
    alignItems: 'center',
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[0],
  },
  button: {
    margin: theme.spacing.unit,
  },
}));
