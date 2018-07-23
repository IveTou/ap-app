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
  header: {
  },
  grid: {
  },
}));
