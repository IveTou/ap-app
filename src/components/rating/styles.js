import { withStyles } from '@material-ui/core/styles';
import { amber } from '@material-ui/core/colors';

export const withIndexStyle = withStyles(theme => ({
  root: {
    display: 'inline-flex',
    margin: theme.spacing.unit,
    alignItems: 'center',
  },
  icon: {
    color: amber[600],
  },
}));
