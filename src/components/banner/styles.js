import { withStyles } from '@material-ui/core/';

export const withIndexStyle = withStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.light,
    borderRadius: theme.spacing.unit / 2,
    width: '100%',
    height: theme.spacing.unit * 30,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    whiteSpace: 'nowrap',
    position: 'relative',
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      height: theme.spacing.unit * 20,
      backgroundColor: theme.palette.secondary.main,
    },
  },
  overlay: {
    height: '100%',
    width: '50%',
    textAlign: 'right',
    borderRadius: theme.spacing.unit / 2,
    backgroundColor: theme.palette.action.active,
    color: theme.palette.grey[50],
    padding: theme.spacing.unit * 2,
    display: 'inline-block',
    float: 'right',
    [theme.breakpoints.down('xs')]: {
      minWidth: '50%',
      width: 'auto',
    },
  },
  title: {
    overflow: 'hidden',
    whiteSpace: 'normal',
    maxHeight: '50%',
    fontSize: theme.typography.display1.fontSize,
    paddingRight: theme.spacing.unit,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.headline.fontSize,
    },
  },
  subtitle: {
    overflow: 'hidden',
    whiteSpace: 'normal',
    maxHeight: '100%',
    padding: theme.spacing.unit,
    fontSize: theme.typography.title.fontSize,
    fontWeight: theme.typography.fontWeightLight,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.subheading.fontSize,
    },
  },
}));
