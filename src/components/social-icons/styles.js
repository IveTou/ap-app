import { withStyles } from '@material-ui/core/styles';

export const withIndexStyle = withStyles(theme => ({
  svg: {
    height: theme.spacing.unit * 5,
    margin: theme.spacing.unit,
  },
  path: {
    fill: theme.palette.common.light,
  },
}));
