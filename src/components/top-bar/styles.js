import { withStyles } from '@material-ui/core/styles';

export const topbarHeight = 64;

export const withIndexStyle = withStyles(theme => ({
  root: {
    height: topbarHeight,
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    boxShadow: theme.shadows[0],
  },
  toolbar: {
    position: 'relative',
    margin: '0 auto',
    maxWidth: theme.spacing.unit * 125,
    width: '100%',
    justifyContent: 'space-between',
  },
  button: {
    margin: theme.spacing.unit,
  },
}));
