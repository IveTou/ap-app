import { withStyles } from '@material-ui/core/styles';

export const withIndexStyle = withStyles(theme => ({
  root: {
    margin: `${theme.spacing.unit}px 0`,
    backgroundColor: theme.palette.grey[200],
    borderRadius: theme.spacing.unit / 2,
  },
  avatar: {
    alignSelf: 'flex-start',
  },
  name: {
    textDecoration: 'none',
  }
}));
