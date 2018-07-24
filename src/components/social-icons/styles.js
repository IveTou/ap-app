import { withStyles } from '@material-ui/core/styles';

export const withIndexStyle = withStyles(theme => ({
  root: {
    marginTop: theme.spacing.unit / 2,
  },
  svg: {
    width: theme.spacing.unit * 3,
    height: theme.spacing.unit * 3,
    margin: theme.spacing.unit,
  },
  path: {
    fill: theme.palette.common.light,
  },
}));
