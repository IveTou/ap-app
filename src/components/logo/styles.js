import { withStyles } from '@material-ui/core/styles';

export const withIndexStyle = withStyles(theme => ({
  root: {
    lineHeight: theme.spacing.unit * 5,
    height: theme.spacing.unit * 5,
    display: 'inline-block',
  },
}));
