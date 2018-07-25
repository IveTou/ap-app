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
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 2,
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing.unit * 4,
      marginBottom: theme.spacing.unit,
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
  },
  followers: {
    marginLeft: theme.spacing.unit * 2,
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
    marginLeft: theme.spacing.unit * 2,
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
