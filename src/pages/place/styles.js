import { withStyles } from '@material-ui/core/styles';

export const withIndexStyle = withStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: theme.spacing.unit * 125,
    padding: `0 ${theme.spacing.unit * 3}px`,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
  },
  header: {
    display: 'inline-flex',
    alignItems: 'center',
    flexGrow: 1,
    margin: `${theme.spacing.unit * 6}px 0`,
    [theme.breakpoints.down('sm')]: {
      margin: `${theme.spacing.unit * 4}px 0`,
    }
  },
  headerInfo: {
    flexGrow: 1,
  },
  avatar: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit * -2,
    width: theme.spacing.unit * 15,
    height: theme.spacing.unit * 15,
  },
  stats: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  action: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: theme.spacing.unit,
  },
  title: {
    fontSize: theme.typography.display2.fontSize,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.display1.fontSize,
    }
  },
  button: {
    margin: theme.spacing.unit,
  },
  grid: {
  },
}));
