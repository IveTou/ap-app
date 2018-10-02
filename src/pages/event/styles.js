  import { withStyles } from '@material-ui/core/styles';

  export const withIndexStyle = withStyles(theme => ({
    root: {
      flexGrow: 1,
      maxWidth: theme.spacing.unit * 137,
      padding: `0 ${theme.spacing.unit * 3}px`,
      margin: '0 auto',
      display: 'grid',
      alignItems: 'center',
      marginBottom: theme.spacing.unit * 8,
    },
    header: {
      display: 'inline-flex',
      alignItems: 'center',
      flexGrow: 1,
      paddingBottom: theme.spacing.unit * 2,
      paddingTop: theme.spacing.unit * 2,
      [theme.breakpoints.down('xs')]: {
        paddingTop: 0,
        paddingBottom: theme.spacing.unit,
        flexDirection: 'row-reverse',
      }
    },
    listItem: {
      padding: 0,
      paddingBottom: theme.spacing.unit,
    },
    listItemText: {
      paddingLeft: theme.spacing.unit,
    },
    button: {
      padding: `${theme.spacing.unit / 2}px ${theme.spacing.unit}px`,
      margin: `0 ${theme.spacing.unit * 2}px`,
      minHeight: theme.spacing.unit * 3,
      fontWeight: theme.typography.fontWeightLight,
    },
    avatar: {
      height: theme.spacing.unit * 4,
      width: theme.spacing.unit * 4,
      margin: `0 ${theme.spacing.unit}px`,
    },
    map: {
      padding: theme.spacing.unit,
      paddingRight: 0,
    },
}));
