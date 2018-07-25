import { withStyles } from '@material-ui/core/styles';

export const withIndexStyle = withStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: theme.spacing.unit * 125,
    padding: `0 ${theme.spacing.unit * 3}px`,
    margin: '0 auto',
    display: 'grid',
    alignItems: 'center',
    marginBottom: theme.spacing.unit * 4,
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
    marginTop: theme.spacing.unit * -7,
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
    marginLeft: theme.spacing.unit * 4,
  },
  tabBar: {
    backgroundColor: 'transparent',
    boxShadow: theme.shadows[0],
  },
}));

export const withMainStyle = withStyles(theme => ({
  root: {
    overflow: 'hidden',
    paddingTop: theme.spacing.unit * 2,
  },
  title: {
    padding: `0 ${theme.spacing.unit}px`,
  },
  listItem: {
    padding: 0,
    paddingBottom: theme.spacing.unit,
  },
  listItemText: {
    paddingLeft: theme.spacing.unit,
  },
  avatar: {
    height: theme.spacing.unit * 3,
    width: theme.spacing.unit * 3,
  },
  map: {
    padding: theme.spacing.unit,
    paddingRight: 0,
  },
}));
