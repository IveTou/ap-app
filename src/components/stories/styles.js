import { withStyles } from '@material-ui/core/';

export const withIndexStyle = withStyles(theme => ({
  root: {
    width: '100%',
    height: theme.spacing.unit * 40,
    textAlign: 'end',
    background: theme.palette.common.black,
  },
  button: {
    margin: theme.spacing.unit * 2,
    backgroundColor: 'transparent',
    color: theme.palette.common.white,
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  icon: {
    fontSize: theme.typography.display3.fontSize,
  },
}));
